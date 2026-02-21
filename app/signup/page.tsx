"use client";
import Image from "next/image";
import { Footer } from "../sections/footer";
import * as motion from "motion/react-client"
import { cubicBezier } from "motion/react";



export default function Signup() {
  return (
    <section id="hero" className="py-10 px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto my-auto w-full">
        <div className="flex md:flex-row flex-col gap-4">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: cubicBezier(0.4, 0, 0.2, 1) }}
            className="bg-white dark:bg-neutral-950 p-6 md:p-12 rounded-4xl w-full md:w-1/2 flex flex-col">

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2">
                Create your account
              </h1>

              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Start your journey with us today
              </p>

              {/* Social Login Buttons */}
              <div className="flex md:flex-row flex-col items-center justify-center gap-4">
                <button className="w-full px-6 py-3 cursor-pointer bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-3">
                  <Image src="/img/google.svg" className="w-5 h-5 dark:invert" alt="Google" width={20} height={20} />
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">Continue with Google</span>
                </button>
                <button className="w-full px-6 py-3 cursor-pointer bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-3">
                  <Image src="/img/apple.svg" className="w-5 h-5 dark:invert" alt="Apple" width={20} height={20} />
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">Continue with Apple</span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
                <span className="text-sm text-zinc-500 dark:text-zinc-500">or</span>
                <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
              </div>

              {/* Signup Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-highlight focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 rounded border-zinc-300 dark:border-zinc-600 text-highlight focus:ring-highlight"
                  />
                  <label htmlFor="terms" className="text-sm text-zinc-600 dark:text-zinc-400">
                    I agree to the{" "}
                    <a href="/terms" className="text-zinc-900 dark:text-white hover:text-highlight underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" className="text-zinc-900 dark:text-white hover:text-highlight underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer px-6 py-3 text-black bg-highlight hover:bg-highlight-hover text-highlight-text rounded-xl font-semibold transition-colors"
                >
                  Create Account
                </button>
              </form>

              <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-6">
                Already have an account?{" "}
                <a href="/login" className="text-zinc-900 dark:text-white font-semibold hover:underline">
                  Sign in
                </a>
              </p>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div 
          
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1), delay: 0 }}
          className="w-full md:w-1/2 bg-highlight rounded-4xl flex-shrink overflow-hidden relative">
            <div className="relative lg:h-[600px] flex items-start justify-center translate-y-1/5">
              <div className="relative">
                {/* Decorative Circle */}


                {/* Phone Mockup */}
                <motion.div 
                initial={{ opacity: 1, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }}
                className="relative z-10 w-96 h-[800px] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-[70px] border-10 border-neutral-800 dark:border-neutral-700">
                  <Image src="/img/app-screen-2.png" className="w-full rounded-[60px]" alt="Phone" width={320} height={800} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
       
      </div>
    </section>
  );
}

