import type { ReactElement } from "react";
import { FormControl, FormLabel, SimpleGrid, Switch } from "@chakra-ui/react";

import { useGameSettings } from "@/components/useGameSettings";

export interface QuestionSettingsProps {}

export function QuestionSettings(props: QuestionSettingsProps): ReactElement {
  const { autoReplay, setAutoReplay, showHints, setShowHints } =
    useGameSettings();
  return (
    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
      <FormLabel htmlFor="hint">hint:</FormLabel>
      <Switch
        id="hint"
        defaultChecked={showHints}
        onChange={(e) => setShowHints(e.target.checked)}
      />

      <FormLabel htmlFor="autoReplay">autoReplay:</FormLabel>
      <Switch
        id="autoReplay"
        defaultChecked={autoReplay}
        onChange={(e) => setAutoReplay(e.target.checked)}
      />
    </FormControl>
  );
}

export default QuestionSettings;
