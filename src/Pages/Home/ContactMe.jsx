export default function ContactMe() {
  return (
      <section id="Contact" className="contact--section">
          <div>
              <p className="sub--title"> </p>
              <h2>Contact Me</h2>
              <p className="text-lg">
                  Is there any criticism or tips for this website? Feel free to let me know down below!
              </p>
          </div>
          <form 
              action="https://formsubmit.co/josejobinsj@gmail.com" 
              method="POST" 
              className="contact--form--container"
          >
              <div className="container">
                  <label htmlFor="first-name" className="contact--label">
                      <span className="text-md">First Name</span>
                      <input
                          type="text"
                          className="contact--input text-md"
                          name="first-name"
                          id="first-name"
                          required
                      />
                  </label>
                  <label htmlFor="last-name" className="contact--label">
                      <span className="text-md">Last Name</span>
                      <input
                          type="text"
                          className="contact--input text-md"
                          name="last-name"
                          id="last-name"
                          required
                      />
                  </label>
                  <label htmlFor="email" className="contact--label">
                      <span className="text-md">Email</span>
                      <input
                          type="email"
                          className="contact--input text-md"
                          name="email"
                          id="email"
                          required
                      />
                  </label>
                  <label htmlFor="phone-number" className="contact--label">
                      <span className="text-md">Phone Number</span>
                      <input
                          type="number"
                          className="contact--input text-md"
                          name="phone-number"
                          id="phone-number"
                          required
                      />
                  </label>
              </div>
              <label htmlFor="choose-topic" className="contact--label">
                  <span className="text-md">Are you  </span>
                  <select 
                      name="choose-topic" 
                      id="choose-topic" 
                      className="contact--input text-md"
                  >
                      <option>Select One...</option>
                      <option>A Recruiter</option>
                      <option>From Linkedin</option>
                      <option>Just looking around</option>
                  </select>
              </label>
              <label htmlFor="message" className="contact--label">
                  <span className="text-md">Message</span>
                  <textarea
                      name="message"
                      className="contact--input text-md"
                      id="message"
                      rows="8"
                      placeholder="Type your message..."
                      required
                  />
              </label>
              <label htmlFor="checkbox" className="checkbox--label">
                  <input 
                      type="checkbox" 
                      required 
                      name="checkbox" 
                      id="checkbox" 
                  />
                  <span className="text-sm">I accept the terms</span>
              </label>
              <div>
                  <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
              </div>
          </form>
      </section>
  );
  
}
