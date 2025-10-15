import { ArrowLeft, Clock, Users, Star, Play, CheckCircle, BookOpen, Code, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const smartContractsCourse = {
  title: "Smart Contract Development",
  description:
    "Build decentralized applications with Solidity and learn advanced smart contract patterns and security best practices.",
  difficulty: "Intermediate",
  duration: "8 weeks",
  lessons: 24,
  rating: 4.8,
  students: 12850,
  instructor: "Alex Rodriguez",
  instructorTitle: "Senior Smart Contract Developer at OpenZeppelin",
  overview:
    "Master the art of smart contract development with hands-on projects and real-world examples. Learn Solidity from basics to advanced patterns.",
  whatYouLearn: [
    "Master Solidity programming language fundamentals",
    "Build and deploy smart contracts on Ethereum",
    "Implement advanced contract patterns and design principles",
    "Understand gas optimization techniques",
    "Learn smart contract security and common vulnerabilities",
    "Build complete DApps with frontend integration",
    "Test and debug smart contracts effectively",
    "Deploy to mainnet and manage contract upgrades",
  ],
  prerequisites: [
    "Completion of Blockchain Fundamentals course",
    "Basic programming experience (JavaScript/Python preferred)",
    "Understanding of object-oriented programming concepts",
    "Familiarity with command line interface",
  ],
  modules: [
    {
      id: 1,
      title: "Solidity Fundamentals",
      lessons: 5,
      duration: "90 min",
      topics: ["Solidity Syntax", "Data Types", "Functions", "Modifiers", "Events"],
    },
    {
      id: 2,
      title: "Contract Development",
      lessons: 4,
      duration: "75 min",
      topics: ["Contract Structure", "Inheritance", "Libraries", "Interfaces"],
    },
    {
      id: 3,
      title: "Advanced Patterns",
      lessons: 4,
      duration: "80 min",
      topics: ["Proxy Patterns", "Factory Pattern", "Registry Pattern", "Access Control"],
    },
    {
      id: 4,
      title: "Security & Best Practices",
      lessons: 5,
      duration: "100 min",
      topics: [
        "Common Vulnerabilities",
        "Security Auditing",
        "Testing Strategies",
        "Gas Optimization",
        "Formal Verification",
      ],
    },
    {
      id: 5,
      title: "DApp Development",
      lessons: 4,
      duration: "85 min",
      topics: ["Web3.js Integration", "Frontend Development", "MetaMask Integration", "IPFS Storage"],
    },
    {
      id: 6,
      title: "Deployment & Management",
      lessons: 2,
      duration: "60 min",
      topics: ["Testnet Deployment", "Mainnet Deployment", "Contract Verification", "Upgradeable Contracts"],
    },
  ],
  projects: [
    {
      name: "Token Contract",
      description: "Build an ERC-20 token with advanced features",
      difficulty: "Beginner",
    },
    {
      name: "NFT Marketplace",
      description: "Create a complete NFT trading platform",
      difficulty: "Intermediate",
    },
    {
      name: "DeFi Lending Protocol",
      description: "Build a lending and borrowing platform",
      difficulty: "Advanced",
    },
  ],
}

export default function SmartContractsPage() {
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
              <span className="text-purple-400">Smart Contract Development</span>
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {smartContractsCourse.difficulty}
                    </Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">{smartContractsCourse.title}</h1>
                    <p className="text-gray-300 text-lg">{smartContractsCourse.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>{smartContractsCourse.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span>{smartContractsCourse.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>{smartContractsCourse.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>{smartContractsCourse.rating} rating</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 text-lg font-semibold rounded-xl">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 px-8 py-3 text-lg rounded-xl bg-transparent"
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
                  {smartContractsCourse.whatYouLearn.map((item, index) => (
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
                  <Code className="w-6 h-6 text-purple-400" />
                  <span>Course Modules</span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {smartContractsCourse.modules.length} modules • {smartContractsCourse.lessons} lessons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {smartContractsCourse.modules.map((module) => (
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
                          <Badge key={index} variant="outline" className="border-purple-400/30 text-purple-300">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span>Hands-on Projects</span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Build real-world applications to solidify your learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {smartContractsCourse.projects.map((project, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                        <Badge
                          className={`${
                            project.difficulty === "Beginner"
                              ? "bg-green-500/20 text-green-300 border-green-500/30"
                              : project.difficulty === "Intermediate"
                                ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                : "bg-red-500/20 text-red-300 border-red-500/30"
                          }`}
                        >
                          {project.difficulty}
                        </Badge>
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
                  {smartContractsCourse.prerequisites.map((prereq, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AR</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{smartContractsCourse.instructor}</h3>
                      <p className="text-gray-400 text-sm">{smartContractsCourse.instructorTitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{smartContractsCourse.overview}</p>
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
                    <span className="text-green-400 font-semibold">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />

                  <div className="flex justify-between">
                    <span className="text-gray-400">Average Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-semibold">{smartContractsCourse.rating}</span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Students</span>
                    <span className="text-white font-semibold">{smartContractsCourse.students.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Tools & Technologies */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Solidity",
                      "Hardhat",
                      "Truffle",
                      "Web3.js",
                      "MetaMask",
                      "OpenZeppelin",
                      "Remix IDE",
                      "Ganache",
                    ].map((tool) => (
                      <Badge key={tool} variant="outline" className="border-purple-400/30 text-purple-300">
                        {tool}
                      </Badge>
                    ))}
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
