"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Card() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full py-5">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
        backgroundImage="https://wallpapercave.com/wp/wp3282817.jpg"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            The Power of Kratos Unleashed
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Join the ranks of warriors as you embark on an epic journey through
            the realms, wielding the power of a god.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="Kratos wielding the Leviathan Axe"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px]"
        backgroundImage="https://scontent.fdel27-4.fna.fbcdn.net/o1/v/t0/f1/m248/upload_img_63952717_09_01_2024_10_55_17_542849_1282385933475695961.jpeg?_nc_ht=scontent.fdel27-4.fna.fbcdn.net&_nc_cat=108&ccb=9-4&oh=00_AYCKu2Sh8acsD2eXMMWnSbePLxZnheA_SAbiBZULXUoyXQ&oe=66D69518&_nc_sid=5b3566"
      >
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Embrace Your Destiny, Spartan.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Step into the shoes of Kratos and carve your path through the shadows
          of Midgard.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
        backgroundImage="https://wallpapercave.com/wp/wp2514623.jpg"
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Prepare for Ragnarök - The Final Battle
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            As the end draws near, sharpen your blades and face the fury of the
            gods in an epic showdown.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="Epic battle in Ragnarök"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
