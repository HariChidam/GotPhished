import { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';

export default function Home() {
  const [emailAddress, setEmailAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailAddress, subject, body }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(e.target.value);
  };

  const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
    <Head>
      <title>GotPhished?</title>
      <meta name="description" content="GPT powered phishing alert" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div className='pb-4'>
      <h1 className="text-8xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent py-4 text-center"> GotPhished? </h1>
    </div>
    <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold text-center">This is a proof of concept for a Gmail add-on I am making that will be a GPT-3.5 powered phishing alert!</h2>
      <p className="text-lg font-medium text-center">Enter an email address, subject, and body to check if it's a phishing email.</p>
    </div>
    <div className="w-full max-w-xl mx-auto bg-white p-6 shadow-xl rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <div className='w-full'>
          <label htmlFor="email-address" className="block font-medium text-lg">
            Email Address:
          </label>
          <input
            id="email-address"
            type="email"
            value={emailAddress}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 text-lg"
          />
        </div>
        <div className='w-full'>
          <label htmlFor="subject" className="block font-medium text-lg">
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 text-lg"
          />
        </div>
        <div className='w-full'>
          <label htmlFor="body" className="block font-medium text-lg">
            Body:
          </label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full h-60 focus:outline-none focus:ring focus:border-blue-300 text-lg"
          ></textarea>
        </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
            >
              Check Email
            </button>
          </form>

          
            <div className="mt-4 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded p-4">
              {isLoading ? 
                (
                  <h2 className="text-xl font-medium">Scanning for Phishys :)</h2>
                ) 
                : 
                (
                  <div>
                    <h2 className="text-xl font-medium">Result:</h2>
                    <p>{result}</p>
                  </div>
                )
              }
            </div>

        </div>
    </div>
  );
}
