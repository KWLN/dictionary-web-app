import { ResultEntry } from '../../../services/dictionary-api/types';
import { HeaderContainer, Phonetic, PronunciationButton, Word, WordDetails } from './Header.styled';
import { useSound } from 'use-sound';

type Props = {
  phonetic: ResultEntry['phonetic'];
  phonetics: ResultEntry['phonetics'];
  word: ResultEntry['word'];
};

export function Header(props: Props) {
  const { phonetic, phonetics, word } = props;

  // TODO: Find first phonetic that has `audio`,
  // otherwise disable or hide button if there is no `audio` at all.
  // `pronunciation` can be undefined if `phonetics` is empty array.
  // Currently, this causes the app to blow up with an error.
  const pronunciation = phonetics[0];
  const [play] = useSound(pronunciation.audio);

  const handlePronunciationButtonClick = () => {
    play();
  };

  return (
    <HeaderContainer>
      <WordDetails>
        <Word>{word}</Word>
        <Phonetic>{phonetic}</Phonetic>
      </WordDetails>
      <PronunciationButton onClick={handlePronunciationButtonClick} />
    </HeaderContainer>
  );
}
