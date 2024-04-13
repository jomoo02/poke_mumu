'use client';

import React, {
  createContext, useState, useMemo, useContext,
} from 'react';

const LanguageContext = createContext('ko');

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ko');
  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
