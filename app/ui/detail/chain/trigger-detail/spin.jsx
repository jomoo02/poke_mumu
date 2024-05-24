import React from 'react';

export default function SpinCase({ language }) {
  if (language === 'ko') {
    return (
      <div>
        <span>사탕공예</span>
        <span>를 지니게하고 L스틱으로 캐릭터를 계속 회전</span>
      </div>
    );
  }
  return (
    <div className="flex gap-x-1">
      <span>Spin holding a</span>
      <span>Sweet</span>
    </div>
  );
}
