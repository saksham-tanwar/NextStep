import React, { useState } from 'react';
import { sendTestEmail } from '../../services/email';

const EmailTestForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = async () => {
    setLoading(true);
    setStatus('');

    try {
      const result = await sendTestEmail({ email });
      if (result.success) {
        setStatus('Email sent successfully!');
      } else {
        throw new Error(result.error?.text || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send email: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Test Email Form</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter recipient email"
          />
        </div>

        {status && (
          <div className={`p-3 rounded ${
            status.includes('successfully') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {status}
          </div>
        )}

        <button
          onClick={handleSendEmail}
          disabled={loading || !email}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Test Email'}
        </button>
      </div>
    </div>
  );
};

export default EmailTestForm;