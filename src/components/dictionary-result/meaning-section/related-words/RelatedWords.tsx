import { Container, Heading, WordList, WordListItem } from './RelatedWords.styled';

type Props = {
  heading: string;
  words: string[];
};

export function RelatedWords(props: Props) {
  const { heading, words } = props;

  return (
    <Container>
      <Heading>{heading}</Heading>
      <WordList>
        {words.map((word, index) => (
          <WordListItem key={index}>{word}</WordListItem>
        ))}
      </WordList>
    </Container>
  );
}
