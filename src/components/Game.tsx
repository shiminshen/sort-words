"use client";

import React, { useState } from "react";
import type { ReactElement } from "react";
import Question from "@/components/Question";
import { useToast } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

export interface GameProps {}

  const questions = [
    {
      url: "https://youtu.be/Fw4wdaSszu0?start=747&end=750",
      answers: "せかいよわれにしたがえ",
    },
    {
      url: "https://youtu.be/nAx5mdVPl_g?t=2",
      answers: 'わくわく'
    },
    {
      url: "https://youtu.be/tknn02o0B5o?start=89&end=92",
      answers: 'わくわく'
    }
  ];

export function Game(props: GameProps): ReactElement {
  const [questionIndex, setQuestionIndex] = useState(1);
  const question = questions[questionIndex];
  const toast = useToast();


  // const [showNextButton, setShowNextButton] = useState(false);
  const handleAnswer = (items: any) => {
    const { choices } = items;
    console.log(items)

    const currentAnswer = choices.map(I => I.content).join('');
    console.log(currentAnswer)
    
    if (currentAnswer === question.answers) {
      toast({
        title: "Correct!",
        description: "You are correct.",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      setQuestionIndex(questionIndex + 1);
    } else {
      toast({
        title: "Incorrect!",
        description: "You are incorrect.",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return <Question  data={question} handleAnswer={handleAnswer}/>;
}
