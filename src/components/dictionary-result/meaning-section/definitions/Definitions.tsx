import { Definition } from '../../../../services/dictionary-api/types';
import { DefinitionRow, ExampleRow, Heading, List, ListItem } from './Definitions.styled';

type Props = {
  definitions: Definition[];
};

export function Definitions(props: Props) {
  const { definitions } = props;

  return (
    <>
      <Heading>Meaning</Heading>
      <List>
        {definitions.map((definition, index) => (
          <ListItem key={index}>
            <DefinitionRow>{definition.definition}</DefinitionRow>
            {definition.example && <ExampleRow>&quot;{definition.example}&quot;</ExampleRow>}
          </ListItem>
        ))}
      </List>
    </>
  );
}
