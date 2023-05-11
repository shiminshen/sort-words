"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ReactElement } from "react";
import Question from "@/components/Question";
import { Box, useToast } from "@chakra-ui/react";
import { fetchGame } from "@/api/game";
import Player from "@/components/Player";

export interface GameProps {
  id: string;
}

export function Post(props: GameProps): ReactElement {
  const { isLoading, error, data } = useQuery({
    queryKey: ["game", props.id],
    queryFn: () => fetchGame(props.id),
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
    <Box>
      {questions.map((question, index) => (
        <Box key={index} mb={3}>
          <Box>{index + 1}</Box>
          <Player
            url={question.url}
            answers={question.answers}
            playing={false}
          />
          <Box>Answer: {question.answers.join("")}</Box>
        </Box>
      ))}
    </Box>
  );
}
