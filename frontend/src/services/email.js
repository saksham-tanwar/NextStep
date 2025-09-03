import { WelcomeTemplate } from '../components/Email/WelcomeTemplate';
import { renderToString } from 'react-dom/server';

const RESEND_API_KEY = process.env.REACT_APP_RESEND_API_KEY;
const RESEND_API_URL = 'https://api.resend.com/emails';

const sendEmail = async (to, subject, content) => {
  try {
    const res = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'NextStep <onboarding@resend.dev>',
        to: [to],
        subject: subject,
        html: content,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Failed to send email:', error);
      return { success: false, error };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export const sendWelcomeEmail = async (user) => {
  if (!user.email) return;

  const welcomeTemplate = WelcomeTemplate({
    name: user.displayName || 'Student',
    district: user.district || '',
    classStream: user.classStream || ''
  });

  const htmlContent = renderToString(welcomeTemplate);
  return sendEmail(user.email, 'Welcome to NextStep! Start Your Journey', htmlContent);
};

export const sendProfileUpdateEmail = async (user) => {
  if (!user.email) return;

  const updateTemplate = WelcomeTemplate({
    name: user.displayName,
    district: user.district,
    classStream: user.classStream
  });

  const htmlContent = renderToString(updateTemplate);
  return sendEmail(user.email, 'NextStep Profile Updated', htmlContent);
};