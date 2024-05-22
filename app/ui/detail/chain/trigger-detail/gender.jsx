import React from 'react';

export default function GenderCase({ gender, language }) {
  const getGenderText = () => {
    if (gender === 2) {
      return language === 'ko' ? '수컷' : 'Male';
    }
    return language === 'ko' ? '암컷' : 'Female';
  };

  const text = getGenderText();

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
