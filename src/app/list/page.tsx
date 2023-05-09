// import Image from "next/image";
// import { Inter } from "next/font/google";

import { GameList } from "@/components/GameList";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex h-screen flex-col items-center p-6">
        <GameList />
      </main>
    </>
  );
}
