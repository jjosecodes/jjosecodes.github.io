import React from 'react';

const ThankYouPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Thank You!</h1>
      <p>Your submission has been received.</p>
      <button onClick={goBack} style={{ cursor: 'pointer' }}>
        Return
      </button>
    </div>
  );
};

export default ThankYouPage;