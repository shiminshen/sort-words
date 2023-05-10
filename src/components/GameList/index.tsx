"use client"

import type { ReactElement } from "react"

import { GameCard } from '@/components/GameList/GameCard'
import { Box } from "@chakra-ui/react"

const questions = [
  {
    url: "https://youtu.be/184zUaSjmUo?start=13&end=14",
    answers: ["だ", "い", "じょ", "う", "ぶ"],
  },
  {
    url: "https://youtu.be/184zUaSjmUo?start=14&end=16",
    answers: ["ぼく", "さいきょう", "だから"],
  },
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
    url: "https://youtu.be/184zUaSjmUo?start=14&end=16",
    answers: ["な", "に", "し", "て", "る"],
  },
];


const gameData = [
  {
    id: "1",
    title: "Japanese Listening Quiz",
    language: "Japanese",
    type: "Listening",
    questions: questions.slice(0, 3),
  },
  {
    id: "2",
    title: "Japanese Listening Quiz2",
    language: "Japanese",
    type: "Listening",
    questions: questions.slice(3, 6),
  }
]

export interface indexProps {
}

export function GameList(props: indexProps): ReactElement {
  return (
    <Box>
      {gameData.map((game) => (
        <GameCard
          key={game.title}
          id={game.id}
          title={game.title}
          language={game.language}
          type={game.type}
        />
      ))}
    </Box>
  )
}
