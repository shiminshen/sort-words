"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ReactElement } from "react";
import Question from "@/components/Question";
import { Box, useToast } from "@chakra-ui/react";
import { fetchGame } from "@/api/game";
import Player from "@/components/Player";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

export interface GameProps {
  // id: string;
  // id: string;
  data: any
}

export function Post(props: GameProps): ReactElement {
  const { data } = props;
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["game", id],
  //   queryFn: () => fetchGame(id),
  // });
    
  const id = data?.id
  const questions = data?.questions;

  if (!questions?.length) {
    return <></>;
  }

  // const [showNextButton, setShowNextButton] = useState(false);

  return (
    <Box w={["full", "500px"]} mx="auto" pb={30}>
      {questions.map((question: any, index: number) => (
        <Box key={index} mb={3}>
          <Box as="b" fontSize={"2xl"}>
            {index + 1}. {question.answers.join("")}
          </Box>
          <Box w={["full", "500px"]}>
            <Player url={question.url} answers={question.answers} playing />
          </Box>
          <Box>{question.description}</Box>
        </Box>
      ))}
      <Box pos="fixed" bottom={0}>
        <NextLink className={"w-full"} href={`/game/${id}`} passHref>
          <Button
            mb={2}
            w={["80vw", "450px"]}
            as="a"
            variant="solid"
            colorScheme="blue"
          >
            Test Start
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
}
