"use client"

import Image from "next/image";
import Greet from "./greet";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Greet />

      <button
        onClick={() => {
          setActive(!active);
        }}
        className="w-[200px] h-10 bg-green-900 rounded-lg hover:bg-green-800"
      >
        {active ? 'License Activated' : 'Activate License'}
      </button>
    </main>
  );
}
