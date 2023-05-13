import { Post } from "@/components/Post";

interface GamePageProps {
  params: {
    gameId: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  return (
    <Post id={params.gameId}/>
  );
}
