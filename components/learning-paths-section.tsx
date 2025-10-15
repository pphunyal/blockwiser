"use client"

import { useState } from "react"
import { Code, Shield, TrendingUp, Sparkles, ArrowRight, Clock, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const learningPaths = [
  {
    id: "blockchain-fundamentals",
    title: "Blockchain Fundamentals",
    description: "Master the core concepts of blockchain technology from distributed ledgers to consensus mechanisms.",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    duration: "6 weeks",
    students: "15,420",
    rating: 4.9,
    level: "Beginner",
    topics: ["Distributed Ledgers", "Cryptographic Hashing", "Consensus Algorithms", "Network Architecture"],
    projects: 3,
  },
  {
    id: "bitcoin-protocol",
    title: "Bitcoin Protocol Development",
    description: "Deep dive into Bitcoin's architecture, transaction mechanics, and protocol development.",
    icon: Code,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    duration: "8 weeks",
    students: "12,850",
    rating: 4.8,
    level: "Intermediate",
    topics: ["Bitcoin Core", "Transaction Scripts", "Mining", "Lightning Network"],
    projects: 5,
  },
  {
    id: "ethereum-development",
    title: "Ethereum Development",
    description: "Build decentralized applications on Ethereum with Solidity and Web3 tools.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    duration: "10 weeks",
    students: "8,940",
    rating: 4.9,
    level: "Advanced",
    topics: ["Solidity", "Smart Contracts", "DApps", "EVM Architecture"],
    projects: 4,
  },
  {
    id: "cryptography",
    title: "Cryptography Essentials",
    description: "Learn the cryptographic foundations that power blockchain security and privacy.",
    icon: Sparkles,
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-500/10 to-pink-500/10",
    duration: "7 weeks",
    students: "11,230",
    rating: 4.7,
    level: "Intermediate",
    topics: ["Hash Functions", "Digital Signatures", "Public Key Crypto", "Zero Knowledge Proofs"],
    projects: 4,
  },
]

export function LearningPathsSection() {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-6">
            <Shield className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Structured Learning Paths</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From blockchain basics to advanced protocol development, our structured paths guide you through every step
            of your blockchain journey.
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {learningPaths.map((path) => {
            const Icon = path.icon
            return (
              <div
                key={path.id}
                className={`relative group bg-gradient-to-br ${path.bgGradient} backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden`}
                onMouseEnter={() => setHoveredPath(path.id)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${path.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${path.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{path.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span
                            className={`px-2 py-1 bg-gradient-to-r ${path.gradient} rounded-full text-white text-xs font-medium`}
                          >
                            {path.level}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{path.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{path.description}</p>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mb-6 text-sm">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{path.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <span>{path.rating}</span>
                    </div>
                    <div className="text-gray-400">{path.projects} projects</div>
                  </div>

                  {/* Topics */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">What you'll learn:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {path.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-center space-x-2 text-sm text-gray-300 bg-white/5 rounded-lg p-2"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${path.gradient} rounded-full`}></div>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-4">
                    <Link href={`/learning-path/${path.id}`} className="flex-1">
                      <Button
                        className={`w-full bg-gradient-to-r ${path.gradient} hover:shadow-2xl text-white py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300`}
                      >
                        Start Learning
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-white/20 text-gray-300 hover:bg-white/5 px-6 py-3 rounded-xl bg-transparent"
                    >
                      Preview
                    </Button>
                  </div>
                </div>

                {/* Hover Effect */}
                {hoveredPath === path.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Not sure where to start? Take our personalized assessment</p>
          <Button
            variant="outline"
            className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 px-8 py-3 rounded-xl bg-transparent backdrop-blur-sm"
          >
            Find My Perfect Path
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
