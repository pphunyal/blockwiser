"use client"

import { useState } from "react"
import { type LucideIcon, Play, Eye, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveCodeBlock } from "@/components/interactive-code-block"

interface LearningSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  gradient: string
  code: string
  language: string
  features: string[]
  reverse?: boolean
}

export function LearningSection({
  id,
  title,
  subtitle,
  description,
  icon: Icon,
  gradient,
  code,
  language,
  features,
  reverse = false,
}: LearningSectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`mb-20 ${reverse ? "lg:flex-row-reverse" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gradient-to-br from-slate-800/30 via-purple-900/20 to-slate-800/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500/20 transition-all duration-500">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Content Side */}
          <div className="p-12 lg:p-16 relative">
            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-200"></div>
            </div>

            {/* Header */}
            <div className="flex items-center space-x-6 mb-8">
              <div
                className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-3xl flex items-center justify-center shadow-2xl transform transition-all duration-300 ${isHovered ? "scale-110 rotate-3" : ""}`}
                style={{
                  boxShadow: isHovered ? `0 0 40px ${gradient.split(" ")[1]}40` : undefined,
                }}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">{title}</h2>
                <p className={`text-xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">{description}</p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle
                    className={`w-5 h-5 bg-gradient-to-r ${gradient} rounded-full p-1 text-white flex-shrink-0`}
                  />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                className={`w-full bg-gradient-to-r ${gradient} hover:shadow-2xl text-white py-4 text-lg rounded-2xl font-bold transform hover:scale-105 transition-all duration-300`}
              >
                <Play className="w-5 h-5 mr-3" />
                Start Learning {title}
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 py-3 text-base rounded-xl font-semibold bg-transparent backdrop-blur-sm"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-400/30 text-purple-400 hover:bg-purple-400/10 py-3 text-base rounded-xl font-semibold bg-transparent backdrop-blur-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
              </div>
            </div>
          </div>

          {/* Code Side */}
          <div className="bg-gradient-to-br from-slate-950/80 via-purple-950/40 to-slate-950/80 p-8 lg:p-12">
            <InteractiveCodeBlock title={`${title} Example`} code={code} language={language} gradient={gradient} />
          </div>
        </div>
      </div>
    </div>
  )
}
