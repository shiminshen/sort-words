"use client";

import React, { useState, createRef } from "react";
import type { ReactElement } from "react";
// import ReactPlayer from 'react-player'
import ReactPlayer from "react-player/youtube";

export interface QuestionProps {
  url: string;
}

export function Question(props: QuestionProps): ReactElement {
  const { url = "https://youtu.be/Fw4wdaSszu0?start=747&end=750" } = props;
  const playerRef = createRef();
  const [replayCount, setReplayCount] = useState(0);
  
  return (
    <>
      <ReactPlayer
        key={replayCount}
        ref={playerRef}
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
      <button onClick={() => setReplayCount(replayCount + 1)}>Replay</button>
    </>
  );
}

export default Question;
