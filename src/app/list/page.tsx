import { GameList } from "@/components/GameList";
import { normalizeQuestions } from '@/utilities/cmsNormalizer';
import { client } from "@/utilities/contentful";

export default async function List() {
  const entries = await client.getEntries();
  const data = normalizeQuestions(entries.items)
  return <GameList data={data} />;
}

