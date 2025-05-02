"use client"

import type React from "react"

import { Stethoscope } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function MedilinkAI() {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([...chatHistory, { role: "user", content: message }])

    // Simulate AI response
    setIsLoading(true)
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I need to analyze your medical report first. Please upload a report to get personalized insights.",
        },
      ])
      setIsLoading(false)
    }, 1000)

    setMessage("")
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stethoscope className="h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-bold text-primary">MediLink AI</h1>
          <p className="text-xl text-muted-foreground">Your Smart Medical Report Assistant</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Choose medical report file..."
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary pl-10"
                readOnly
              />
              <svg
                className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 2V9H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <button className="px-4 py-3 bg-muted text-muted-foreground hover:bg-muted/80 transition-colors rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Upload Report
            </button>
          </motion.div>

          <motion.div
            className="card border-l-4 border-l-primary mb-8 bg-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Welcome to MediLink AI</h2>
              <p className="text-muted-foreground mb-4">
                Upload your medical report to get started. Then, you can ask questions like:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-2 rounded-full bg-primary mt-2"></div>
                  <span>What do my test results indicate overall?</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-2 rounded-full bg-primary mt-2"></div>
                  <span>Explain what EF means in my echocardiogram</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-[6px] h-2 rounded-full bg-primary mt-2"></div>
                  <span>Are there any abnormal values in my report?</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {chatHistory.length > 0 && (
            <div className="mb-6 space-y-4 max-h-[400px] overflow-y-auto">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-muted text-foreground">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Ask something about your medical report..."
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary pr-10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              disabled={isLoading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
