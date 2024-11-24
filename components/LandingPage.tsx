'use client'

import { motion } from "framer-motion"
import React from "react"
import { AuroraBackground } from "./ui/aurora-background"
import { useRouter } from 'next/navigation'
import { Sparkles, BookOpen, MessageSquare, Wand2 } from 'lucide-react'

export function AuroraBackgroundDemo() {
  const router = useRouter()

  const steps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Write Prompt",
      description: "Begin your journey with a story prompt"
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Generate Story",
      description: "Watch as AI crafts your tale"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat Characters",
      description: "Interact with characters from your story"
    },
  ]

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
        className="relative flex flex-col gap-8 items-center justify-center px-4 py-20"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Enter the Realm of the Gods
        </div>
        
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200">
          Embrace the power of Kratos and embark on an epic journey.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => window.location.href = 'https://character-ai-fronted.vercel.app/'}
          className="relative group mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-black px-6 py-3 rounded-full border border-white/20 flex items-center gap-2 text-white group-hover:border-white/40 transition-all duration-300">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg">Begin Your Quest</span>
          </div>
        </motion.button>
      </motion.div>
    </AuroraBackground>
  )
}