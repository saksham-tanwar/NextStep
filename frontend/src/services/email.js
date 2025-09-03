import emailjs from '@emailjs/browser';

const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

export const sendTestEmail = async ({ email }) => {
  if (!email) return { success: false, error: 'Email is required' };
  
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_nzntqys',
      {
        to_email: email,
        message: 'This is a test email from NextStep',
      },
      EMAILJS_USER_ID
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending test email:', error);
    return { success: false, error };
  }
};

export const sendWelcomeEmail = async ({ email, displayName, district, classStream }) => {
  if (!email) return { success: false, error: 'Email is required' };

  console.log('Sending welcome email to:', email);

  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_pfdcw8e',
      {
        to_email: email,
        to_name: displayName || 'Student',
        district: district || '',
        class_stream: classStream || ''
      },
      EMAILJS_USER_ID
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
};

export const sendProfileUpdateEmail = async ({ email, displayName, district, classStream }) => {
  if (!email) return { success: false, error: 'Email is required' };

  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_bmgsko2',
      {
        to_email: email,
        to_name: displayName || '',
        title: 'Profile Updated',
        district: district || '',
        class_stream: classStream || ''
      },
      EMAILJS_USER_ID
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending profile update email:', error);
    return { success: false, error };
  }
};

// Initialize EmailJS with your User ID
emailjs.init(EMAILJS_USER_ID);