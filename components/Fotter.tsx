import React from "react";
import Link from "next/link";

export function GodOfWarFooter() {
  return (
    <footer className="bg-white text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Realms to Explore
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="hover:text-black">
                  Midgard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Alfheim
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Helheim
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Muspelheim
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Niflheim
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Asgard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Vanaheim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
              Battle Preparations
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="hover:text-black">
                  Weapons & Armor
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Skills & Abilities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Rune Crafting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Valkyrie Challenges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Boss Strategies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
              Legendary Tales
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="hover:text-black">
                  Lore & Mythology
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  The Saga of Kratos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Gods & Beasts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Prophecies & Secrets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  The World Tree
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
              The Journey
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="hover:text-black">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Meet the Creators
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Join the Community
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Events & Competitions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-500">
            © 2024 God of War Universe. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6">
            <Link href="#" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-black">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-black">
              Legal
            </Link>
            <Link href="#" className="hover:text-black">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
