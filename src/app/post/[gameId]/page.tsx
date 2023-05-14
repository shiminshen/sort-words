import { Post } from "@/components/Post";
import { normalizeQuestions } from '@/utilities/cmsNormalizer';
import { client } from "@/utilities/contentful";

interface GamePageProps {
  params: {
    gameId: string;
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const entries = await client.getEntries();
  const games = normalizeQuestions(entries.items)
  const data = games[Number(params.gameId) - 1]
  
  return (
    <Post data={data} />
  );
}
