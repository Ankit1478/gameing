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
              src="https://assets.aceternity.com/macbook.png"
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
    src: "https://scontent.fdel27-4.fna.fbcdn.net/o1/v/t0/f1/m250/upload_img_49079506_09_01_2024_10_43_59_199157_7723116370141211842.jpeg?_nc_ht=scontent.fdel27-4.fna.fbcdn.net&_nc_cat=106&ccb=9-4&oh=00_AYB8PVQn6bz1IpGcVxQjZ-7WR-JprIL3Mtn4VSgmP_Wg_A&oe=66D689AA&_nc_sid=5b3566",
    content: <DummyContent />,
  },
  {
    category: "Exploration",
    title: "Explore the Nine Realms",
    src: "https://scontent.fdel27-4.fna.fbcdn.net/o1/v/t0/f1/m340/genai_m4_lla_cln_v3:upload_img_25724027_09_01_2024_10_56_40_408534_1704866634223810398.jpeg?_nc_ht=scontent.fdel27-4.fna.fbcdn.net&_nc_cat=100&ccb=9-4&oh=00_AYDfPGE7_DLYXcwREP6phW8ciq96JYZDphpASnoE-5a__g&oe=66D69205&_nc_sid=5b3566",
    content: <DummyContent />,
  },
  {
    category: "Mythology",
    title: "Discover the Secrets of Norse Mythology",
    src: "https://scontent.fdel27-4.fna.fbcdn.net/o1/v/t0/f1/m340/genai_m4_ldc_ftw_v3:upload_img_21861314_09_01_2024_10_52_34_738196_5514182103986179023.jpeg?_nc_ht=scontent.fdel27-4.fna.fbcdn.net&_nc_cat=100&ccb=9-4&oh=00_AYALvncSiOelILv8SLHA6i78SB9ArCHHVBiEQXvyi-HP6A&oe=66D67201&_nc_sid=5b3566",
    content: <DummyContent />,
  },
  {
    category: "Boss Battles",
    title: "Challenge the Valkyries",
    src: "https://scontent.fdel27-4.fna.fbcdn.net/o1/v/t0/f1/m250/upload_img_49079506_09_01_2024_10_52_31_477958_2491972618190150133.jpeg?_nc_ht=scontent.fdel27-4.fna.fbcdn.net&_nc_cat=105&ccb=9-4&oh=00_AYATBgrfevq0VC_Ht9XvsDjaa4GsBj5UGAUenTqSaw3wmA&oe=66D683BB&_nc_sid=5b3566",
    content: <DummyContent />,
  },
  {
    category: "Lore",
    title: "Unearth the Rich Lore of Midgard",
    src: "https://scontent.fdel27-4.fna.fbcdn.net/o1/v/t0/f1/m248/upload_img_63952717_09_01_2024_10_55_17_542849_1282385933475695961.jpeg?_nc_ht=scontent.fdel27-4.fna.fbcdn.net&_nc_cat=108&ccb=9-4&oh=00_AYCKu2Sh8acsD2eXMMWnSbePLxZnheA_SAbiBZULXUoyXQ&oe=66D69518&_nc_sid=5b3566",
    content: <DummyContent />,
  },
  {
    category: "Crafting",
    title: "Forge Your Own Destiny",
    src: "https://scontent.fdel27-4.fna.fbcdn.net/o1/v/t0/f1/m340/genai_m4_rva_eag_v3:upload_img_50794437_09_01_2024_10_56_40_334907_8937175885725288175.jpeg?_nc_ht=scontent.fdel27-4.fna.fbcdn.net&_nc_cat=107&ccb=9-4&oh=00_AYC6-ykpqy5TtMJZemGwvWd3kDLtrzOzbHr1-BLqTmGYrA&oe=66D67EC4&_nc_sid=5b3566",
    content: <DummyContent />,
  },
];