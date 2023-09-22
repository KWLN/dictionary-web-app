import { ResultEntry } from '../../../services/dictionary-api/types';
import { HeaderContainer, PronunciationAudio, WordDetails } from './Header.styled';

type Props = {
  phonetic: ResultEntry['phonetic'];
  phonetics: ResultEntry['phonetics'];
  word: ResultEntry['word'];
};

export function Header(props: Props) {
  const { phonetic, phonetics, word } = props;

  const pronunciation = phonetics[0];

  return (
    <HeaderContainer>
      <WordDetails>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </WordDetails>
      <PronunciationAudio />
    </HeaderContainer>
  );
}
