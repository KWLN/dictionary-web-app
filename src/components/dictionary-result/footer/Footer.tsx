import { ResultEntry } from '../../../services/dictionary-api/types';
import { Container, Divider, Label, Source, SourceUrl } from './Footer.styled';

type Props = {
  sourceUrls: ResultEntry['sourceUrls'];
};

export function Footer(props: Props) {
  const { sourceUrls } = props;

  const sourceUrl = sourceUrls[0];

  return (
    <Container>
      <Divider />
      <Source>
        <Label>Source</Label>
        <SourceUrl href={sourceUrl} target="_blank">
          {sourceUrl}
        </SourceUrl>
      </Source>
    </Container>
  );
}
