import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  BookOpen,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const defiCourse = {
  title: "DeFi Protocol Development",
  description:
    "Create sophisticated DeFi protocols including DEXs, lending platforms, yield farming, and advanced financial instruments.",
  difficulty: "Advanced",
  duration: "10 weeks",
  lessons: 32,
  rating: 4.9,
  students: 8940,
  instructor: "Maria Santos",
  instructorTitle: "DeFi Architect at Uniswap Labs",
  overview:
    "Master the complexities of DeFi protocol development with real-world projects and cutting-edge techniques used by top DeFi platforms.",
  whatYouLearn: [
    "Design and implement automated market makers (AMMs)",
    "Build lending and borrowing protocols with liquidation mechanisms",
    "Create yield farming and liquidity mining systems",
    "Implement flash loans and arbitrage strategies",
    "Develop cross-chain DeFi protocols and bridges",
    "Master DeFi composability and protocol integration",
    "Understand tokenomics and governance mechanisms",
    "Build MEV-resistant protocols and fair launch mechanisms",
  ],
  prerequisites: [
    "Completion of Smart Contract Development course",
    "Strong understanding of Solidity and smart contract security",
    "Knowledge of financial markets and trading concepts",
    "Experience with DeFi protocols as a user",
    "Understanding of mathematical concepts (calculus, statistics)",
  ],
  modules: [
    {
      id: 1,
      title: "DeFi Fundamentals",
      lessons: 4,
      duration: "80 min",
      topics: ["DeFi Landscape", "Protocol Categories", "Composability", "Risk Management"],
    },
    {
      id: 2,
      title: "Automated Market Makers",
      lessons: 6,
      duration: "120 min",
      topics: [
        "Constant Product Formula",
        "Liquidity Pools",
        "Impermanent Loss",
        "Advanced AMM Models",
        "Price Oracles",
        "MEV Protection",
      ],
    },
    {
      id: 3,
      title: "Lending Protocols",
      lessons: 5,
      duration: "100 min",
      topics: [
        "Collateralized Lending",
        "Interest Rate Models",
        "Liquidation Mechanisms",
        "Risk Assessment",
        "Credit Delegation",
      ],
    },
    {
      id: 4,
      title: "Yield Farming & Staking",
      lessons: 4,
      duration: "85 min",
      topics: ["Liquidity Mining", "Reward Distribution", "Staking Mechanisms", "Governance Tokens"],
    },
    {
      id: 5,
      title: "Advanced DeFi Concepts",
      lessons: 6,
      duration: "130 min",
      topics: [
        "Flash Loans",
        "Arbitrage Strategies",
        "Synthetic Assets",
        "Options & Derivatives",
        "Insurance Protocols",
        "DAO Governance",
      ],
    },
    {
      id: 6,
      title: "Cross-chain & Scaling",
      lessons: 4,
      duration: "90 min",
      topics: ["Bridge Protocols", "Layer 2 Integration", "Multi-chain Strategies", "Interoperability"],
    },
    {
      id: 7,
      title: "Security & Auditing",
      lessons: 3,
      duration: "75 min",
      topics: ["DeFi Attack Vectors", "Economic Security", "Formal Verification"],
    },
  ],
  projects: [
    {
      name: "Uniswap V3 Clone",
      description: "Build a concentrated liquidity AMM with advanced features",
      difficulty: "Advanced",
      duration: "2 weeks",
    },
    {
      name: "Compound-style Lending",
      description: "Create a money market protocol with dynamic interest rates",
      difficulty: "Advanced",
      duration: "2 weeks",
    },
    {
      name: "Yield Aggregator",
      description: "Build an automated yield optimization protocol",
      difficulty: "Expert",
      duration: "3 weeks",
    },
  ],
}

export default function DeFiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-purple-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Tutorials</span>
              <span>/</span>
              <span className="text-green-400">DeFi Protocol Development</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-red-500/20 text-red-300 border-red-500/30">{defiCourse.difficulty}</Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">{defiCourse.title}</h1>
                    <p className="text-gray-300 text-lg">{defiCourse.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>{defiCourse.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span>{defiCourse.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>{defiCourse.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>{defiCourse.rating} rating</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8 py-3 text-lg font-semibold rounded-xl">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
                <Button
                  variant="outline"
                  className="border-green-400/50 text-green-300 hover:bg-green-400/10 px-8 py-3 text-lg rounded-xl bg-transparent"
                >
                  Preview Course
                </Button>
              </div>
            </div>

            {/* What You'll Learn */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>What You'll Learn</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {defiCourse.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  <span>Course Modules</span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {defiCourse.modules.length} modules • {defiCourse.lessons} lessons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {defiCourse.modules.map((module) => (
                    <div key={module.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">
                          Module {module.id}: {module.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{module.lessons} lessons</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="border-green-400/30 text-green-300">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advanced Projects */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span>Capstone Projects</span>
                </CardTitle>
                <CardDescription className="text-gray-400">Build production-ready DeFi protocols</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {defiCourse.projects.map((project, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge
                            className={`${
                              project.difficulty === "Advanced"
                                ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                : "bg-red-500/20 text-red-300 border-red-500/30"
                            }`}
                          >
                            {project.difficulty}
                          </Badge>
                          <Badge variant="outline" className="border-gray-400/30 text-gray-300">
                            {project.duration}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-orange-400" />
                  <span>Prerequisites</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {defiCourse.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Instructor */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Your Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">MS</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{defiCourse.instructor}</h3>
                      <p className="text-gray-400 text-sm">{defiCourse.instructorTitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{defiCourse.overview}</p>
                </CardContent>
              </Card>

              {/* Course Stats */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Course Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Completion Rate</span>
                    <span className="text-green-400 font-semibold">76%</span>
                  </div>
                  <Progress value={76} className="h-2" />

                  <div className="flex justify-between">
                    <span className="text-gray-400">Average Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-semibold">{defiCourse.rating}</span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Students</span>
                    <span className="text-white font-semibold">{defiCourse.students.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* DeFi Protocols */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Protocols Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Uniswap V3", type: "AMM", color: "text-pink-400" },
                      { name: "Compound", type: "Lending", color: "text-green-400" },
                      { name: "Aave", type: "Money Market", color: "text-blue-400" },
                      { name: "Curve", type: "Stableswap", color: "text-yellow-400" },
                      { name: "MakerDAO", type: "CDP", color: "text-purple-400" },
                    ].map((protocol, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-white font-medium">{protocol.name}</span>
                        <Badge variant="outline" className={`border-gray-400/30 ${protocol.color}`}>
                          {protocol.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Career Outcomes */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Career Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>DeFi Protocol Developer</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Quantitative Developer</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>DeFi Researcher</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Protocol Architect</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
