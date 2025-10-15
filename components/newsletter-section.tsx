'use client';

import { useState, useTransition } from 'react';
import { Mail, Send, CheckCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

async function subscribeAction(prevState: any, formData: FormData) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const email = formData.get('email');
  return {
    success: true,
    message: `Successfully subscribed ${email}!`,
  };
}

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<{ success: boolean; message: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    startTransition(async () => {
      const formData = new FormData();
      formData.append('email', email);
      const result = await subscribeAction(state, formData);
      setState(result);
      setEmail('');
    });
  };

  return (
    <section className='py-20 relative'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-12 text-center shadow-2xl'>
          {/* Icon */}
          <div className='size-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg'>
            <Mail className='size-10 text-white' />
          </div>

          {/* Content */}
          <h2 className='text-4xl md:text-5xl font-black mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Stay Updated
            </span>
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Get the latest blockchain tutorials, learning resources, and
            exclusive content delivered to your inbox weekly.
          </p>

          {/* Newsletter Form */}
          {!state?.success ? (
            <form
              onSubmit={handleSubmit}
              className='max-w-md mx-auto'
            >
              <div className='flex space-x-4'>
                <Input
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='flex-1 h-12 bg-white/5 border-purple-500/20 text-white placeholder:text-gray-400 rounded-xl'
                />
                <Button
                  type='submit'
                  disabled={isPending}
                  className='bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-6 h-12 rounded-xl font-semibold'
                >
                  {isPending ? (
                    <div className='size-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                  ) : (
                    <Send className='size-5' />
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className='max-w-md mx-auto'>
              <div className='flex items-center justify-center space-x-3 text-green-400 mb-4'>
                <CheckCircle className='size-6' />
                <span className='text-lg font-semibold'>
                  Successfully subscribed!
                </span>
              </div>
              <p className='text-gray-400'>
                Check your inbox for a welcome email with exclusive learning
                resources.
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className='grid md:grid-cols-3 gap-6 mt-12 text-sm'>
            <div className='flex items-center space-x-2 text-gray-300'>
              <BookOpen className='size-4 text-cyan-400' />
              <span>Weekly tutorials</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-300'>
              <BookOpen className='size-4 text-purple-400' />
              <span>Learning tips</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-300'>
              <BookOpen className='size-4 text-pink-400' />
              <span>Exclusive content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
