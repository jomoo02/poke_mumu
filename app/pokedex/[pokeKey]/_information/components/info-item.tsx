import React from 'react';

interface InfoItemProps {
  subject: string;
  content?: string | number;
  children?: React.ReactNode;
}

export default function InfoItem({
  subject,
  content,
  children,
}: InfoItemProps) {
  return (
    <div>
      <div>{subject}</div>
      {content && (
        <div>{content}</div>
      )}
      {children}
    </div>
  );
}
