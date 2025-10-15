"use client"

import { useState } from "react"
import { LinkIcon, Cpu, Code, Globe, Shield } from "lucide-react"
import Link from "next/link"

const technologies = [
  { name: "BLOCKCHAIN", icon: LinkIcon, color: "from-blue-400 to-cyan-400", path: "/blockchain" },
  { name: "BITCOIN", icon: Cpu, color: "from-yellow-400 to-orange-400", path: "/bitcoin" },
  { name: "ETHEREUM", icon: Code, color: "from-purple-400 to-pink-400", path: "/ethereum" },
  { name: "CRYPTOGRAPHY", icon: Shield, color: "from-red-400 to-pink-400", path: "/cryptography" },
  { name: "WEB3", icon: Globe, color: "from-green-400 to-cyan-400", path: "/web3" },
]

export function TechnologyNav() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <nav className="relative z-40 bg-gradient-to-r from-purple-950/80 via-slate-950/80 to-purple-950/80 backdrop-blur-xl border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 h-16">
          {technologies.map((tech) => {
            const Icon = tech.icon
            return (
              <Link
                key={tech.name}
                href={tech.path}
                className="flex items-center space-x-3 px-6 py-3 rounded-2xl hover:bg-white/5 text-gray-300 hover:text-white transition-all duration-300 whitespace-nowrap group relative"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className={`w-8 h-8 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-sm tracking-wide">{tech.name}</span>

                {hoveredTech === tech.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-lg whitespace-nowrap">
                    Learn {tech.name.toLowerCase()}
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
