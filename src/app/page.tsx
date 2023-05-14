import { GameList } from "@/components/GameList";
import { normalizeQuestions } from '@/utilities/cmsNormalizer';
import { client } from "@/utilities/contentful";

// force revalidate every 0 second
export const revalidate = 0;

export default async function Home() {
  const entries = await client.getEntries();
  const data = normalizeQuestions(entries.items)
  return <GameList data={data} />;
}
