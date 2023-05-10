import { Game } from "@/components/Game";

interface GamePageProps {
  params: {
    gameId: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  return (
    <main className="pt-20 flex h-screen flex-col items-center p-6">
      <Game id={params.gameId}/>
    </main>
  );
}
