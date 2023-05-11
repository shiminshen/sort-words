"use client"

import type { ReactElement } from "react"

import { GameCard } from '@/components/GameList/GameCard'
import { Box, Flex } from "@chakra-ui/react"
import { gameData } from '@/utilities/constants'

export interface indexProps {
}

export function GameList(props: indexProps): ReactElement {
  return (
    <Flex>
      {gameData.map((game) => (
        <GameCard
          key={game.title}
          id={game.id}
          title={game.title}
          language={game.language}
          type={game.type}
        />
      ))}
    </Flex>
  )
}
