import { ReactNode, createContext, useContext, useState } from 'react';

type Context = {
  currentWord: string;
  setCurrentWord: (newWord: string) => void;
};

const WordContext = createContext<Context>({
  currentWord: 'keyboard',
  setCurrentWord: () => null,
});

export function WordContextProvider(props: { children?: ReactNode }) {
  const { children } = props;
  const [currentWord, setCurrentWord] = useState<string>('keyboard');

  return (
    <WordContext.Provider value={{ currentWord, setCurrentWord }}>{children}</WordContext.Provider>
  );
}

export const useWordContext = () => {
  return useContext(WordContext);
};
