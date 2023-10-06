import { DictionaryResult } from '../../components/dictionary-result/DictionaryResult';
import { SearchBar } from '../../components/search-bar';
import { useSearchDictionaryApi } from '../../services/dictionary-api';
import { Controls, Divider, Logo, Page, PageContent, PageHeader } from './styled';
import LogoSvg from '../../assets/images/logo.svg';
import { FontPicker } from '../../components/font-picker';
import { FontFamily } from '../../global';
import { DarkModeToggle } from '../../components/dark-mode-toggle';

type Props = {
  setFontFamily: (fontFamily: FontFamily) => void;
  toggleColorMode: () => void;
};

export function DictionaryPage(props: Props) {
  const { toggleColorMode, setFontFamily } = props;

  const { fetchDefinition, data, loading, error } = useSearchDictionaryApi();

  return (
    <Page>
      <PageHeader>
        <Logo src={LogoSvg} alt="" />
        <Controls>
          <FontPicker setFontFamily={setFontFamily} />
          <Divider />
          <DarkModeToggle toggleColorMode={toggleColorMode} />
        </Controls>
      </PageHeader>
      <SearchBar onSearch={fetchDefinition} />
      <PageContent>
        <DictionaryResult resultData={data} isLoading={loading} error={error} />
      </PageContent>
    </Page>
  );
}
