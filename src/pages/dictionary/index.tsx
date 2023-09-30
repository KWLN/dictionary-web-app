import { DictionaryResult } from '../../components/dictionary-result/DictionaryResult';
import { SearchBar } from '../../components/search-bar';
import { useSearchDictionaryApi } from '../../services/dictionary-api';
import { Page, PageContent, PageHeader } from './styled';
import LogoSvg from '../../assets/images/logo.svg';

export function DictionaryPage() {
  const { fetchDefinition, data, loading, error } = useSearchDictionaryApi();

  return (
    <Page>
      <PageHeader>
        <img src={LogoSvg} alt="" />
      </PageHeader>
      <SearchBar onSearch={fetchDefinition} />
      <PageContent>
        <DictionaryResult resultData={data} isLoading={loading} error={error} />
      </PageContent>
    </Page>
  );
}
