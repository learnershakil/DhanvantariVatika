"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageCircle, Send, X } from "lucide-react"
import OpenAI from 'openai'

type Message = {
  role: "user" | "assistant"
  content: string
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY | "" ;

// Initialize OpenAI client - use environment variable
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for client-side use in development
});

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your Ayurvedic assistant. How can I help you learn about medicinal plants and Ayurveda today?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput("")

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      // Format messages for OpenAI API
      const formattedMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Add user's new message
      formattedMessages.push({
        role: "user",
        content: userMessage
      });

      // Use the direct OpenAI API with a more common model
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini", // More widely available than gpt-4o-mini
        messages: [
          {
            role: "system",
            content: "You are an Ayurvedic expert assistant for Dhanvantari Vatika, a virtual herbal garden. Provide helpful, accurate information about Ayurvedic plants, remedies, and practices. Keep responses concise and informative."
          },
          ...formattedMessages
        ],
        temperature: 0.7,
      });

      // Extract the response text
      const responseText = response.choices[0]?.message?.content || 
        "I'm sorry, I couldn't generate a response.";

      // Add AI response to chat
      setMessages((prev) => [...prev, { role: "assistant", content: responseText }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Rest of your component remains the same */}
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 rounded-full p-4 shadow-lg bg-[#256670] hover:bg-[#256670]/90 text-white transition-transform duration-300 hover:scale-105 ${
          isOpen ? "hidden" : "flex"
        }`}
        size="icon"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6 text-[#D9A566]" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col shadow-xl rounded-lg overflow-hidden z-50 border border-[#D9A566]/20">
          {/* Chat header */}
          <div className="bg-[#256670] p-3 text-white flex justify-between items-center">
            <h3 className="font-medium flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-[#D9A566]" />
              <span>Ayurvedic Assistant</span>
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full text-white hover:bg-[#D9A566]/20"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8f5f0]">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 shadow-sm ${
                    message.role === "user" 
                      ? "bg-[#256670] text-white" 
                      : "bg-white border-l-4 border-l-[#D9A566] text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-white border-l-4 border-l-[#D9A566] text-gray-800 shadow-sm">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-[#D9A566] animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-[#D9A566] animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-[#D9A566] animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-[#D9A566]/20 bg-white">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ayurveda..."
                className="flex-1 border-[#256670]/30 focus-visible:ring-[#D9A566] focus-visible:border-[#D9A566]"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || !input.trim()} 
                aria-label="Send message"
                className="bg-[#256670] hover:bg-[#256670]/90 hover:shadow-md transition-all duration-200 text-white"
              >
                <Send className="h-4 w-4 text-[#D9A566]" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}