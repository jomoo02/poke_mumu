import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function useDebouncedInput() {
  const [inputText, setInputText] = useState('');

  const handleChange = useDebouncedCallback((e) => {
    setInputText(e.target.value);
  }, 300);

  return {
    inputText,
    handleChange,
  };
}
