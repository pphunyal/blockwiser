import { ChevronRight, BookOpen, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EthereumTutorial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BW</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BlockWiser
              </span>
            </Link>
            <div className="text-sm text-gray-400">
              <Link href="/" className="hover:text-purple-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Ethereum Tutorial</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-80 bg-slate-900/50 backdrop-blur-md min-h-screen border-r border-purple-500/20">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-xl text-white">Ethereum Tutorial</h2>
                <p className="text-sm text-gray-400">Master Ethereum</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { name: "Ethereum Intro", icon: Zap, active: true },
                { name: "What is Ethereum?", icon: BookOpen },
                { name: "Smart Contracts", icon: Globe },
                { name: "Solidity Basics", icon: Shield },
                { name: "EVM Architecture", icon: Zap },
                { name: "Gas & Transactions", icon: Globe },
                { name: "DApp Development", icon: BookOpen },
                { name: "Ethereum 2.0", icon: Shield },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={`/ethereum/${item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      item.active
                        ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.active ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-700"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                    {item.active && <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse ml-auto"></div>}
                  </Link>
                )
              })}
            </nav>

            {/* Progress */}
            <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
              <h3 className="text-white font-semibold mb-2">Your Progress</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-1/4"></div>
                </div>
                <span className="text-sm text-gray-400">25%</span>
              </div>
              <p className="text-xs text-gray-400">2 of 8 lessons completed</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Ethereum Tutorial</h1>
                  <p className="text-gray-400">Learn to build decentralized applications on Ethereum</p>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>What You Will Learn</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understand Ethereum's architecture and the EVM</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Learn Solidity programming for smart contracts</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Build and deploy decentralized applications (DApps)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Explore Ethereum 2.0 and future developments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">What is Ethereum?</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Ethereum is a <span className="text-purple-400 font-semibold">decentralized platform</span> that
                  enables developers to build and deploy{" "}
                  <span className="text-pink-400 font-semibold">smart contracts</span> and decentralized applications
                  (DApps). Unlike Bitcoin, which is primarily a digital currency, Ethereum is a programmable blockchain
                  that serves as a foundation for a wide range of applications.
                </p>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-6 mb-8 border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Smart Contract Example</span>
                  </h3>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm border border-slate-700">
                    <div className="text-gray-500 mb-2">// Simple Ethereum smart contract</div>
                    <div className="text-purple-400">pragma solidity ^0.8.0;</div>
                    <div className="text-pink-400 mt-2">contract SimpleStorage {"{"}</div>
                    <div className="ml-4 text-cyan-400">uint256 public storedData;</div>
                    <div className="ml-4 text-yellow-400 mt-2">
                      function set(uint256 x) <span className="text-purple-400">public</span> {"{"}
                    </div>
                    <div className="ml-8 text-gray-300">storedData = x;</div>
                    <div className="ml-4 text-yellow-400">{"}"}</div>
                    <div className="text-pink-400">{"}"}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Smart Contracts",
                      desc: "Self-executing code on the blockchain",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      title: "Turing Complete",
                      desc: "Can execute any computational logic",
                      color: "from-pink-400 to-purple-400",
                    },
                    {
                      title: "EVM",
                      desc: "Ethereum Virtual Machine for execution",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      title: "DApps",
                      desc: "Decentralized applications platform",
                      color: "from-pink-400 to-purple-400",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                      >
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2 flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Pro Tip</span>
                  </h3>
                  <p className="text-pink-200">
                    Ethereum pioneered the concept of smart contracts, enabling trustless execution of complex logic on
                    the blockchain. It's the foundation for DeFi, NFTs, and countless innovative applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-purple-500/20">
              <div></div>
              <Link href="/ethereum/what-is">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 text-lg">
                  Next: What is Ethereum?
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
