"use client"

import { useRouter } from "next/navigation"
import { FormEvent } from "react"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center mb-8 space-y-2">
        <p className="font-serif text-4xl text-[#2F3037] tracking-tight">Cight</p>
        <p className="text-[rgba(55,50,47,0.80)] text-sm sm:text-base font-medium">Voice-first browsing suite</p>
      </div>

      <div className="w-full max-w-md bg-white shadow-[0px_10px_40px_rgba(55,50,47,0.08)] rounded-[32px] border border-[rgba(55,50,47,0.08)] p-8 space-y-6">
        <div className="space-y-1">
          <p className="text-[#2F3037] text-xl font-medium font-sans">Sign in to your account</p>
          <p className="text-[rgba(55,50,47,0.70)] text-sm font-sans">Use your campus email and password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2F3037] font-sans" htmlFor="email">
              Email address
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
              placeholder="Enter your password"
              required
              className="w-full bg-[#FBF9F6] border border-[rgba(55,50,47,0.12)] rounded-2xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#2F3037]/15"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2F3037] text-white rounded-2xl py-3 text-sm font-medium font-sans hover:bg-[#1f2026] transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-[rgba(55,50,47,0.1)]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[rgba(55,50,47,0.6)]">OR</span>
          <div className="h-px flex-1 bg-[rgba(55,50,47,0.1)]" />
        </div>

        <button
          className="w-full border border-[#2F3037] text-[#2F3037] rounded-2xl py-3 text-sm font-medium font-sans hover:bg-[#F7F5F3] transition flex items-center justify-center gap-2"
          type="button"
        >
          <span className="text-lg">🔒</span>
          Sign in with SSO (Coming soon)
        </button>

        <p className="text-center text-sm text-[rgba(55,50,47,0.8)]">
          Don&apos;t have an account?{" "}
          <button className="underline font-medium" onClick={() => router.push("/signup")}>
            Sign up here
          </button>
        </p>
      </div>
    </div>
  )
}

