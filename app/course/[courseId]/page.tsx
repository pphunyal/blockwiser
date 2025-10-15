import { ArrowLeft, BookOpen, Clock, Users, Star, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const courseData = {
  "blockchain-basics": {
    title: "Blockchain Fundamentals",
    description: "Learn the core concepts of blockchain technology, from distributed ledgers to consensus mechanisms.",
    difficulty: "Beginner",
    duration: "4 hours",
    lessons: 12,
    rating: 4.8,
    students: 2340,
    progress: 75,
    lessons_list: [
      { id: 1, title: "What is Blockchain?", duration: "15 min", completed: true },
      { id: 2, title: "Distributed Ledger Technology", duration: "20 min", completed: true },
      { id: 3, title: "Cryptographic Hash Functions", duration: "25 min", completed: true },
      { id: 4, title: "Digital Signatures", duration: "18 min", completed: true },
      { id: 5, title: "Consensus Mechanisms", duration: "30 min", completed: true },
      { id: 6, title: "Proof of Work vs Proof of Stake", duration: "22 min", completed: true },
      { id: 7, title: "Bitcoin Architecture", duration: "28 min", completed: true },
      { id: 8, title: "Ethereum and Smart Contracts", duration: "25 min", completed: true },
      { id: 9, title: "Blockchain Networks", duration: "20 min", completed: true },
      { id: 10, title: "Scalability Solutions", duration: "30 min", completed: false, current: true },
      { id: 11, title: "Security Considerations", duration: "25 min", completed: false },
      { id: 12, title: "Future of Blockchain", duration: "20 min", completed: false },
    ],
  },
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = courseData[params.courseId as keyof typeof courseData]

  if (!course) {
    return <div>Course not found</div>
  }

  const completedLessons = course.lessons_list.filter((lesson) => lesson.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Courses
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BW</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BlockWiser
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge
                className="mb-4"
                variant={
                  course.difficulty === "Beginner"
                    ? "secondary"
                    : course.difficulty === "Intermediate"
                      ? "default"
                      : "destructive"
                }
              >
                {course.difficulty}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating} rating</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Course Progress</span>
                  <span>
                    {completedLessons}/{course.lessons} lessons completed
                  </span>
                </div>
                <Progress value={(completedLessons / course.lessons) * 100} className="h-3" />
              </div>
            </div>

            {/* Course Overview */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Understand the fundamental concepts of blockchain technology</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Learn about different consensus mechanisms and their trade-offs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Explore Bitcoin and Ethereum architectures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Understand scalability solutions and security considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Lessons Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm sticky top-4">
              <CardHeader>
                <CardTitle>Course Lessons</CardTitle>
                <CardDescription>
                  {completedLessons} of {course.lessons} lessons completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {course.lessons_list.map((lesson) => (
                    <Link key={lesson.id} href={`/course/${params.courseId}/lesson/${lesson.id}`} className="block">
                      <div
                        className={`p-3 rounded-lg border transition-colors ${
                          lesson.current
                            ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
                            : lesson.completed
                              ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                              : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {lesson.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : lesson.current ? (
                              <Play className="w-5 h-5 text-blue-500" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                            )}
                            <div>
                              <div className="font-medium text-sm">{lesson.title}</div>
                              <div className="text-xs text-gray-500">{lesson.duration}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
