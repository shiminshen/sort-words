"use client";
import React, { useState, createRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import dynamic from "next/dynamic";
import type { ReactElement } from "react";
// import ReactPlayer from 'react-player'
import ReactPlayer from "react-player/youtube";
import QuestionSettings from '@/components/QuestionSettings'

import { useGameSettings } from "@/components/useGameSettings";

import { rectSortingStrategy } from "@dnd-kit/sortable";

import {
  Box,
} from "@chakra-ui/react";

const MultipleContainers = dynamic(
  () => import("@/components/MultipleContainers"),
  {
    ssr: false,
  }
);

export interface QuestionProps {
  url?: string;
  data: QuestionData
  handleAnswer: (items: any) => void;
}
  
export interface QuestionData {
  url: string;
  answers: string[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffledArr = [...arr]; // make a copy of the original array
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]; // swap the elements
  }
  return shuffledArr;
}


export function Question(props: QuestionProps): ReactElement {
  const { data: { url, answers }, handleAnswer } = props;
  const playerRef = createRef();
  const [replayCount, setReplayCount] = useState(0);
  const { autoReplay } = useGameSettings();
  
  const choiceItems = answers?.map((choice) => ({
    id: uuidv4(),
    content: choice,
  }));

  const replay = () => {
    setReplayCount(replayCount + 1);
  }

  return (
    <>
      <div className="w-full m-h-50 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          key={replayCount}
          ref={playerRef as any}
          playing
          url={url}
          onEnded={() => {
            if (autoReplay) {
              replay();
            }
          }}
          config={{
            playerVars: {
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </div>
      <Box my={2} width={'full'}>
        <QuestionSettings replay={replay} />
      </Box>
      <MultipleContainers
        vertical
        minimal
        className="w-full m-h-10"
        containerClassName="w-full bg-slate-400 flex flex-wrap"
        onChange={handleAnswer}
        items={{
          choices: shuffleArray(choiceItems),
        }}
        columns={2}
        strategy={rectSortingStrategy}
        wrapperStyle={() => ({
          border: "1px solid #ddd",
          padding: "4px",
          cursor: "pointer",
        })}
      />
    </>
  );
}

export default Question;
