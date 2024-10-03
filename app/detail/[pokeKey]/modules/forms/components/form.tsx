'use client';

import React from 'react';
import Image from 'next/image';
import useForm from '../hooks/useForm';
import { FormType } from '../../../types/forms.type';

export default function Form({ form }: { form: FormType }) {
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
