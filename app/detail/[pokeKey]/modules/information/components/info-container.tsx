import React from 'react';

interface InfoContainerProps {
  subject: string;
  content?: string;
  children?: React.ReactNode;
}

export default function InfoContainer({
  subject,
  content,
  children,
}: InfoContainerProps) {
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
