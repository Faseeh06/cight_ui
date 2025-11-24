"use client"

import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-4xl space-y-10">
        <header className="flex justify-between items-center">
          <div className="text-[#2F3037] text-2xl font-medium font-sans">Cight Dashboard</div>
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 rounded-full text-sm font-medium font-sans text-[#2F3037] border border-[rgba(55,50,47,0.12)] hover:bg-white transition"
          >
            Log out
          </button>
        </header>

        <section className="bg-white rounded-3xl border border-[rgba(55,50,47,0.12)] shadow-[0px_8px_30px_rgba(55,50,47,0.08)] p-8 space-y-6">
          <div className="space-y-3">
            <p className="text-[#2F3037] text-xl font-medium font-sans">Hi there 👋</p>
            <p className="text-[rgba(55,50,47,0.80)] text-base font-sans">
              Welcome to your Cight dashboard. From here you can jump straight into the voice-first browsing experience or
              return to the landing demo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => router.push("/")}
              className="rounded-2xl bg-[#2F3037] text-white py-4 px-6 text-left font-sans hover:bg-[#1f2026] transition"
            >
              <p className="text-lg font-medium">Launch Cight</p>
              <p className="text-sm text-white/80 mt-1">Open the live speech-to-text experience.</p>
            </button>

            <button
              onClick={() => router.push("/cight")}
              className="rounded-2xl border border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] text-[#2F3037] py-4 px-6 text-left font-sans hover:bg-white transition"
            >
              <p className="text-lg font-medium">Peek at the orb</p>
              <p className="text-sm text-[#2F3037]/70 mt-1">Go directly to the dedicated /cight route.</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

