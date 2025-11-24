"use client"

import { useRouter } from "next/navigation"
import { FormEvent } from "react"

export default function SignupPage() {
  const router = useRouter()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center mb-8 space-y-2">
        <p className="font-serif text-4xl text-[#2F3037] tracking-tight">Cight</p>
        <p className="text-[rgba(55,50,47,0.80)] text-sm sm:text-base font-medium">Create your access to clarity</p>
      </div>

      <div className="w-full max-w-lg bg-white shadow-[0px_10px_40px_rgba(55,50,47,0.08)] rounded-[32px] border border-[rgba(55,50,47,0.08)] p-8 space-y-6">
        <div className="space-y-1">
          <p className="text-[#2F3037] text-xl font-medium font-sans">Sign up for an account</p>
          <p className="text-[rgba(55,50,47,0.70)] text-sm font-sans">Takes less than a minute to start</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2F3037] font-sans" htmlFor="name">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jordan Lee"
              required
              className="w-full bg-[#FBF9F6] border border-[rgba(55,50,47,0.12)] rounded-2xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#2F3037]/15"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2F3037] font-sans" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@university.edu"
              required
              className="w-full bg-[#FBF9F6] border border-[rgba(55,50,47,0.12)] rounded-2xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#2F3037]/15"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2F3037] font-sans" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              required
              className="w-full bg-[#FBF9F6] border border-[rgba(55,50,47,0.12)] rounded-2xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#2F3037]/15"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2F3037] text-white rounded-2xl py-3 text-sm font-medium font-sans hover:bg-[#1f2026] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-[rgba(55,50,47,0.8)]">
          Already have an account?{" "}
          <button className="underline font-medium" onClick={() => router.push("/login")}>
            Log in
          </button>
        </p>
      </div>
    </div>
  )
}

