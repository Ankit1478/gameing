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
        <h2 className="text-xl md:text-2xl uppercase tracking-wider mb-4">Photos and Videos</h2>
        <p className="text-4xl md:text-6xl font-bold leading-tight">
          Be in the moment.<br />All over again.
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
                Experience Apple Vision Pro
              </h1>
              <p className="mt-4 text-lg md:text-2xl">
                Scroll down to explore the features.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional content sections that are not over the video */}
      <div className="relative w-full bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            A New Era of Technology
          </h2>
          <p className="text-lg md:text-2xl mb-4">
            Apple Vision Pro represents a revolutionary leap forward in how we
            interact with technology. With an immersive interface and
            groundbreaking design, it&apos;s not just a new product—it&apos;s a new way of
            seeing the world.
          </p>
          <p className="text-lg md:text-2xl mb-4">
            With powerful sensors, advanced optics, and a custom-designed
            silicon chip, Apple Vision Pro brings the world around you to life
            in ways never before possible. Whether you&apos;re at home, in the
            office, or on the go, this is the future of computing.
          </p>
          <p className="text-lg md:text-2xl mb-4">
            As you scroll through this page, you&apos;ll uncover the many features
            and innovations that make Apple Vision Pro a true game-changer. Dive
            in and see for yourself how it can transform your digital
            experience.
          </p>
          <p className="text-lg md:text-2xl">
            Welcome to the new reality.
          </p>
        </div>
      </div>

   
    </div>
    </div>
  );
}
