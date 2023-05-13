"use client";
import React, { useState, createRef } from "react";
import qs from 'qs'
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
  data?: QuestionData
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
  const { data: { url, answers } = {}, handleAnswer } = props;
  const playerRef = createRef<any>();
  const [replayCount, setReplayCount] = useState(0);
  const { autoReplay } = useGameSettings();
  
  const choiceItems = answers?.map((choice) => ({
    id: uuidv4(),
    content: choice,
  }));

  // FIXME
  // use regex to parse query string from url
  const queryString = url?.match(/\?(.*)/)?.[1] || '';
  const urlParams = qs.parse(queryString);
  const replay = () => {
    // seek player to beginning
    playerRef?.current?.seekTo(urlParams?.start || urlParams?.t || 0);
  }

  if (!url || !answers || !choiceItems) {
    return <></>
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
      <h2>Place answers in the correct order.</h2>
      <MultipleContainers
        vertical
        minimal
        itemClassName="m-1"
        className="w-full m-h-10"
        containerClassName="w-full bg-slate-400 flex flex-wrap"
        onChange={handleAnswer}
        items={{
          answers: [],
          choices: shuffleArray(choiceItems),
        }}
        columns={2}
        strategy={rectSortingStrategy}
        wrapperStyle={() => ({})}
      />
    </>
  );
}

export default Question;
