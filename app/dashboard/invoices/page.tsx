"use client"

import { motion } from "framer-motion"

const invoices = [
  { id: "#INV-01", amount: "₹12,000", status: "Paid" },
  { id: "#INV-02", amount: "₹8,000", status: "Pending" },
]

export default function Invoices() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        Invoices
      </motion.h1>

      <div className="grid gap-4">
        {invoices.map((inv, i) => (
          <motion.div
            key={inv.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{inv.id}</p>
              <p className="text-zinc-400 text-sm">{inv.amount}</p>
            </div>
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                inv.status === "Paid"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-yellow-500/10 text-yellow-400"
              }`}
            >
              {inv.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
