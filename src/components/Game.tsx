"use client";

import React, { useState } from "react";
import type { ReactElement } from "react";
import Question from "@/components/Question";
import { useToast } from "@chakra-ui/react";

import { GameSettingsProvider } from "@/components/useGameSettings";

export interface GameProps {}

const questions = [
  {
    url: "https://youtu.be/nAx5mdVPl_g?t=2",
    answers: ["わ", "く", "わ", "く"],
  },
  {
    url: "https://youtu.be/tknn02o0B5o?start=89&end=92",
    answers: ["う", "ま", "い"],
  },
  {
    url: "https://youtu.be/aZuiL-lgrTw?start=62&end=64",
    answers: ["アーニャ", "これ", "すき"],
  },
  {
    url: "https://youtu.be/aZuiL-lgrTw?start=91&end=93",
    answers: ["む", "ず", "か", "し", "い", "よ"],
  },
  {
    url: "https://youtu.be/aZuiL-lgrTw?start=19&end=21",
    answers: ["お", "は", "よ", "う", "ご", "ざ", "い", "ま", "す"],
  },
  {
    url: "https://youtu.be/Fw4wdaSszu0?start=747&end=750",
    answers: ["せかい", "よ", "われ", "に", "したがえ"],
  },
  {
    url: "https://youtu.be/184zUaSjmUo?start=13&end=14",
    answers: ["だ", "い", "じょ", "う", "ぶ"],
  },
  {
    url: "https://youtu.be/184zUaSjmUo?start=14&end=16",
    answers: ["ぼくさいきょうだから"],
  },
  {
    url: "https://youtu.be/184zUaSjmUo?start=14&end=16",
    answers: ["な", "に", "し", "て", "る"],
  },
];

export function Game(props: GameProps): ReactElement {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const toast = useToast();

  // const [showNextButton, setShowNextButton] = useState(false);
  const handleAnswer = (items: any) => {
    const { choices } = items;

    const currentAnswer = choices.map((I: any) => I.content).join("");
    const correctAnswer = question.answers.join("");
    console.log(currentAnswer);

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
