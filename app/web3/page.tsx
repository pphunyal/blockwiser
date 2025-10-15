import { ChevronRight, BookOpen, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Web3Tutorial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BW</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                BlockWiser
              </span>
            </Link>
            <div className="text-sm text-gray-400">
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Web3 Tutorial</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-80 bg-slate-900/50 backdrop-blur-md min-h-screen border-r border-cyan-500/20">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-xl text-white">Web3 Tutorial</h2>
                <p className="text-sm text-gray-400">Decentralized Web</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { name: "Web3 Intro", icon: Zap, active: true },
                { name: "What is Web3?", icon: BookOpen },
                { name: "Web3.js & Ethers", icon: Globe },
                { name: "Wallet Integration", icon: Shield },
                { name: "DApp Architecture", icon: Zap },
                { name: "IPFS & Storage", icon: Globe },
                { name: "Frontend Integration", icon: BookOpen },
                { name: "Web3 Security", icon: Shield },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={`/web3/${item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      item.active
                        ? "bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400 border border-green-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.active ? "bg-gradient-to-r from-green-500 to-cyan-500" : "bg-gray-700"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                    {item.active && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto"></div>}
                  </Link>
                )
              })}
            </nav>

            {/* Progress */}
            <div className="mt-8 p-4 bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl border border-green-500/20">
              <h3 className="text-white font-semibold mb-2">Your Progress</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-1/4"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Web3 Tutorial</h1>
                  <p className="text-gray-400">Build the decentralized web</p>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>What You Will Learn</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understand Web3 principles and architecture</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Learn to use Web3.js and Ethers.js libraries</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrate wallets and build DApp frontends</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Master decentralized storage with IPFS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">What is Web3?</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Web3 represents the{" "}
                  <span className="text-green-400 font-semibold">next evolution of the internet</span>, built on
                  blockchain technology and emphasizing{" "}
                  <span className="text-cyan-400 font-semibold">decentralization</span>, user ownership, and censorship
                  resistance. Unlike Web2, where data and services are controlled by centralized companies, Web3 gives
                  users control over their data and digital assets.
                </p>

                <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-6 mb-8 border border-green-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Web3 Connection Example</span>
                  </h3>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm border border-slate-700">
                    <div className="text-gray-500 mb-2">// Connect to Web3 with ethers.js</div>
                    <div className="text-green-400">
                      import {"{"} ethers {"}"} from <span className="text-yellow-400">'ethers'</span>;
                    </div>
                    <div className="text-cyan-400 mt-2">const provider = new ethers</div>
                    <div className="text-cyan-400">.providers.Web3Provider(window.ethereum);</div>
                    <div className="text-purple-400 mt-2">
                      const signer = <span className="text-cyan-400">await</span> provider.getSigner();
                    </div>
                    <div className="text-green-400 mt-2">
                      const address = <span className="text-cyan-400">await</span> signer.getAddress();
                    </div>
                    <div className="text-gray-500 mt-2">// User is now connected to blockchain!</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Web3 Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Decentralization",
                      desc: "No central control or single point of failure",
                      color: "from-green-400 to-cyan-400",
                    },
                    {
                      title: "User Ownership",
                      desc: "Users own their data and digital assets",
                      color: "from-cyan-400 to-green-400",
                    },
                    {
                      title: "Permissionless",
                      desc: "Open access without gatekeepers",
                      color: "from-green-400 to-cyan-400",
                    },
                    {
                      title: "Trustless",
                      desc: "Cryptographic verification instead of trust",
                      color: "from-cyan-400 to-green-400",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-gradient-to-r from-slate-800/50 to-green-900/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
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

                <div className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Pro Tip</span>
                  </h3>
                  <p className="text-cyan-200">
                    Web3 is more than just technology—it's a paradigm shift in how we interact with the internet. Master
                    wallet integration and smart contract interaction to build truly decentralized applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-cyan-500/20">
              <div></div>
              <Link href="/web3/what-is">
                <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 px-8 py-3 text-lg">
                  Next: What is Web3?
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
