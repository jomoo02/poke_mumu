'use client';

import React from 'react';
import Image from 'next/image';
import useForm from './useForm';

const formsContainerClassNameMap = {
  4: 'grid grid-cols-2 lg:grid-cols-4 gap-y-5',
  5: 'flex flex-wrap gap-x-5 justify-around',
  6: 'grid grid-cols-3 lg:grid-cols-6 gap-y-3 md:gap-y-5',
  8: 'grid grid-cols-3 md:grid-cols-4 gap-y-3 md:gap-y-5',
  9: 'grid grid-cols-3 gap-y-3 md:gap-y-5',
  10: 'grid grid-cols-3 md:grid-cols-5 gap-y-3 md:gap-y-5',
  18: 'grid grid-cols-3 md:grid-cols-6 gap-y-3 md:gap-y-5',
  20: 'grid grid-cols-3 md:grid-cols-5 gap-y-3 md:gap-y-5',
  28: 'grid grid-cols-3 md:grid-cols-7 gap-y-3 md:gap-y-5',
  default: 'flex flex-wrap gap-x-5 justify-evenly',
};

function Form({ form }) {
  const {
    src,
    alt,
    formName,
  } = useForm(form);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
        <Image
          src={src}
          alt={alt}
          fill
          priority
        />
      </div>
      <div className="text-center text-sm font-medium capitalize">
        {formName}
      </div>
    </div>
  );
}

export default function Forms({
  forms,
  type,
}) {
  const formContainerClassName = formsContainerClassNameMap[forms.length]
    || formsContainerClassNameMap.default;

  return (
    <div
      className={`border-2 border-t-0 ${type}-border rounded-b-sm px-1 md:px-5 pt-2.5 pb-3.5 ${formContainerClassName}`}
    >
      {forms.map((form) => (
        <Form
          form={form}
          key={`${form.id}-${form.name.en}`}
        />
      ))}
    </div>
  );
}
