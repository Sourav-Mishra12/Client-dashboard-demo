"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Acme Corp", status: "Active" },
  { name: "Pixel Agency", status: "Pending" },
  { name: "Startup XYZ", status: "Active" },
]

export default function Clients() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        Clients
      </motion.h1>

      <div className="bg-zinc-900/70 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-lg">

        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between p-4 border-b border-zinc-800 last:border-none hover:bg-zinc-800"
          >
            <span>{c.name}</span>
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                c.status === "Active"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-yellow-500/10 text-yellow-400"
              }`}
            >
              {c.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
