import React from "react";
import Link from "next/link";

export function AppleStyleFooter() {
  return (
    <footer className="bg-gray-100 dark:bg-[#1c1c1e] text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Shop and Learn
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Mac
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  iPad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  iPhone
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Watch
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  TV
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Music
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Apple Music
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Apple TV+
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  iCloud
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Apple Podcasts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  App Store
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Apple Store
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Genius Bar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Today at Apple
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Apple Camp
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Apple Store App
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Refurbished and Clearance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Financing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              About Apple
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Apple Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Job Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Ethics & Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Contact Apple
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 dark:text-gray-500">
            © 2024 Your Company Name. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6">
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              Sales and Refunds
            </Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              Legal
            </Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
