"use client";

import React, { useState, createRef } from "react";
import dynamic from "next/dynamic";
import type { ReactElement } from "react";
// import ReactPlayer from 'react-player'
import ReactPlayer from "react-player/youtube";

import { rectSortingStrategy } from "@dnd-kit/sortable";
const MultipleContainers = dynamic(
  () => import("@/components/MultipleContainers"),
  {
    ssr: false,
  }
);

export interface QuestionProps {
  url?: string;
}

export function Question(props: QuestionProps): ReactElement {
  const { url = "https://youtu.be/Fw4wdaSszu0?start=747&end=750" } = props;
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
              start: 747,
              end: 750,
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </div>
      <button onClick={() => setReplayCount(replayCount + 1)}>Replay</button>
      <MultipleContainers
        vertical
        minimal
        className="w-full m-h-10"
        containerClassName="w-full bg-slate-400 flex flex-wrap"
        items={{
          answers: [],
          choices: [
            "せ",
            "か",
            "い",
            "よ",
            "わ",
            "れ",
            "に",
            "し",
            "た",
            "が",
            "え",
          ],
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
