"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function GoogleGeminiEffectDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const videoProgress = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Ensure video starts playing initially
    }

    const unsubscribe = videoProgress.onChange((latest) => {
      if (videoRef.current) {
        videoRef.current.playbackRate = latest;
      }
    });

    return () => unsubscribe();
  }, [videoProgress]);

  return (
    <div>
       <div className="headline-wrapper text-center relative z-20 text-black pb-8 ">
        <h2 className="text-xl md:text-2xl uppercase tracking-wider mb-4">Journey of a Warrior</h2>
        <p className="text-4xl md:text-6xl font-bold leading-tight">
        Relive the Legend.<br />Become the God of War.
        </p>
      </div>
    <div className="relative w-full overflow-hidden" ref={ref}>
      {/* Video background and text section */}
      <div className="relative w-full h-screen">
        <motion.div className="absolute inset-0 w-full h-full">
          <motion.video
            ref={videoRef}
            src="https://cdn.pixabay.com/video/2022/07/25/125459-733425009_large.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectFit: "cover",
            }}
            muted
            playsInline
            loop
          ></motion.video>
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center text-white"
            style={{
              opacity: videoProgress,
            }}
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">
              Embrace Your Destiny
              </h1>
              <p className="mt-4 text-lg md:text-2xl">
              Scroll down to uncover the saga.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional content sections that are not over the video */}
      <div className="relative w-full bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
          The Rise of Kratos
          </h2>
          <p className="text-lg md:text-2xl mb-4">
          Step into the shoes of Kratos, the legendary Spartan warrior, as
              he battles gods and monsters across the realms. God of War is not
              just a game; it&#39;s a journey of vengeance, redemption, and the
              unbreakable bond between father and son.
          </p>
          <p className="text-lg md:text-2xl mb-4">
          With breathtaking visuals, immersive storytelling, and intense
              combat, God of War sets a new standard for action-adventure games.
              Feel the weight of the Leviathan Axe in your hands, hear the roar
              of battle, and witness the fury of the gods as you embark on this
              epic saga.
          </p>
          <p className="text-lg md:text-2xl mb-4">
          As you scroll through this page, you will experience the legend of
              Kratos like never before. Explore the world of Norse mythology,
              face the wrath of ancient gods, and forge your destiny.
          </p>
          <p className="text-lg md:text-2xl">
          face the wrath of ancient gods, and forge your destiny.

          </p>
        </div>
      </div>

   
    </div>
    </div>
  );
}
