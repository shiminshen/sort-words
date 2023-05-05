import type { ReactElement } from "react";
import { FormControl, FormLabel, SimpleGrid, Switch } from "@chakra-ui/react";

export interface QuestionSettingsProps {}

export function QuestionSettings(props: QuestionSettingsProps): ReactElement {
  return (
    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
      <FormLabel htmlFor="hint">hint:</FormLabel>
      <Switch id="hint" />

      <FormLabel htmlFor="autoReplay">autoReplay:</FormLabel>
      <Switch id="autoReplay" defaultChecked />
    </FormControl>
  );
}

export default QuestionSettings;
