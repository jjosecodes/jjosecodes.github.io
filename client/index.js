import AWS from 'aws-sdk';


const AWS =  require('aws-sdk');
AWS.config.update({
    region: 'us-east-2'
});
const dynamodb = new AWS.DynamoDB.DocumentClient();
const DynamoDBTableName = 'projects-table';

const getProjectsPath = '/getprojects'; 
const postProjectPath = '/postproject';

exports.handler = async function(event) {
    let response;
    switch(true) {
        case event.httpMethod === 'GET' && event.path === getProjectsPath:
            response = await getProjects();
            break;
        case event.httpMethod === 'POST' && event.path === postProjectPath:
            response = await saveProject(JSON.parse(event.body));
            break;
        default:
            response = buildResponse(404, 'not working bro');
    }
    return response;
}
 
async function getProjects() {
    const params = {
        TableName: DynamoDBTableName
    }
    try{
        const data = await dynamodb.scan(params).promise();
        return buildResponse(200, data);
    } catch(err) {
        return responseReturn(500, err);
    }
}

async function postProject(requestBody) {
    const params = {
        TableName: DynamoDBTableName,
        Item: requestBody
    }

    return await dynamodb.put(params).promise().then(() => {
        const body = {
            Message: 'SUCCESS',
            Item: requestBody   
        }
        return responseReturm(200, body);
    }, (error) => {
        return error;
    })
    }
    
    function responseReturn(statusCode, body) {
        return {
            statusCode: statusCode,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }