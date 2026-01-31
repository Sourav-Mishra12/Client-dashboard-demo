"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Premium <span className="text-zinc-400">Client Dashboard</span>
        </h1>

        <p className="mt-6 text-zinc-400 text-lg">
          A modern internal tool for freelancers & agencies to manage
          clients, invoices, and workflows.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/dashboard">
            <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
              View Demo
            </button>
          </Link>
          <button className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition">
            Contact
          </button>
        </div>
      </motion.div>
    </main>
  )
}
