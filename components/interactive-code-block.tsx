"use client"

import { useState } from "react"
import { Copy, Play, Eye, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface InteractiveCodeBlockProps {
  title: string
  code: string
  language: string
  gradient?: string
}

export function InteractiveCodeBlock({
  title,
  code,
  language,
  gradient = "from-purple-500 to-cyan-500",
}: InteractiveCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [output, setOutput] = useState<string | null>(null)

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runCode = () => {
    setIsRunning(true)
    setOutput("Executing code...")

    setTimeout(() => {
      setOutput(
        "✅ Code executed successfully!\n📊 Gas used: 21,000\n⏱️ Execution time: 0.5s\n🔗 Transaction hash: 0xabc123...",
      )
      setIsRunning(false)
    }, 2000)
  }

  const formatCode = (code: string, language: string) => {
    const lines = code.split("\n")
    return lines.map((line, index) => {
      let formattedLine = line

      if (language === "json") {
        formattedLine = line
          .replace(/"([^"]+)":/g, '<span class="text-cyan-400">"$1":</span>')
          .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
          .replace(/: (\d+\.?\d*)/g, ': <span class="text-yellow-400">$1</span>')
          .replace(/[{}]/g, '<span class="text-purple-400">$&</span>')
          .replace(/[[\]]/g, '<span class="text-pink-400">$&</span>')
      } else if (language === "solidity") {
        formattedLine = line
          .replace(
            /\b(pragma|contract|function|mapping|require|emit|external|public|returns|import|struct|event|modifier|constructor)\b/g,
            '<span class="text-purple-400 font-semibold">$1</span>',
          )
          .replace(/\b(address|uint256|string|bool|bytes32)\b/g, '<span class="text-cyan-400">$1</span>')
          .replace(/"([^"]+)"/g, '<span class="text-green-400">"$1"</span>')
          .replace(/\/\/.*$/g, '<span class="text-gray-500 italic">$&</span>')
          .replace(/\b(msg\.sender|block\.timestamp|tx\.origin)\b/g, '<span class="text-yellow-400">$1</span>')
      }

      return (
        <div key={index} className="flex hover:bg-white/5 transition-colors duration-200">
          <span className="text-gray-500 text-xs w-10 flex-shrink-0 text-right mr-4 select-none font-mono">
            {index + 1}
          </span>
          <span
            className="flex-1 font-mono text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedLine || "&nbsp;" }}
          />
        </div>
      )
    })
  }

  return (
    <div className="relative group">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 p-4 bg-black/20 backdrop-blur-sm rounded-t-2xl border border-purple-500/20">
        <h3 className="text-lg font-bold text-white flex items-center space-x-3">
          <div className={`w-3 h-3 bg-gradient-to-r ${gradient} rounded-full animate-pulse`}></div>
          <span>{title}</span>
          <div className="px-2 py-1 bg-purple-500/20 rounded-md text-xs text-purple-300 font-mono">
            {language.toUpperCase()}
          </div>
        </h3>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={runCode}
            disabled={isRunning}
            className="text-green-400 hover:text-green-300 hover:bg-green-400/10 transition-all duration-200"
          >
            <Play className="w-4 h-4 mr-1" />
            {isRunning ? "Running..." : "Run"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 transition-all duration-200"
          >
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyCode}
            className="text-gray-400 hover:text-gray-300 hover:bg-gray-400/10 transition-all duration-200"
          >
            <Copy className="w-4 h-4 mr-1" />
            {copied ? "Copied!" : "Copy"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 transition-all duration-200"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Code Block */}
      <div
        className={`bg-slate-950/90 backdrop-blur-sm rounded-b-2xl border-x border-b border-purple-500/20 font-mono text-sm overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-none" : "max-h-96"}`}
      >
        <div className="p-6 overflow-x-auto">
          <div className="space-y-1 min-w-max">{formatCode(code, language)}</div>
        </div>
      </div>

      {/* Output Panel */}
      {output && (
        <div className="mt-4 bg-black/40 backdrop-blur-sm rounded-2xl border border-green-500/20 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold text-sm">Output</span>
          </div>
          <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono">{output}</pre>
        </div>
      )}

      {/* Execution Overlay */}
      {isRunning && (
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
              <div>
                <div className="text-green-400 font-semibold">Executing Smart Contract</div>
                <div className="text-gray-400 text-sm">Compiling and deploying...</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
