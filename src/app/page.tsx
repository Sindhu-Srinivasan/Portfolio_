"use client";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
        <ParticlesBackground />
      </div>
      {/* hot line section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full min-h-screen py-50 bg-gradient-to-r from-black/10 via-zinc-900 to-red-900/60"
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-bold tracking-tight"
          animate={{ y: [0,-9,0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
           }}
        >
          I Build Products Where <br />{" "}
          <span
            className="bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent
"
          >
            Finance meets Code
          </span>
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Full-stack dev with a quant brain. I make web, Android & trading
          systems. Soon diving deep into ML. Turning logic into leverage.
          Building, trading, optimizing.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-red-500 hover:bg-red-600 font-semibold text-md rounded-xl px-5 py-2 transition "
          >
            See My Projects
          </a>
        </div>
      </motion.section>

      {/* about me section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 "> <span className=" bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">About Me</span> </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          I&apos;m an MCA student with a passion for full-stack development and
          quantitative trading systems. Currently building{" "}
          <strong>Zenin</strong>, <strong>Dazai</strong> &{" "}
          <strong>Rentkr</strong> — blending code, finance, and clean design.
        </p>
        <a
          href="/about"
          className="inline-block bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm rounded-xl px-5 py-2 transition"
        >
          More About Me
        </a>
      </motion.section>

      {/* projects preview section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70  to-red-600 bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.section
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="bg-white/7 border border-white/20 backdrop-blur-md rounded-lg p-6 hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl font-semibold mb-3">Zenin</h3>
              <p className="text-zinc-300 mb-4">
                A personal finance tracker app, analyzing transactions and
                suggesting savings strategies.
              </p>
              <a
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Project
              </a>
            </div>
          </motion.section>
          {/* Project 2 */}
          <motion.section
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="bg-white/7 border border-white/20 backdrop-blur-md rounded-lg p-6 hover:shadow-xl transition-shadow h-full">
              {" "}
              <h3 className="text-xl font-semibold mb-3">Dazai</h3>
              <p className="text-zinc-300 mb-4">
                A quantitative trading algorithm for stocks and crypto using
                Python, focused on market analysis.
              </p>
              <a
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Project
              </a>
            </div>
          </motion.section>

          {/* Project 3 */}
          <motion.section
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="bg-white/7 border border-white/20 backdrop-blur-md rounded-lg p-6 hover:shadow-xl transition-shadow h-full">
              {" "}
              <h3 className="text-xl font-semibold mb-3">Rentkr</h3>
              <p className="text-zinc-300 mb-4">
                A MERN stack website for renting items, targeted at bachelors
                and college students.
              </p>
              <a
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Project
              </a>
            </div>
          </motion.section>
        </div>
      </motion.section>

      {/* tech stack section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 py-10 mb-20 text-center max-w-3xl mx-auto w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">Tech Stack</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Tech 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/tech-icons/python.svg"
              alt="Python"
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">Python</span>
          </div>

          {/* Tech 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/tech-icons/javascript.svg"
              alt="JavaScript"
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">JavaScript</span>
          </div>

          {/* Tech 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/tech-icons/react.svg"
              alt="React"
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">React</span>
          </div>

          {/* Tech 4 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/tech-icons/nodejs.svg"
              alt="Node.js"
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">Node.js</span>
          </div>

          {/* Tech 5 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/tech-icons/aws.svg"
              alt="AWS"
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">AWS</span>
          </div>

          {/* Tech 6 */}
          <div className="flex flex-col bg-white text-black items-center text-center">
            <div className="w-20 h-20 bg-white p-2 rounded-xl flex items-center justify-center">
              <img
                src="/tech-icons/nextjs.svg"
                alt="Next.js"
                className="w-12 h-12"
              />
            </div>
            <span className="font-semibold text-lg">Next.js</span>
          </div>

          {/* Tech 7 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/tech-icons/tailwindcss.svg"
              alt="Tailwind CSS"
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">Tailwind CSS</span>
          </div>

          {/* Tech 8 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/tech-icons/git.svg"
              alt="Git"
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">Git</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
