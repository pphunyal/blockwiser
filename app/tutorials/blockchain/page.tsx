import { ArrowLeft, Clock, Users, Star, Play, CheckCircle, BookOpen, Code, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const blockchainCourse = {
  title: "Blockchain Fundamentals",
  description: "Master the core concepts of blockchain technology from distributed ledgers to consensus mechanisms.",
  difficulty: "Beginner",
  duration: "6 weeks",
  lessons: 15,
  rating: 4.9,
  students: 15420,
  instructor: "Dr. Sarah Chen",
  instructorTitle: "Blockchain Researcher at MIT",
  overview:
    "This comprehensive course covers everything you need to know about blockchain technology. From basic concepts to advanced implementations, you'll gain a deep understanding of how blockchain works and why it's revolutionary.",
  whatYouLearn: [
    "Understand the fundamental principles of blockchain technology",
    "Learn about different types of blockchain networks",
    "Master cryptographic concepts including hashing and digital signatures",
    "Explore various consensus mechanisms and their trade-offs",
    "Analyze real-world blockchain implementations",
    "Build your first simple blockchain from scratch",
  ],
  prerequisites: [
    "Basic programming knowledge (any language)",
    "Understanding of basic computer science concepts",
    "No prior blockchain experience required",
  ],
  modules: [
    {
      id: 1,
      title: "Introduction to Blockchain",
      lessons: 3,
      duration: "45 min",
      topics: ["What is Blockchain?", "History and Evolution", "Key Benefits"],
    },
    {
      id: 2,
      title: "Cryptographic Foundations",
      lessons: 4,
      duration: "60 min",
      topics: ["Hash Functions", "Digital Signatures", "Merkle Trees", "Public Key Cryptography"],
    },
    {
      id: 3,
      title: "Blockchain Architecture",
      lessons: 3,
      duration: "50 min",
      topics: ["Block Structure", "Transaction Lifecycle", "Network Topology"],
    },
    {
      id: 4,
      title: "Consensus Mechanisms",
      lessons: 3,
      duration: "55 min",
      topics: ["Proof of Work", "Proof of Stake", "Other Consensus Algorithms"],
    },
    {
      id: 5,
      title: "Blockchain Networks",
      lessons: 2,
      duration: "40 min",
      topics: ["Public vs Private", "Permissioned Networks"],
    },
  ],
}

export default function BlockchainTutorialPage() {
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
              <span className="text-cyan-400">Blockchain Fundamentals</span>
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {blockchainCourse.difficulty}
                    </Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">{blockchainCourse.title}</h1>
                    <p className="text-gray-300 text-lg">{blockchainCourse.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>{blockchainCourse.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span>{blockchainCourse.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>{blockchainCourse.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>{blockchainCourse.rating} rating</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-3 text-lg font-semibold rounded-xl">
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
                  {blockchainCourse.whatYouLearn.map((item, index) => (
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
                  {blockchainCourse.modules.length} modules • {blockchainCourse.lessons} lessons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blockchainCourse.modules.map((module) => (
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
                  {blockchainCourse.prerequisites.map((prereq, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SC</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{blockchainCourse.instructor}</h3>
                      <p className="text-gray-400 text-sm">{blockchainCourse.instructorTitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{blockchainCourse.overview}</p>
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
                    <span className="text-green-400 font-semibold">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />

                  <div className="flex justify-between">
                    <span className="text-gray-400">Average Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-semibold">{blockchainCourse.rating}</span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Students</span>
                    <span className="text-white font-semibold">{blockchainCourse.students.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Courses */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Related Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Smart Contracts", level: "Intermediate", color: "from-purple-500 to-pink-500" },
                    { name: "DeFi Development", level: "Advanced", color: "from-green-500 to-emerald-500" },
                    { name: "NFT Creation", level: "Intermediate", color: "from-pink-500 to-rose-500" },
                  ].map((course, index) => (
                    <Link key={index} href={`/tutorials/${course.name.toLowerCase().replace(" ", "-")}`}>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center`}
                          >
                            <BookOpen className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{course.name}</h4>
                            <p className="text-gray-400 text-sm">{course.level}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
