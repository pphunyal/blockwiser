import { ChevronRight, BookOpen, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CryptographyTutorial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-red-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BW</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                BlockWiser
              </span>
            </Link>
            <div className="text-sm text-gray-400">
              <Link href="/" className="hover:text-red-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Cryptography Tutorial</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-80 bg-slate-900/50 backdrop-blur-md min-h-screen border-r border-red-500/20">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-xl text-white">Cryptography</h2>
                <p className="text-sm text-gray-400">Security Foundations</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { name: "Crypto Intro", icon: Zap, active: true },
                { name: "Hash Functions", icon: BookOpen },
                { name: "Digital Signatures", icon: Shield },
                { name: "Public Key Crypto", icon: Globe },
                { name: "Encryption", icon: Zap },
                { name: "Merkle Trees", icon: Globe },
                { name: "Zero Knowledge", icon: Shield },
                { name: "Crypto Security", icon: BookOpen },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={`/cryptography/${item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      item.active
                        ? "bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border border-red-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.active ? "bg-gradient-to-r from-red-500 to-pink-500" : "bg-gray-700"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                    {item.active && <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse ml-auto"></div>}
                  </Link>
                )
              })}
            </nav>

            {/* Progress */}
            <div className="mt-8 p-4 bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-xl border border-red-500/20">
              <h3 className="text-white font-semibold mb-2">Your Progress</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-400 to-pink-400 h-2 rounded-full w-1/4"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Cryptography Tutorial</h1>
                  <p className="text-gray-400">Master the security foundations of blockchain</p>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-red-400 mb-4 flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>What You Will Learn</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understand cryptographic hash functions and their properties</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Learn digital signatures and public key cryptography</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Master encryption techniques and their applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Explore zero-knowledge proofs and advanced concepts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Introduction to Cryptography</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Cryptography is the{" "}
                  <span className="text-red-400 font-semibold">science of secure communication</span> in the presence of
                  adversaries. It forms the{" "}
                  <span className="text-pink-400 font-semibold">foundation of blockchain security</span>, enabling
                  trust, privacy, and integrity in decentralized systems without relying on a central authority.
                </p>

                <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-6 mb-8 border border-red-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Hash Function Example</span>
                  </h3>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm border border-slate-700">
                    <div className="text-gray-500 mb-2">// SHA-256 Hash Function</div>
                    <div className="text-red-400">
                      Input: <span className="text-green-400">"Hello, Blockchain!"</span>
                    </div>
                    <div className="text-pink-400 mt-2">Output (Hash):</div>
                    <div className="text-cyan-400 break-all">
                      a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a
                    </div>
                    <div className="text-gray-500 mt-2">// Same input always produces the same output</div>
                    <div className="text-gray-500">// Even tiny changes create completely different hashes</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Core Cryptographic Concepts</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Hash Functions",
                      desc: "One-way functions for data integrity",
                      color: "from-red-400 to-pink-400",
                    },
                    {
                      title: "Digital Signatures",
                      desc: "Prove authenticity and ownership",
                      color: "from-pink-400 to-red-400",
                    },
                    {
                      title: "Public Key Crypto",
                      desc: "Asymmetric encryption schemes",
                      color: "from-red-400 to-pink-400",
                    },
                    {
                      title: "Zero Knowledge",
                      desc: "Prove knowledge without revealing it",
                      color: "from-pink-400 to-red-400",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-gradient-to-r from-slate-800/50 to-red-900/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/20"
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
                    Cryptography is essential for blockchain security. Understanding hash functions, digital signatures,
                    and encryption is crucial for building secure decentralized applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-red-500/20">
              <div></div>
              <Link href="/cryptography/hash-functions">
                <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-8 py-3 text-lg">
                  Next: Hash Functions
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
