// TODO: Remove unneeded fields and mark any nullable ones as such

type Definition = {
  antonyms: string[];
  definition: string;
  example?: string;
  synonyms: string[];
};

type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

type Pronunciation = {
  audio: string;
  sourceUrl?: string;
  text: string;
};

type DictionaryEntry = {
  meanings: Meaning[];
  phonetic: string;
  phonetics: Pronunciation[];
  sourceUrls: string[];
  word: string;
};

type NoResult = {
  message: string;
  resolution: string;
  title: string;
};

export type ApiResponse = DictionaryEntry[] | NoResult;
