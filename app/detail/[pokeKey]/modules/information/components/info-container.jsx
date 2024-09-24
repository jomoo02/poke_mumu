import React from 'react';

export default function InfoContainer({
  subject,
  content,
  children,
}) {
  return (
    <div className="info-container">
      <div className="info-subject">{subject}</div>
      {content && (
        <div className="info-content">{content}</div>
      )}
      {children}
    </div>
  );
}
