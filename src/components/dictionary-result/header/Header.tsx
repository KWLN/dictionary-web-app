import { ResultEntry } from '../../../services/dictionary-api/types';
import { HeaderContainer, PronunciationButton, WordDetails } from './Header.styled';
import useSound from 'use-sound';

type Props = {
  phonetic: ResultEntry['phonetic'];
  phonetics: ResultEntry['phonetics'];
  word: ResultEntry['word'];
};

export function Header(props: Props) {
  const { phonetic, phonetics, word } = props;

  const pronunciation = phonetics[0];
  const [play] = useSound(pronunciation.audio);

  const handlePronunciationButtonClick = () => {
    play();
  };

  return (
    <HeaderContainer>
      <WordDetails>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </WordDetails>
      <PronunciationButton onClick={handlePronunciationButtonClick} />
    </HeaderContainer>
  );
}
