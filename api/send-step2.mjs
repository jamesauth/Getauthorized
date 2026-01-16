import axios from 'axios';

export default async function handler(event, context) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

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
      subject: 'Test Email',
      htmlContent: '<h1>Hello, this is a test email!</h1>'
    }, {
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    console.log('Brevo response:', response.data);
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success', message: 'Email sent successfully.' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: 'Failed to send email.' })
    };
  }
}
