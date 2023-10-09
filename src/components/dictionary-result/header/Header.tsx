import { ResultEntry } from '../../../services/dictionary-api/types';
import { HeaderContainer, Phonetic, PronunciationButton, Word, WordDetails } from './Header.styled';
import { useSound } from 'use-sound';
import { ReactSVG } from 'react-svg';
import PlayIcon from './assets/icon-play.svg';
import PlayIconHovered from './assets/icon-play-hovered.svg';
import { useState } from 'react';

type Props = {
  phonetic: ResultEntry['phonetic'];
  phonetics: ResultEntry['phonetics'];
  word: ResultEntry['word'];
};

export function Header(props: Props) {
  const { phonetic, phonetics, word } = props;

  const [isPronunciationButtonHovered, setIsPronunciationButtonHovered] = useState<boolean>(false);

  // TODO: Find first phonetic that has `audio`,
  // otherwise disable or hide button if there is no `audio` at all.
  // `pronunciation` can be undefined if `phonetics` is empty array.
  // Currently, this causes the app to blow up with an error.
  const pronunciation = phonetics[0];
  const [play] = useSound(pronunciation.audio);

  const handlePronunciationButtonClick = () => {
    play();
  };

  const handlePronunciationButtonMouseEnter = () => {
    setIsPronunciationButtonHovered(true);
  };

  const handlePronunciationButtonMouseLeave = () => {
    setIsPronunciationButtonHovered(false);
  };

  return (
    <HeaderContainer>
      <WordDetails>
        <Word>{word}</Word>
        <Phonetic>{phonetic}</Phonetic>
      </WordDetails>
      <PronunciationButton
        onClick={handlePronunciationButtonClick}
        onMouseEnter={handlePronunciationButtonMouseEnter}
        onMouseLeave={handlePronunciationButtonMouseLeave}
      >
        <ReactSVG src={isPronunciationButtonHovered ? PlayIconHovered : PlayIcon} />
      </PronunciationButton>
    </HeaderContainer>
  );
}
