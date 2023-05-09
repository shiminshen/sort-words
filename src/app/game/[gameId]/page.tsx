// import Image from "next/image";
// import { Inter } from "next/font/google";

import { Game } from "@/components/Game";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export default function GamePage() {
  return (
    <>
      <Navbar />
      <main className="flex h-screen flex-col items-center p-6">
        <Game />
      </main>
    </>
  );
}
