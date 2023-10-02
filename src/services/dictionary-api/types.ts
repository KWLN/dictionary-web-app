// TODO: Remove unneeded fields and mark any nullable ones as such

export type Definition = {
  antonyms: string[];
  definition: string;
  example?: string;
  synonyms: string[];
};

export type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

export type Pronunciation = {
  audio: string;
  sourceUrl?: string;
  text: string;
};

export type ResultEntry = {
  meanings: Meaning[];
  phonetic?: string;
  phonetics: Pronunciation[];
  sourceUrls: string[];
  word: string;
};

export type NoResultsFound = {
  message: string;
  resolution: string;
  title: string;
};

export type ApiResponse = ResultEntry[] | NoResultsFound;

export const isNoResultsFound = (response: ApiResponse): response is NoResultsFound => {
  return 'resolution' in response;
};
