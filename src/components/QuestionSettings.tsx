import type { ReactElement } from "react";
import { FormControl, FormLabel, SimpleGrid, Switch } from "@chakra-ui/react";

import { useGameSettings } from "@/components/useGameSettings";

import { Box, Flex, Button } from "@chakra-ui/react";

export interface QuestionSettingsProps {
  replay: () => void;
}

export function QuestionSettings(props: QuestionSettingsProps): ReactElement {
  const { replay } = props;
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
      <Button colorScheme="teal" variant="solid" onClick={replay}>
        replay
      </Button>
    </FormControl>
  );
}

export default QuestionSettings;
