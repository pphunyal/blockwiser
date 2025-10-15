import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  BookOpen,
  Sparkles,
  Shield,
  Zap,
  ImageIcon,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const nftCourse = {
  title: "NFT Ecosystem Development",
  description:
    "Build complete NFT marketplaces, gaming assets, and innovative digital collectibles with advanced features and integrations.",
  difficulty: "Intermediate",
  duration: "7 weeks",
  lessons: 28,
  rating: 4.7,
  students: 11230,
  instructor: "David Kim",
  instructorTitle: "NFT Technical Lead at OpenSea",
  overview:
    "Master the complete NFT ecosystem from smart contract development to marketplace creation and gaming integration.",
  whatYouLearn: [
    "Implement ERC-721 and ERC-1155 token standards",
    "Build NFT marketplaces with bidding and auctions",
    "Create dynamic and generative NFT collections",
    "Integrate IPFS and decentralized storage solutions",
    "Develop NFT gaming mechanics and utilities",
    "Implement royalty systems and creator economics",
    "Build cross-chain NFT bridges and compatibility",
    "Create NFT analytics and rarity tracking systems",
  ],
  prerequisites: [
    "Completion of Smart Contract Development course",
    "Understanding of ERC token standards",
    "Basic knowledge of frontend development (React/JavaScript)",
    "Familiarity with IPFS and decentralized storage concepts",
  ],
  modules: [
    {
      id: 1,
      title: "NFT Standards & Basics",
      lessons: 4,
      duration: "70 min",
      topics: ["ERC-721 Standard", "ERC-1155 Multi-Token", "Metadata Standards", "Token URI Design"],
    },
    {
      id: 2,
      title: "Smart Contract Development",
      lessons: 5,
      duration: "90 min",
      topics: [
        "Minting Mechanisms",
        "Access Controls",
        "Royalty Implementation",
        "Batch Operations",
        "Gas Optimization",
      ],
    },
    {
      id: 3,
      title: "Marketplace Development",
      lessons: 6,
      duration: "110 min",
      topics: [
        "Listing & Trading",
        "Auction Systems",
        "Offer Management",
        "Fee Structures",
        "Escrow Mechanisms",
        "Multi-chain Support",
      ],
    },
    {
      id: 4,
      title: "Metadata & Storage",
      lessons: 4,
      duration: "80 min",
      topics: ["IPFS Integration", "Arweave Storage", "Dynamic Metadata", "Reveal Mechanisms"],
    },
    {
      id: 5,
      title: "Advanced Features",
      lessons: 5,
      duration: "95 min",
      topics: ["Generative Art", "Utility Integration", "Gaming Mechanics", "Staking Systems", "Fractionalization"],
    },
    {
      id: 6,
      title: "Analytics & Tools",
      lessons: 4,
      duration: "75 min",
      topics: ["Rarity Calculation", "Price Analytics", "Collection Insights", "API Development"],
    },
  ],
  projects: [
    {
      name: "Generative Art Collection",
      description: "Create a 10,000 piece generative NFT collection with rarity traits",
      difficulty: "Intermediate",
      duration: "1 week",
    },
    {
      name: "NFT Marketplace",
      description: "Build a full-featured marketplace with auctions and offers",
      difficulty: "Advanced",
      duration: "2 weeks",
    },
    {
      name: "Gaming NFT Integration",
      description: "Develop NFTs with in-game utility and mechanics",
      difficulty: "Advanced",
      duration: "1.5 weeks",
    },
  ],
}

export default function NFTPage() {
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
              <span className="text-pink-400">NFT Ecosystem Development</span>
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
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                      {nftCourse.difficulty}
                    </Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">{nftCourse.title}</h1>
                    <p className="text-gray-300 text-lg">{nftCourse.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>{nftCourse.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span>{nftCourse.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>{nftCourse.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>{nftCourse.rating} rating</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-8 py-3 text-lg font-semibold rounded-xl">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-400/50 text-pink-300 hover:bg-pink-400/10 px-8 py-3 text-lg rounded-xl bg-transparent"
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
                  {nftCourse.whatYouLearn.map((item, index) => (
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
                  <ImageIcon className="w-6 h-6 text-pink-400" />
                  <span>Course Modules</span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {nftCourse.modules.length} modules • {nftCourse.lessons} lessons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nftCourse.modules.map((module) => (
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
                          <Badge key={index} variant="outline" className="border-pink-400/30 text-pink-300">
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
                  <span>Creative Projects</span>
                </CardTitle>
                <CardDescription className="text-gray-400">Build real NFT projects and collections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nftCourse.projects.map((project, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge
                            className={`${
                              project.difficulty === "Intermediate"
                                ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                : "bg-orange-500/20 text-orange-300 border-orange-500/30"
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
                  {nftCourse.prerequisites.map((prereq, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">DK</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{nftCourse.instructor}</h3>
                      <p className="text-gray-400 text-sm">{nftCourse.instructorTitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{nftCourse.overview}</p>
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
                    <span className="text-green-400 font-semibold">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />

                  <div className="flex justify-between">
                    <span className="text-gray-400">Average Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-semibold">{nftCourse.rating}</span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Students</span>
                    <span className="text-white font-semibold">{nftCourse.students.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* NFT Standards */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Standards Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "ERC-721", description: "Non-Fungible Tokens", color: "text-blue-400" },
                      { name: "ERC-1155", description: "Multi-Token Standard", color: "text-purple-400" },
                      { name: "ERC-2981", description: "NFT Royalty Standard", color: "text-green-400" },
                      { name: "ERC-4907", description: "Rental NFTs", color: "text-yellow-400" },
                    ].map((standard, index) => (
                      <div key={index} className="p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-semibold ${standard.color}`}>{standard.name}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{standard.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools & Platforms */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Tools & Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["OpenSea", "IPFS", "Pinata", "Arweave", "Moralis", "Alchemy", "The Graph", "Chainlink VRF"].map(
                      (tool) => (
                        <Badge key={tool} variant="outline" className="border-pink-400/30 text-pink-300">
                          {tool}
                        </Badge>
                      ),
                    )}
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
