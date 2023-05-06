"use client";

import React, { useState, createRef } from "react";
import dynamic from "next/dynamic";
import type { ReactElement } from "react";
// import ReactPlayer from 'react-player'
import ReactPlayer from "react-player/youtube";
import QuestionSettings from '@/components/QuestionSettings'

import { rectSortingStrategy } from "@dnd-kit/sortable";
const MultipleContainers = dynamic(
  () => import("@/components/MultipleContainers"),
  {
    ssr: false,
  }
);

export interface QuestionProps {
  url?: string;
  data: QuestionData
}
  
export interface QuestionData {
  url: string;
  answers: string[];
}

function shuffleStrings(arr: string[]): string[] {
  const shuffledArr = [...arr]; // make a copy of the original array
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]; // swap the elements
  }
  return shuffledArr;
}


export function Question(props: QuestionProps): ReactElement {
  const { data: { url, answers } } = props;
  const playerRef = createRef();
  const [replayCount, setReplayCount] = useState(0);

  return (
    <>
      <div className="w-full aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          key={replayCount}
          ref={playerRef as any}
          url={url}
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
      <QuestionSettings />
      <MultipleContainers
        vertical
        minimal
        className="w-full m-h-10"
        containerClassName="w-full bg-slate-400 flex flex-wrap"
        items={{
          choices: shuffleStrings(answers),
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
