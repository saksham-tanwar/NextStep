import * as React from 'react';

export function WelcomeTemplate({ name, district, classStream }) {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
    }}>
      <h1 style={{ color: '#4F46E5', marginBottom: '24px' }}>
        Welcome to NextStep!
      </h1>
      
      <p style={{ fontSize: '16px', lineHeight: '24px', color: '#374151' }}>
        Hello {name},
      </p>
      
      <p style={{ fontSize: '16px', lineHeight: '24px', color: '#374151' }}>
        Thank you for joining NextStep! We're excited to help you explore your career options 
        and make informed decisions about your future.
      </p>

      {district && classStream && (
        <div style={{ 
          backgroundColor: '#F3F4F6', 
          padding: '16px', 
          borderRadius: '6px',
          marginTop: '24px'
        }}>
          <p style={{ margin: '0', color: '#4B5563' }}>
            Your Profile Details:
          </p>
          <ul style={{ 
            listStyle: 'none',
            padding: '0',
            margin: '12px 0 0 0'
          }}>
            <li style={{ color: '#6B7280' }}>District: {district}</li>
            <li style={{ color: '#6B7280' }}>Class/Stream: {classStream}</li>
          </ul>
        </div>
      )}

      <div style={{ marginTop: '32px' }}>
        <p style={{ fontSize: '16px', lineHeight: '24px', color: '#374151' }}>
          With NextStep, you can:
        </p>
        <ul style={{ 
          color: '#4B5563',
          paddingLeft: '24px',
          marginTop: '12px'
        }}>
          <li>Take career assessments</li>
          <li>Explore aptitude tests</li>
          <li>Get personalized recommendations</li>
          <li>Discover educational opportunities</li>
        </ul>
      </div>

      <p style={{ 
        fontSize: '16px', 
        lineHeight: '24px', 
        color: '#374151',
        marginTop: '32px'
      }}>
        Get started by completing your profile and taking your first assessment!
      </p>

      <div style={{ 
        borderTop: '1px solid #E5E7EB',
        marginTop: '32px',
        paddingTop: '24px'
      }}>
        <p style={{ 
          fontSize: '14px', 
          color: '#6B7280',
          margin: '0'
        }}>
          Best regards,<br />
          The NextStep Team
        </p>
      </div>
    </div>
  );
}