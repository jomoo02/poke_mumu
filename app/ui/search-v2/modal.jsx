'use client';

import React from 'react';
import { useRouter } from 'next/router';

export default function SearchModal() {
  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <div>
      
    </div>
  );
}