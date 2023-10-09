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

  // Get the first item that has an audio source.
  // If there are none, the pronunciation button should not be rendered.
  const pronunciation = phonetics.find((item) => item.audio != undefined);
  const audioSrc = pronunciation?.audio ?? '';
  const [play] = useSound(audioSrc);

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
      {audioSrc && (
        <PronunciationButton
          onClick={handlePronunciationButtonClick}
          onMouseEnter={handlePronunciationButtonMouseEnter}
          onMouseLeave={handlePronunciationButtonMouseLeave}
        >
          <ReactSVG src={isPronunciationButtonHovered ? PlayIconHovered : PlayIcon} />
        </PronunciationButton>
      )}
    </HeaderContainer>
  );
}
