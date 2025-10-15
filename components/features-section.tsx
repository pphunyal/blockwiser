"use client"

import { Code, BookOpen, Zap, FileCode, CheckCircle, Terminal } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Interactive Code Editor",
    description: "Write, test, and experiment with blockchain code directly in your browser with instant feedback.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    description: "Follow carefully designed curricula that take you from beginner to advanced blockchain development.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Real-time Visualizations",
    description: "See blockchain concepts come to life with interactive visualizations and live network simulations.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: FileCode,
    title: "Hands-on Projects",
    description: "Build real-world applications with step-by-step guidance and instant code validation.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: CheckCircle,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed progress tracking and personalized recommendations.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Terminal,
    title: "Practical Exercises",
    description: "Reinforce learning with coding challenges, quizzes, and practical exercises after each lesson.",
    gradient: "from-red-500 to-pink-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Platform Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learn Blockchain
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              The Right Way
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master blockchain development with interactive lessons, real-world projects, and comprehensive learning
            resources.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-gradient-to-br from-slate-800/30 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 p-8 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
