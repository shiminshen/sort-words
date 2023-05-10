// import Image from "next/image";
// import { Inter } from "next/font/google";

import { GameList } from "@/components/GameList";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-6">
      <GameList />
    </main>
  );
}
