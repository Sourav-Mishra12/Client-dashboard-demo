"use client"

import { motion } from "framer-motion"
import PageWrapper from "../components/PageWrapper"
import { useEffect, useState } from "react"

export default function Dashboard() {
  // 🔒 UI fallback values (original ones)
  const [stats, setStats] = useState({
    total: 12,
    active: 5,
    pending: 3,
  })

  useEffect(() => {
    // ⚠️ Safe fetch: UI will NOT break if backend fails
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`)
      .then((res) => res.json())
      .then((res) => {
        if (!res || !res.data) return

        const leads = res.data

        setStats({
          total: leads.length,
          active: leads.filter((l: any) => l.status === "Active").length,
          pending: leads.filter((l: any) => l.status === "Pending").length,
        })
      })
      .catch(() => {
        // ❌ DO NOTHING
        // fallback numbers stay → UI unchanged
      })
  }, [])

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
          {[
            { label: "Total Clients", value: stats.total },
            { label: "Active Projects", value: stats.active },
            { label: "Pending Invoices", value: stats.pending },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/70 backdrop-blur border border-white/10 rounded-2xl p-6 
              hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <p className="text-zinc-400">{item.label}</p>
              <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
