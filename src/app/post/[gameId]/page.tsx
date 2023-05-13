import { Post } from "@/components/Post";

interface GamePageProps {
  params: {
    gameId: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  return (
    <main className="pt-20 flex h-screen w-full flex-col items-center p-6 box-border ">
      <Post id={params.gameId}/>
    </main>
  );
}
