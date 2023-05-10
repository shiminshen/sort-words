import { gameData } from '@/utilities/constants'

export const fetchGames = () => {
  return gameData
}

export const fetchGame = (gameId) => {
  return gameData[gameId]
}
