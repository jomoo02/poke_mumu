'use client';

import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export type Language = 'ko' | 'en';

interface Context {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

const LanguageContext = createContext<Context>({
  language: 'ko',
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  const value = useMemo(() => ({
    language,
    setLanguage,
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
