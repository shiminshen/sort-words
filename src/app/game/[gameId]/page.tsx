import { Game } from "@/components/Game";

interface GamePageProps {
  params: {
    gameId: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  return (
    <Game id={params.gameId}/>
  );
}
