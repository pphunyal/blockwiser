import { ChevronRight, BookOpen, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlockchainTutorial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BW</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BlockWiser
              </span>
            </Link>
            <div className="text-sm text-gray-400">
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Blockchain Tutorial</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-80 bg-gradient-to-b from-slate-800/50 to-purple-900/30 backdrop-blur-md min-h-screen border-r border-purple-500/20">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-xl text-white">Blockchain Tutorial</h2>
                <p className="text-sm text-gray-400">Master the fundamentals</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { name: "Blockchain Intro", icon: Zap, active: true },
                { name: "What is Blockchain?", icon: BookOpen },
                { name: "How It Works", icon: Globe },
                { name: "Blocks & Hashing", icon: Shield },
                { name: "Consensus Mechanisms", icon: Zap },
                { name: "Mining & Validation", icon: Globe },
                { name: "Transactions", icon: BookOpen },
                { name: "Network Types", icon: Shield },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={`/blockchain/${item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      item.active
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.active ? "bg-gradient-to-r from-cyan-500 to-purple-500" : "bg-gray-700"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                    {item.active && <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse ml-auto"></div>}
                  </Link>
                )
              })}
            </nav>

            {/* Progress */}
            <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
              <h3 className="text-white font-semibold mb-2">Your Progress</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-1/4"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Blockchain Tutorial</h1>
                  <p className="text-gray-400">Learn the fundamentals of distributed ledger technology</p>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>What You Will Learn</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understand blockchain fundamentals and architecture</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Learn about cryptographic hashing and digital signatures</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Explore consensus mechanisms and mining</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Build your first blockchain application</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">What is Blockchain?</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Blockchain is a <span className="text-cyan-400 font-semibold">distributed ledger technology</span>{" "}
                  that maintains a continuously growing list of records, called blocks, which are linked and secured
                  using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and
                  transaction data.
                </p>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 mb-8 border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Interactive Example</span>
                  </h3>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm border border-slate-700">
                    <div className="text-gray-500 mb-2">// Simple blockchain structure</div>
                    <div className="text-purple-400">{"{"}</div>
                    <div className="ml-4 text-cyan-400">
                      "block": <span className="text-yellow-400">1</span>,
                    </div>
                    <div className="ml-4 text-cyan-400">
                      "timestamp": <span className="text-green-400">"2024-01-15T10:30:00Z"</span>,
                    </div>
                    <div className="ml-4 text-cyan-400">
                      "data": <span className="text-green-400">"First transaction"</span>,
                    </div>
                    <div className="ml-4 text-cyan-400">
                      "previousHash": <span className="text-green-400">"0000000000000000"</span>,
                    </div>
                    <div className="ml-4 text-cyan-400">
                      "hash": <span className="text-green-400">"000abc123def456..."</span>
                    </div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Decentralization",
                      desc: "No single point of control",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      title: "Transparency",
                      desc: "All transactions are visible",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      title: "Immutability",
                      desc: "Data cannot be altered once confirmed",
                      color: "from-green-400 to-cyan-400",
                    },
                    { title: "Security", desc: "Cryptographic protection", color: "from-red-400 to-pink-400" },
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

                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Pro Tip</span>
                  </h3>
                  <p className="text-yellow-200">
                    Blockchain technology is the foundation for cryptocurrencies like Bitcoin and Ethereum, but its
                    applications extend far beyond digital currencies into supply chain, healthcare, voting systems, and
                    more.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-purple-500/20">
              <div></div>
              <Link href="/blockchain/what-is">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-3 text-lg">
                  Next: What is Blockchain?
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
