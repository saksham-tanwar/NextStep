import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import EmailTestForm from '../Email/EmailTestForm';
import { sendTestEmail, sendProfileUpdateEmail } from '../../services/email';

export default function UserProfile() {
  const { user, logout, updateUserProfile } = useAuth();
  const [sendingEmail, setSendingEmail] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [district, setDistrict] = useState(user?.district || '');
  const [classStream, setClassStream] = useState(user?.classStream || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showEmailTest, setShowEmailTest] = useState(false);
  const navigate = useNavigate();

  const districts = ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Kathua', 'Kishtwar', 'Kulgam'];
  const classStreams = ['12th Science', '12th Commerce', '12th Arts', '11th Science', '11th Commerce', '11th Arts'];

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setDistrict(user.district || '');
      setClassStream(user.classStream || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const updatedUser = await updateUserProfile(name, district, classStream);
      setMessage('Profile updated successfully!');
      
      // Send profile update email separately
      try {
        await sendProfileUpdateEmail({
          email: user.email,
          displayName: name,
          district,
          classStream
        });
      } catch (emailError) {
        console.warn('Failed to send profile update email:', emailError);
        // Don't show email error to user since profile update succeeded
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleTestEmail = async () => {
    try {
      setSendingEmail(true);
      const result = await sendTestEmail({ email: user.email });
      if (result.success) {
        setMessage('Test email sent successfully!');
      } else {
        setError('Failed to send test email');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setSendingEmail(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Your Profile
          </h2>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{message}</span>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-6">
            <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
              <span className="text-indigo-600 font-medium text-3xl">
                {name?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-600">Email: {user?.email}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                District
              </label>
              <select
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select District</option>
                {districts.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="classStream" className="block text-sm font-medium text-gray-700">
                Class / Stream
              </label>
              <select
                id="classStream"
                value={classStream}
                onChange={(e) => setClassStream(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select Class/Stream</option>
                {classStreams.map((cs) => (
                  <option key={cs} value={cs}>{cs}</option>
                ))}
              </select>
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {loading ? 'Updating...' : 'Update Profile'}
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Out
              </button>
              <button
                type="button"
                onClick={handleTestEmail}
                disabled={sendingEmail}
                className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                {sendingEmail ? 'Sending...' : 'Test Email'}
              </button>
              <button
                type="button"
                onClick={() => setShowEmailTest(!showEmailTest)}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {showEmailTest ? 'Hide Email Test' : 'Show Email Test'}
              </button>
            </div>
          </form>

          {showEmailTest && (
            <div className="mt-8">
              <EmailTestForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}