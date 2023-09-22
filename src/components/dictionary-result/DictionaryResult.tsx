import { ApiResponse, ResultEntry, isNoResultsFound } from '../../services/dictionary-api/types';
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
    return <div>TODO: Loading state</div>;
  }

  if (error) {
    return <div>TODO: Error state</div>;
  }

  if (resultData === undefined || isNoResultsFound(resultData)) {
    return <div>TODO: Empty state</div>;
  }

  // At this point we know that it has to be a successful API response.
  // TypeScript can't figure this out on its own so we need to cast it.
  const wordEntries = resultData as ResultEntry[];
  // We take only the first word entry - we might consider handling multiple entries in the future.
  // FIXME: Unfortunately this API's results are quite strange for some words (e.g. "good").
  // The API sources its data from something like https://en.wiktionary.org/wiki/good but unfortunately it doesn't parse the meanings properly, hence the bad data.
  const wordEntry = wordEntries[0];

  return (
    <div>
      <Header phonetic={wordEntry.phonetic} phonetics={wordEntry.phonetics} word={wordEntry.word} />
      {wordEntry.meanings.map((meaning, index) => (
        // Using the index as the key isn't ideal but the list isn't mutable so it's fine for now
        <MeaningSection key={index} meaning={meaning} />
      ))}
      <div>footer</div>
    </div>
  );
}
