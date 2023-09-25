import { ApiResponse, Definition, Meaning, Pronunciation, ResultEntry } from './types';

export const MOCK_DEFINITION_NOUN: Definition = {
  definition: '(etc.) A set of keys used to operate a typewriter, computer etc.',
  synonyms: [],
  antonyms: [],
};

export const MOCK_DEFINITION_NOUN_2: Definition = {
  definition:
    'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
  synonyms: [],
  antonyms: [],
};

export const MOCK_DEFINITION_NOUN_3: Definition = {
  definition:
    'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device',
  synonyms: [],
  antonyms: [],
};

export const MOCK_MEANING_NOUN: Meaning = {
  partOfSpeech: 'noun',
  definitions: [MOCK_DEFINITION_NOUN, MOCK_DEFINITION_NOUN_2, MOCK_DEFINITION_NOUN_3],
  synonyms: ['electronic keyboard', 'piano'],
  antonyms: [],
};

export const MOCK_DEFINITION_VERB: Definition = {
  definition: 'To type on a computer keyboard.',
  example: 'Keyboarding is the part of this job I hate the most.',
  synonyms: [],
  antonyms: [],
};

export const MOCK_MEANING_VERB: Meaning = {
  partOfSpeech: 'adjective',
  definitions: [MOCK_DEFINITION_VERB],
  synonyms: [],
  antonyms: [],
};

export const MOCK_PRONUNCIATION: Pronunciation = {
  text: '/ˈkiːbɔːd/',
  audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
  sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1755168',
};

export const MOCK_RESULT_ENTRY: ResultEntry = {
  meanings: [MOCK_MEANING_NOUN, MOCK_MEANING_VERB],
  phonetic: '/ˈkiːbɔːd/',
  phonetics: [MOCK_PRONUNCIATION],
  sourceUrls: ['https://en.wiktionary.org/wiki/keyboard'],
  word: 'keyboard',
};

export const MOCK_SUCCESS_RESPONSE: ApiResponse = [MOCK_RESULT_ENTRY];

export const MOCK_NO_RESULTS_RESPONSE: ApiResponse = {
  title: 'No Definitions Found',
  message: "Sorry pal, we couldn't find definitions for the word you were looking for.",
  resolution: 'You can try the search again at later time or head to the web instead.',
};
