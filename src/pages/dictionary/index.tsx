import { SearchBar } from '../../components/search-bar';
import { useSearchDictionaryApi } from '../../services/dictionary-api';

export function DictionaryPage() {
  const { fetchDefinition, data, loading, error } = useSearchDictionaryApi();

  return <SearchBar onSearch={fetchDefinition} />;
}
