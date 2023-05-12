"use client";
import React, { useState, createRef } from "react";
import qs from 'qs'
import dynamic from "next/dynamic";
import type { ReactElement } from "react";
// import ReactPlayer from 'react-player'
import ReactPlayer from "react-player/youtube";

import {
  Button,
} from "@chakra-ui/react";

export interface PlayerProps {
  url?: string;
  answers: string[];
  playing: boolean;
}
  
export function Player(props: PlayerProps): ReactElement {
  const { url, playing } = props;
  const playerRef = createRef<any>();
  
  // FIXME
  // use regex to parse query string from url
  const queryString = url?.match(/\?(.*)/)?.[1] || '';
  const urlParams = qs.parse(queryString);
  const replay = () => {
    // seek player to beginning
    playerRef?.current?.seekTo(urlParams?.start || urlParams?.t || 0);
  }

  return (
    <>
      <div className="w-full m-h-50 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          ref={playerRef as any}
          playing={playing}
          url={url}
          config={{
            playerVars: {
              // FIXME
              // autoplay: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </div>
      <Button mt={2} colorScheme="teal" variant="solid" onClick={replay}>
        replay
      </Button>
    </>
  );
}

export default Player;
