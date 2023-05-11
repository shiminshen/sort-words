"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ReactElement } from "react";
import Question from "@/components/Question";
import { useToast } from "@chakra-ui/react";
import { fetchGame } from '@/api/game'

import { GameSettingsProvider } from "@/components/useGameSettings";

export interface GameProps {
  id: string;
}

export function Game(props: GameProps): ReactElement {
  const { isLoading, error, data } = useQuery({
    queryKey: ['game', props.id],
    queryFn: () => fetchGame(props.id),
  })
    console.log(data)
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = data?.questions
  const question = questions?.[questionIndex]
  const toast = useToast();

  if (!question) {
    return <></>
  }

  // const [showNextButton, setShowNextButton] = useState(false);
  const handleAnswer = (items: any) => {
    const { choices } = items;

    const currentAnswer = choices.map((I: any) => I.content).join("");
    const correctAnswer = question.answers.join("");

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
      <Question
        key={questionIndex}
        data={question}
        handleAnswer={handleAnswer}
      />
    </GameSettingsProvider>
  );
}
