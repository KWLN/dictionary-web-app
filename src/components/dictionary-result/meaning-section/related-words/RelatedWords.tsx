import { useWordContext } from '../../../../context/word-context';
import { Container, Heading, WordList, WordListItem } from './RelatedWords.styled';

type Props = {
  heading: string;
  words: string[];
};

export function RelatedWords(props: Props) {
  const { heading, words } = props;

  const { setCurrentWord } = useWordContext();

  return (
    <Container>
      <Heading>{heading}</Heading>
      <WordList>
        {words.map((word, index) => (
          <WordListItem key={index} onClick={() => setCurrentWord(word)}>
            {word}
          </WordListItem>
        ))}
      </WordList>
    </Container>
  );
}
