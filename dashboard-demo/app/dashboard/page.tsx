"use client"

import { motion } from "framer-motion"
import PageWrapper from "../../components/PageWrapper"


export default function Dashboard() {
  return (
  <PageWrapper>
    <div className="min-h-screen bg-zinc-950 text-white p-8">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
  Dashboard
</span>

      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {["Total Clients", "Active Projects", "Pending Invoices"].map(
          (item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/70 backdrop-blur border border-white/10 rounded-2xl p-6 
              hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <p className="text-zinc-400">{item}</p>
              <h2 className="text-3xl font-bold mt-2">
                {i === 0 ? 12 : i === 1 ? 5 : 3}
              </h2>
            </motion.div>
          )
        )}
      </div>
    </div>
    </PageWrapper>
  )
}
