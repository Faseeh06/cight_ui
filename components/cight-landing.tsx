"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Orb from "./orb"

export default function CightLanding() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [interimTranscript, setInterimTranscript] = useState("")
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    setIsMounted(true)
    if (typeof window === "undefined") return

    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = "en-US"

      recognition.onresult = (event: any) => {
        let interimText = ""
        let finalText = ""

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPiece = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            finalText += transcriptPiece + " "
          } else {
            interimText += transcriptPiece
          }
        }

        if (finalText) {
          setTranscript((prev) => prev + finalText)
          setInterimTranscript("")
        } else {
          setInterimTranscript(interimText)
        }
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognitionRef.current = recognition
    }

    return () => {
      recognitionRef.current?.stop()
    }
  }, [])

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
      return
    }

    setTranscript("")
    setInterimTranscript("")
    recognitionRef.current?.start()
    setIsListening(true)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full min-h-screen bg-[#F7F5F3] flex flex-col items-center overflow-x-hidden">
      <div className="w-full flex flex-col items-center">
        {/* Navigation */}
        <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] flex justify-center items-center px-6 sm:px-8 md:px-12 lg:px-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>
          
          <div className="w-full max-w-[1200px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-4 sm:px-6 md:px-8 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
            {/* Logo - Left Corner */}
            <div className="flex justify-start items-center">
              <div className="text-[#2F3037] text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold leading-6 font-sans tracking-tight">
                Cight
              </div>
            </div>
            
            {/* Login Button - Right Corner */}
            <div className="flex justify-end items-center">
              <div className="px-3 sm:px-4 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors">
                <button
                  onClick={() => router.push("/login")}
                  className="text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="w-full max-w-[1000px] flex flex-col items-center justify-start px-4 sm:px-8 py-8 cursor-pointer min-h-[calc(100vh-200px)] relative"
          onClick={toggleListening}
          role="button"
          tabIndex={0}
          aria-label={isListening ? "Click to stop listening" : "Click to start listening"}
        >
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] mb-12 flex items-center justify-center">
            <Orb hue={0} hoverIntensity={0.4} rotateOnHover forceHoverState={isListening} />
            <div className="absolute inset-0 rounded-full border-[12px] border-white/40 pointer-events-none mix-blend-multiply"></div>
            {isListening && <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/20 to-pink-500/20 blur-3xl -z-10" />}
          </div>

          <div className="w-full flex flex-col items-center gap-10 sm:gap-12">

          {!isListening && !transcript && !interimTranscript && (
            <div className="text-center">
              <p className="text-[rgba(55,50,47,0.80)] text-xl sm:text-2xl font-medium leading-7 font-sans mb-2">
                Click anywhere to start listening
              </p>
              <p className="text-[rgba(55,50,47,0.80)] text-base sm:text-lg font-medium leading-6 font-sans">
                Your voice will be converted to text in real-time
              </p>
            </div>
          )}

            {isListening && (
              <div className="text-center">
                <div className="text-[#605A57] text-xl sm:text-2xl font-medium leading-7 font-sans flex items-center justify-center gap-3 mb-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  Listening...
                </div>
                <p className="text-[rgba(55,50,47,0.80)] text-base sm:text-lg font-medium leading-6 font-sans">
                  Speak clearly into your microphone
                </p>
              </div>
            )}

            <div className="w-full max-w-[920px] min-h-[220px] flex items-start justify-center text-center">
              {(transcript || interimTranscript) && (
                <p className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight font-sans break-words" aria-live="polite">
                  {transcript}
                  {interimTranscript && <span className="text-[rgba(55,50,47,0.50)]"> {interimTranscript}</span>}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Browser Support */}
        {typeof window !== "undefined" &&
          !("webkitSpeechRecognition" in window) &&
          !("SpeechRecognition" in window) && (
            <div className="px-6 py-3 bg-white text-[#605A57] rounded-full text-sm font-medium border border-[rgba(2,6,23,0.08)] shadow-sm">
              Your browser doesn't support speech recognition. Please use Chrome, Edge, or Safari.
            </div>
          )}
      </div>
    </div>
  )
}

