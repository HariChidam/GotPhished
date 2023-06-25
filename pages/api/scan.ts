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
  I have received an email and I need your assistance in evaluating if it is a phishing or scam email. Please carefully review the following details:

  Email address: ${emailAddress}
  Subject: ${subject}
  Body: ${body}

  Criteria for identifying phishing or scam emails:
  1. Check for any suspicious or unusual content in the email.
  2. Look for any requests for personal information, such as passwords or credit card details.
  3. Analyze the email for any suspicious attachments or links.
  4. Pay attention to the sender's email address and verify its authenticity.
  5. Assess the overall tone and language used in the email for any signs of urgency, coercion, or inconsistencies.
  6. Look for any grammatical or spelling errors in the email.

  Please provide an analysis of the email, highlighting any red flags or indications of phishing or scam activity. Your expertise is greatly appreciated. In your response make sure
  the first thing you say is the percentage chance that this is an phishing or scam email. Just have it be a number between 0 and 100 with no actual percent symbol.
  After that continue to the explanation. For example "90 This email is a phishing email beacause..."

  Thank you!
  `;
}
