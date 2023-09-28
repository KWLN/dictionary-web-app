import { Meaning } from '../../../services/dictionary-api/types';
import { Container, Divider, PartOfSpeech, SectionHeader } from './MeaningSection.styled';
import { Definitions } from './definitions';
import { RelatedWords } from './related-words';

type Props = {
  meaning: Meaning;
};

export function MeaningSection(props: Props) {
  const { meaning } = props;
  const { partOfSpeech, definitions, synonyms, antonyms } = meaning;

  return (
    <Container>
      <SectionHeader>
        <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
        <Divider />
      </SectionHeader>
      <Definitions definitions={definitions} />
      {synonyms.length > 0 && <RelatedWords heading="Synonyms" words={synonyms} />}
      {antonyms.length > 0 && <RelatedWords heading="Antonyms" words={antonyms} />}
    </Container>
  );
}
