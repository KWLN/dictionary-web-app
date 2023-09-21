import { ApiResponse, Definition, Meaning, Pronunciation, ResultEntry } from './types';

export const MOCK_DEFINITION_NOUN: Definition = {
  definition: '(possibly nonstandard) Someone or something that is tall.',
  synonyms: [],
  antonyms: [],
};

export const MOCK_MEANING_NOUN: Meaning = {
  partOfSpeech: 'noun',
  definitions: [MOCK_DEFINITION_NOUN],
  synonyms: [],
  antonyms: [],
};

export const MOCK_DEFINITION_ADJECTIVE_1: Definition = {
  antonyms: [],
  definition:
    '(of a person) Having a vertical extent greater than the average. For example, somebody with a height of over 6 feet would generally be considered to be tall.',
  example: 'Being tall is an advantage in basketball.',
  synonyms: [],
};

export const MOCK_DEFINITION_ADJECTIVE_2: Definition = {
  antonyms: [],
  definition:
    '(of a building, etc.) Having its top a long way up; having a great vertical (and often greater than horizontal) extent; high',
  synonyms: [],
};

export const MOCK_MEANING_ADJECTIVE: Meaning = {
  partOfSpeech: 'adjective',
  definitions: [MOCK_DEFINITION_ADJECTIVE_1, MOCK_DEFINITION_ADJECTIVE_2],
  synonyms: ['big', 'high', 'towering'],
  antonyms: ['low', 'low-rise', 'short'],
};

export const MOCK_PRONUNCIATION: Pronunciation = {
  text: '/tɔːl/',
  audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/tall-uk.mp3',
  sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=9027510',
};

export const MOCK_RESULT_ENTRY: ResultEntry = {
  meanings: [MOCK_MEANING_NOUN, MOCK_MEANING_ADJECTIVE],
  phonetic: '/tɔːl/',
  phonetics: [MOCK_PRONUNCIATION],
  sourceUrls: ['https://en.wiktionary.org/wiki/tall'],
  word: 'tall',
};

export const MOCK_SUCCESS_RESPONSE: ApiResponse = [MOCK_RESULT_ENTRY];

export const MOCK_NO_RESULTS_RESPONSE: ApiResponse = {
  title: 'No Definitions Found',
  message: "Sorry pal, we couldn't find definitions for the word you were looking for.",
  resolution: 'You can try the search again at later time or head to the web instead.',
};
