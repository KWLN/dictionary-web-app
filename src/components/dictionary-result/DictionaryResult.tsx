import { ApiResponse, ResultEntry, isNoResultsFound } from '../../services/dictionary-api/types';
import {
  Container,
  EmptyState,
  EmptyStateDescription,
  EmptyStateHeading,
  LoadingSpinner,
} from './DictionaryResult.styled';
import { Footer } from './footer';
import { Header } from './header';
import { MeaningSection } from './meaning-section';

type Props = {
  resultData: ApiResponse | undefined;
  isLoading: boolean;
  error: Error | undefined;
};

export function DictionaryResult(props: Props) {
  const { resultData, isLoading, error } = props;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>TODO: Error state</div>;
  }

  if (resultData === undefined || isNoResultsFound(resultData)) {
    return (
      <EmptyState>
        <EmptyStateHeading>No Definitions Found</EmptyStateHeading>
        <EmptyStateDescription>
          Sorry pal, we couldn&apos;t find definitions for the word you were looking for. You can
          try the search again at a later time or head to the web instead.
        </EmptyStateDescription>
      </EmptyState>
    );
  }

  // At this point we know that it has to be a successful API response.
  // TypeScript can't figure this out on its own so we need to cast it.
  const wordEntries = resultData as ResultEntry[];
  // We take only the first word entry - we might consider handling multiple entries in the future.
  // FIXME: Unfortunately this API's results are quite strange for some words (e.g. "good").
  // The API sources its data from something like https://en.wiktionary.org/wiki/good but it doesn't parse the meanings properly, hence the bad data.
  const wordEntry = wordEntries[0];

  return (
    <Container>
      <Header phonetic={wordEntry.phonetic} phonetics={wordEntry.phonetics} word={wordEntry.word} />
      {wordEntry.meanings.map((meaning, index) => (
        // Using the index as the key isn't ideal but the list isn't mutable so it's fine for now
        <MeaningSection key={index} meaning={meaning} />
      ))}
      <Footer sourceUrls={wordEntry.sourceUrls} />
    </Container>
  );
}
