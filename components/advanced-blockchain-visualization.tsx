"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { LinkIcon, Zap, Shield, Globe, Activity, Info } from "lucide-react"

interface Block {
  id: number
  hash: string
  previousHash: string
  timestamp: string
  data: string
  nonce: number
  difficulty: number
  transactions: number
  status: "pending" | "mining" | "confirmed"
}

export function AdvancedBlockchainVisualization() {
  const [blocks, setBlocks] = useState<Block[]>([
    {
      id: 0,
      hash: "000abc123",
      previousHash: "0000000000",
      timestamp: "Genesis",
      data: "Genesis Block",
      nonce: 0,
      difficulty: 4,
      transactions: 0,
      status: "confirmed",
    },
  ])
  const [isAnimating, setIsAnimating] = useState(false)
  const [networkStats, setNetworkStats] = useState({
    hashRate: 150.5,
    difficulty: 4,
    blockTime: 10,
    totalBlocks: 1,
    activeNodes: 8547,
  })

  const intervalRef = useRef<NodeJS.Timeout>()

  const addBlock = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setBlocks((prevBlocks) => {
      const newBlock: Block = {
        id: prevBlocks.length,
        hash: `000${Math.random().toString(36).substr(2, 6)}`,
        previousHash: prevBlocks[prevBlocks.length - 1].hash,
        timestamp: new Date().toLocaleTimeString(),
        data: `Block ${prevBlocks.length}`,
        nonce: Math.floor(Math.random() * 100000),
        difficulty: 4,
        transactions: Math.floor(Math.random() * 10) + 1,
        status: "pending",
      }

      return [...prevBlocks, newBlock]
    })

    // Simulate mining process
    setTimeout(() => {
      setBlocks((prev) =>
        prev.map((block, index) => (index === prev.length - 1 ? { ...block, status: "mining" } : block)),
      )
    }, 500)

    // Confirm block
    setTimeout(() => {
      setBlocks((prev) =>
        prev.map((block, index) => (index === prev.length - 1 ? { ...block, status: "confirmed" } : block)),
      )
      setNetworkStats((prev) => ({
        ...prev,
        totalBlocks: prev.totalBlocks + 1,
        hashRate: prev.hashRate + Math.random() * 10 - 5,
        activeNodes: prev.activeNodes + Math.floor(Math.random() * 20) - 10,
      }))
      setIsAnimating(false)
    }, 2000)
  }, [isAnimating])

  useEffect(() => {
    intervalRef.current = setInterval(addBlock, 5000)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [addBlock])

  const getBlockColor = (status: Block["status"]) => {
    switch (status) {
      case "pending":
        return "from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
      case "mining":
        return "from-blue-500/20 to-purple-500/20 border-blue-500/30"
      case "confirmed":
        return "from-green-500/20 to-cyan-500/20 border-green-500/30"
    }
  }

  const getStatusIcon = (status: Block["status"]) => {
    switch (status) {
      case "pending":
        return <Zap className="size-4 text-yellow-400 animate-pulse" />
      case "mining":
        return <Shield className="size-4 text-blue-400 animate-spin" />
      case "confirmed":
        return <LinkIcon className="size-4 text-green-400" />
    }
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8 shadow-2xl">
      {/* Simulation Notice */}
      <div className="mb-6 flex items-start space-x-3 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
        <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-blue-400 font-semibold mb-1">Educational Simulation</h4>
          <p className="text-gray-400 text-sm">
            This is a simplified visualization for learning purposes. Real blockchain networks have more complex
            validation and consensus mechanisms.
          </p>
        </div>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          {
            label: "Hash Rate",
            value: `${networkStats.hashRate.toFixed(1)} TH/s`,
            icon: Zap,
            color: "text-yellow-400",
          },
          { label: "Difficulty", value: networkStats.difficulty.toString(), icon: Shield, color: "text-blue-400" },
          { label: "Block Time", value: `${networkStats.blockTime}s`, icon: Globe, color: "text-green-400" },
          {
            label: "Total Blocks",
            value: networkStats.totalBlocks.toString(),
            icon: LinkIcon,
            color: "text-purple-400",
          },
          {
            label: "Active Nodes",
            value: networkStats.activeNodes.toLocaleString(),
            icon: Activity,
            color: "text-cyan-400",
          },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <Icon className={`size-4 ${stat.color}`} />
                <span className="text-xs text-gray-400 font-medium">{stat.label}</span>
              </div>
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          )
        })}
      </div>

      {/* Blockchain Visualization */}
      <div className="relative overflow-x-auto pb-4">
        <div className="flex items-center space-x-6 min-w-max">
          {blocks.slice(-5).map((block, index) => (
            <div key={block.id} className="flex items-center">
              <div className="relative group">
                <div
                  className={`w-40 h-32 bg-gradient-to-br ${getBlockColor(block.status)} backdrop-blur-sm border rounded-2xl p-4 hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-3">
                    {getStatusIcon(block.status)}
                    <span className="text-xs text-gray-400 font-mono">#{block.id}</span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="text-gray-300 font-mono truncate">Hash: {block.hash}</div>
                    <div className="text-gray-400 truncate">{block.data}</div>
                    <div className="flex justify-between text-gray-500">
                      <span>Txs: {block.transactions}</span>
                      <span>Nonce: {block.nonce}</span>
                    </div>
                  </div>

                  {/* Mining Animation */}
                  {block.status === "mining" && (
                    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl animate-pulse">
                      <div className="absolute top-2 right-2 size-2 bg-blue-400 rounded-full animate-ping"></div>
                    </div>
                  )}
                </div>

                {/* Enhanced Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-black/90 backdrop-blur-sm text-white text-xs rounded-xl p-4 whitespace-nowrap border border-purple-500/20 shadow-2xl">
                    <div className="space-y-1">
                      <div className="font-semibold text-cyan-400">Block #{block.id}</div>
                      <div>Hash: {block.hash}</div>
                      <div>Previous: {block.previousHash}</div>
                      <div>Time: {block.timestamp}</div>
                      <div>Nonce: {block.nonce}</div>
                      <div>Difficulty: {block.difficulty}</div>
                      <div>
                        Status: <span className="capitalize text-green-400">{block.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {index < blocks.slice(-5).length - 1 && (
                <div className="flex items-center mx-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full">
                    <div className="w-full h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="size-3 bg-cyan-400 rounded-full animate-ping ml-2"></div>
                </div>
              )}
            </div>
          ))}

          {isAnimating && (
            <div className="flex items-center">
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse mx-4"></div>
              <div className="w-40 h-32 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl animate-pulse shadow-lg"></div>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={addBlock}
          disabled={isAnimating}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 text-white rounded-2xl hover:from-purple-600 hover:via-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 font-semibold shadow-lg shadow-purple-500/25 transform hover:scale-105"
        >
          {isAnimating ? "Mining Block..." : "Mine New Block"}
        </button>
      </div>
    </div>
  )
}
