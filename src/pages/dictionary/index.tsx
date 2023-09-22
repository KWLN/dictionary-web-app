import { DictionaryResult } from '../../components/dictionary-result/DictionaryResult';
import { SearchBar } from '../../components/search-bar';
import { useSearchDictionaryApi } from '../../services/dictionary-api';

export function DictionaryPage() {
  const { fetchDefinition, data, loading, error } = useSearchDictionaryApi();

  return (
    <>
      <SearchBar onSearch={fetchDefinition} />
      <DictionaryResult resultData={data} isLoading={loading} error={error} />
    </>
  );
}
