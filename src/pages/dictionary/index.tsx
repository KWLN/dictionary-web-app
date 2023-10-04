import { DictionaryResult } from '../../components/dictionary-result/DictionaryResult';
import { SearchBar } from '../../components/search-bar';
import { useSearchDictionaryApi } from '../../services/dictionary-api';
import { Page, PageContent, PageHeader } from './styled';
import LogoSvg from '../../assets/images/logo.svg';
import { FontPicker } from '../../components/font-picker';
import { FontFamily } from '../../global';

type Props = {
  setFontFamily: (fontFamily: FontFamily) => void;
};

export function DictionaryPage(props: Props) {
  const { setFontFamily } = props;

  const { fetchDefinition, data, loading, error } = useSearchDictionaryApi();

  return (
    <Page>
      <PageHeader>
        <img src={LogoSvg} alt="" />
        <FontPicker setFontFamily={setFontFamily} />
      </PageHeader>
      <SearchBar onSearch={fetchDefinition} />
      <PageContent>
        <DictionaryResult resultData={data} isLoading={loading} error={error} />
      </PageContent>
    </Page>
  );
}
