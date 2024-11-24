"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { useRouter } from 'next/navigation'
export function AuroraBackgroundDemo() {
  const router = useRouter()
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
  Enter the Realm of the Gods
</div>
<div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
  Embrace the power of Kratos and embark on an epic journey.
</div>
<button  onClick={() => window.location.href = 'https://character-ai-fronted.vercel.app/'}  className="bg-white dark:bg-black rounded-full w-fit text-black dark:text-white px-4 py-2">
  Begin Your Quest
</button>

      </motion.div>
    </AuroraBackground>
  );
}
