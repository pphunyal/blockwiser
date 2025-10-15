'use client';

import { ArrowLeft, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Fallback lesson data
const lessonData = {
  'blockchain-basics': {
    '1': {
      title: 'What is Blockchain?',
      duration: '15 min',
      difficulty: 'Beginner',
      content: 'Blockchain is a distributed ledger technology that enables secure and transparent transactions without a central authority.',
      nextLesson: '2',
      prevLesson: null,
    },
    '2': {
      title: 'Understanding Blocks',
      duration: '20 min',
      difficulty: 'Beginner',
      content: 'Each block in a blockchain contains a cryptographic hash of the previous block, creating an immutable chain of records.',
      nextLesson: '3',
      prevLesson: '1',
    },
  },
};

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string };
}) {
  const course = lessonData[params.courseId as keyof typeof lessonData];
  const lesson = course?.[params.lessonId as keyof typeof course];

  if (!lesson) {
    return (
      <div className='min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center'>
        <Card className='max-w-md'>
          <CardContent className='pt-6'>
            <div className='flex items-center space-x-3 text-red-600 mb-4'>
              <CheckCircle className='w-6 h-6' />
              <h2 className='text-lg font-semibold'>Lesson Not Found</h2>
            </div>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
              The lesson could not be loaded. Please return to the course.
            </p>
            <Link href={`/course/${params.courseId}`}>
              <Button>Back to Course</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      {/* Header */}
      <header className='border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-10'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <Link href={`/course/${params.courseId}`}>
                <Button variant='ghost' size='sm'>
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Back to Course
                </Button>
              </Link>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                  <span className='text-white font-bold text-sm'>BW</span>
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  BlockWiser
                </span>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <Badge variant='outline' className='flex items-center space-x-1'>
                <Clock className='w-3 h-3' />
                <span>{lesson.duration}</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className='container mx-auto px-4 py-8 max-w-4xl'>
        {/* Lesson Header */}
        <div className='mb-8'>
          <div className='flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2'>
            <Link href={`/course/${params.courseId}`} className='hover:text-blue-600'>
              {params.courseId}
            </Link>
            <span>/</span>
            <span>Lesson {params.lessonId}</span>
          </div>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
            {lesson.title}
          </h1>
        </div>

        {/* Lesson Content */}
        <Card className='mb-8'>
          <CardContent className='p-8'>
            <div className='prose prose-lg max-w-none dark:prose-invert'>
              <p className='text-gray-700 dark:text-gray-300'>
                {lesson.content}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          {lesson.prevLesson ? (
            <Link href={`/course/${params.courseId}/lesson/${lesson.prevLesson}`}>
              <Button variant='outline'>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Previous Lesson
              </Button>
            </Link>
          ) : (
            <div className='w-full sm:w-auto' />
          )}

          <Button>
            <CheckCircle className='w-4 h-4 mr-2' />
            Mark as Complete
          </Button>

          {lesson.nextLesson ? (
            <Link href={`/course/${params.courseId}/lesson/${lesson.nextLesson}`}>
              <Button>
                Next Lesson
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </Link>
          ) : (
            <div className='w-full sm:w-auto' />
          )}
        </div>
      </div>
    </div>
  );
}
