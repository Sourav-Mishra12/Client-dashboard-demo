"use client"

import Link from "next/link"
import { LayoutDashboard, Users, FileText } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">ClientPortal</h2>
        <nav className="space-y-4">
          <Link href="/dashboard" className="flex items-center gap-3 text-zinc-300 
           hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-lg transition">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/dashboard/clients" className="flex items-center gap-3 text-zinc-300 
            hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-lg transition">
            <Users size={18} /> Clients
          </Link>
          <Link href="/dashboard/invoices" className="flex items-center gap-3 text-zinc-300 
          hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-lg transition">
            <FileText size={18} /> Invoices
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
