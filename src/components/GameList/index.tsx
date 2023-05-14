"use client"

import type { ReactElement } from "react"

import { GameCard } from '@/components/GameList/GameCard'
import { Box, Flex } from "@chakra-ui/react"
import { gameData } from '@/utilities/constants'

export interface indexProps {
  data: any[]
}

export function GameList(props: indexProps): ReactElement {
  const { data } = props
  return (
    <Flex w={['full', 'auto']} direction={'column'}>
      {data.map((game, index) => (
        <GameCard
          key={game.title}
          id={index + 1}
          title={game.title}
          language={game.language}
          type={game.type}
        />
      ))}
    </Flex>
  )
}
