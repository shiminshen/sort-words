// import Image from "next/image";
// import { Inter } from "next/font/google";

import { GameList } from "@/components/GameList";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="pt-20 flex h-screen flex-col items-center p-6">
      <GameList />
    </main>
  );
}
