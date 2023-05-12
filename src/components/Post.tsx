"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ReactElement } from "react";
import Question from "@/components/Question";
import { Box, useToast } from "@chakra-ui/react";
import { fetchGame } from "@/api/game";
import Player from "@/components/Player";
import NextLink from 'next/link'
import { Button } from "@chakra-ui/react";

export interface GameProps {
  id: string;
}

export function Post(props: GameProps): ReactElement {
  const { id } = props;
  const { isLoading, error, data } = useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGame(id),
  });
  console.log(data);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = data?.questions;
  const toast = useToast();

  if (!questions?.length) {
    return <></>;
  }

  // const [showNextButton, setShowNextButton] = useState(false);

  return (
    <Box w={500} mx="auto" pb={30}>
      {questions.map((question, index) => (
        <Box key={index} mb={3}>
          <Box>{index + 1}</Box>
          <Box>
            <Player
              url={question.url}
              answers={question.answers}
              playing
            />
            </Box>
          <Box as='b' fontSize={'2xl'}>{question.answers.join("")}</Box>
          <Box>{question.description}</Box>
        </Box>
      ))}
      <Box w={'full'} pos='fixed' bottom={0}>
          <NextLink href={`/game/${id}`} passHref>
            <Button as="a"  variant="solid" colorScheme="blue">
              Test Start
            </Button>
          </NextLink>
      </Box>
    </Box>
  );
}
