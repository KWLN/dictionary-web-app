import { Meaning } from '../../../services/dictionary-api/types';

type Props = {
  meaning: Meaning;
};

export function MeaningSection(props: Props) {
  const { meaning } = props;

  console.log({ meaning });

  return <div>MeaningSection</div>;
}
