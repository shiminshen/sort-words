"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ReactElement } from "react";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

import Question from "@/components/Question";
import { useToast } from "@chakra-ui/react";
import { fetchGame } from "@/api/game";
import { Box } from "@chakra-ui/react";

import { GameSettingsProvider } from "@/components/useGameSettings";

export interface GameProps {
  id: string;
}

// complete page with return to home button
const CompletePage = () => {
  return (
    <Box>
      <h1>Game Complete</h1>
      <NextLink href="/">
        <Button as="a">Return to Home</Button>
      </NextLink>
    </Box>
  );
};

export function Game(props: GameProps): ReactElement {
  const { id } = props;
  const { isLoading, error, data } = useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGame(id),
  });
    
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = data?.questions;
  const question = questions?.[questionIndex];
  const toast = useToast();

  if (!questions) {
    return <></>;
  }

  // const [showNextButton, setShowNextButton] = useState(false);
  const handleAnswer = (items: any) => {
    const { answers: choices } = items;

    const currentAnswer = choices.map((I: any) => I.content).join("");
    const correctAnswer = question?.answers.join("");

    if (currentAnswer === correctAnswer) {
      toast({
        title: "Correct!",
        description: "You are correct.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });

      if (questionIndex < questions.length) {
        setQuestionIndex(questionIndex + 1);
      }
    } else {
      // toast({
      //   title: "Incorrect!",
      //   description: "You are incorrect.",
      //   status: "error",
      //   duration: 1000,
      //   isClosable: true,
      // });
    }
  };
  

  return (
    <GameSettingsProvider>
      {questionIndex === questions.length ? (
        <CompletePage />
      ) : (
        <Question
          key={questionIndex}
          data={question}
          handleAnswer={handleAnswer}
        />
      )}
    </GameSettingsProvider>
  );
}
