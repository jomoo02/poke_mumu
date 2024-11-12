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
    <div className="flex gap-x-3.5 xs:gap-x-5 md:gap-x-7 py-1 items-center font-semibold min-w-72 min-h-[35px] border-b">
      <div className="w-[5.5rem] text-slate-500 text-[13px] sm:text-sm capitalize flex items-center justify-end font-semibold">
        {subject}
      </div>
      {content && (
        <div className="text-slate-600 text-sm sm:text-[15px] font-semibold capitalize">
          {content}
        </div>
      )}
      {children}
    </div>
  );
}
