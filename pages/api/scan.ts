import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || '',
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key not configured, please follow instructions in README.md',
      },
    });
    return;
  }

  const { emailAddress, subject, body } = req.body;

  if (!emailAddress || !subject || !body) {
    res.status(400).json({
      error: {
        message: 'Please provide email address, subject, and body',
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: createPrompt(emailAddress, subject, body),
      temperature: 0.6,
      max_tokens: 100,
    });

    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: { message: 'An error occurred' } });
  }
}

function createPrompt(emailAddress: string, subject: string, body: string): string {
  return `
    I am going to send you the email address, subject line, and email body for an email I received. Can you please check if this could be a phishing or scam email?

    Email address: ${emailAddress}
    Subject: ${subject}
    Body: ${body}
  `;
}
