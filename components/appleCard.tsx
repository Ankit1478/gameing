"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Unleash the Power of the Gods
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
              The journey of a thousand miles begins with a single step.
              </span>{" "}
              Embrace your destiny and face the trials that await in the Nine Realms. Equip yourself with the Leviathan Axe and the Blades of Chaos, and carve your path through the shadows of Midgard.
            </p>
            <Image
              src="https://img.freepik.com/free-photo/fun-3d-illustration-backpacker-with-vr-helmet_183364-81218.jpg?t=st=1732405005~exp=1732408605~hmac=981419700880a6a147516a735f03ceb27c3532e822f145b91eceb1e0542374e8&w=740"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Combat",
    title: "Master the Art of War",
    src: "https://wallpapers.com/images/high/battlefield-1-4k-gaming-lv1bce7p143co6yg.webp",
    content: <DummyContent />,
  },
  {
    category: "Exploration",
    title: "Explore the Nine Realms",
    src: "https://wallpapers.com/images/high/pubg-frying-pan-4k-o4jenkeqrlcut59v.webp",
    content: <DummyContent />,
  },
  {
    category: "Mythology",
    title: "Discover the Secrets of Norse Mythology",
    src: "https://wallpapers.com/images/high/pubg-purple-lips-4k-zhjh1aykyr94yns1.webp",
    content: <DummyContent />,
  },
  {
    category: "Boss Battles",
    title: "Challenge the Valkyries",
    src: "https://wallpapers.com/images/high/pubg-blood-raven-x-suit-4k-ihtyvrsec8fp1rd9.webp",
    content: <DummyContent />,
  },
  {
    category: "Lore",
    title: "Unearth the Rich Lore of Midgard",
    src: "https://images.pexels.com/photos/163489/war-desert-guns-gunshow-163489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <DummyContent />,
  },
  {
    category: "Crafting",
    title: "Forge Your Own Destiny",
    src: "https://images.pexels.com/photos/10547072/pexels-photo-10547072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <DummyContent />,
  },
];