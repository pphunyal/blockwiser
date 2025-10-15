"use client"

import { useState } from "react"
import { Search, Globe, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AdvancedBlockchainVisualization } from "@/components/advanced-blockchain-visualization"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const suggestions = [
    "Blockchain Basics",
    "Cryptography",
    "Bitcoin Protocol",
    "Ethereum Development",
    "Web3 Integration",
  ]

  return (
    <section className="relative pt-20 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 size-4 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-60 right-20 size-6 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 size-3 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 size-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Master the
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Blockchain
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Revolution
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
          Build the future of decentralized technology with{" "}
          <span className="text-cyan-400 font-semibold">comprehensive courses</span>,{" "}
          <span className="text-purple-400 font-semibold">expert guidance</span>, and{" "}
          <span className="text-pink-400 font-semibold">real-world projects</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
            <Play className="size-5 mr-2" />
            Start Learning Now
          </Button>
          <Button
            variant="outline"
            className="border-2 border-purple-400/50 text-purple-300 hover:bg-purple-400/10 px-8 py-4 text-lg font-semibold rounded-2xl bg-transparent backdrop-blur-sm"
          >
            <Globe className="size-5 mr-2" />
            Explore Roadmap
          </Button>
        </div>

        {/* Interactive Blockchain Visualization */}
        <div className="mb-16">
          <AdvancedBlockchainVisualization />
        </div>

        {/* Enhanced Search */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative group">
            <Input
              placeholder="Search: Blockchain, Cryptography, Bitcoin, Ethereum, Web3..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 text-lg pl-8 pr-20 bg-white/5 backdrop-blur-xl border-2 border-purple-500/20 text-white placeholder:text-gray-400 rounded-3xl focus:bg-white/10 focus:border-purple-400/40 transition-all duration-300 shadow-2xl"
            />
            <Button className="absolute right-2 top-2 h-12 px-8 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-2xl shadow-lg">
              <Search className="size-5" />
            </Button>

            {/* Search Suggestions */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 shadow-2xl">
                <div className="space-y-2">
                  {suggestions
                    .filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((suggestion) => (
                      <div
                        key={suggestion}
                        className="flex items-center space-x-3 p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors"
                      >
                        <Search className="size-4 text-gray-400" />
                        <span className="text-gray-300">{suggestion}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {[
            { name: "🚀 Quick Start Guide", href: "/getting-started", color: "text-cyan-400" },
            { name: "🗺️ Learning Roadmap", href: "/roadmap", color: "text-purple-400" },
            { name: "💡 Project Ideas", href: "/projects", color: "text-pink-400" },
            { name: "📚 Documentation", href: "/documentation", color: "text-yellow-400" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${link.color} hover:text-white underline flex items-center space-x-1 transition-colors duration-200`}
            >
              <span>{link.name}</span>
              <ArrowRight className="size-3" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
