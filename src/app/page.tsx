"use client";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";
import TechStackIcon from "@/components/TechStackIcon";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const MotionLink = motion(Link);
  

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
        <ParticlesBackground />
      </div>
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full min-h-screen py-50 bg-gradient-to-r from-black/10 via-zinc-900 to-red-900/60"
      >
        <motion.h1
          className="text-5xl lg:text-6xl sm:text-5xl font-bold tracking-tight"
          animate={{
            y: [0, -9, 0],
            scale: [1, 1.05, 1],
            transition: {
              duration: 1.2,
              ease: "easeInOut",
            },
          }}
        >
          I Build AI/ML & Web Apps <br />
          <span className="bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
            Full-Stack & AI Developer
          </span>
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          AI/ML Engineer & Full-Stack Developer (Python, FastAPI, Next.js, ML, DL). <br />
  Passionate about creating intelligent systems and scalable web apps.
        </p>

        <p className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
          Innovate. Build. Deploy. Repeat.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <MotionLink
            href="/projects"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-xl rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <span className="absolute inset-0 rounded-2xl border-[3px] border-transparent pointer-events-none animate-borderMagic"></span>
          </MotionLink>
        </div>
      </motion.div>

      {/* about me section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-4xl mx-auto h-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
          <span className=" bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          I&apos;m Sindhu, B.Tech student passionate about full-stack development and
          AI/ML. Currently building
          <strong>AI Powered Flood Risk Assessment</strong>, 
          <strong> Role Validator</strong>, 
          <strong> Intelligent SQL Assistant</strong> & 
          <strong> Kidney Health Prediction</strong> — combining Next.js, Streamlit, and Flask with AI-driven solutions in geospatial analysis, natural language processing, and healthcare.
          </p>

        <MotionLink
          whileTap={{ scale: 0.9 }}
          href="/about"
          className="inline-block bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm rounded-xl px-5 py-2 transition"
        >
          More About Me
        </MotionLink>
      </motion.div>

      {/* projects preview section */}
      {/* projects preview section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mt-20 text-center max-w-7xl mx-auto h-full"
>
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
    <span className="bg-gradient-to-r from-red-600 via-white/70  to-red-600 bg-clip-text text-transparent">
      Featured Projects
    </span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Project 1 */}
    <ProjectCard
      title="AI Powered Flood Risk Assessment Tool"
      desc="AI-Powered Flood Risk Assessment System is a full-stack application that evaluates flood risks using geographic coordinates or terrain images."
      tech={["Next.js", "TailwindCSS", "Python", "ML"]}
    />

    {/* Project 2 */}
    <ProjectCard
      title="Role Validator XML to PDF Job Role Comparison Tool"
      desc="An AI-powered Streamlit app that validates job roles by comparing structured XML definitions with roles extracted from unstructured PDFs."
      tech={["Streamlit", "Python", "LLMs"]}
    />

    {/* Project 3 */}
    <ProjectCard
      title="Intelligent SQL Assistant"
      desc="An AI-powered Streamlit app that converts natural language questions into SQL queries. It supports live querying, result display, and intelligent SQL generation."
      tech={["Streamlit", "Python", "LLMs", "SQL"]}
    />

    {/* Project 4 */}
    <ProjectCard
      title="Kidney Health Prediction - End-to-End ML Pipeline"
      desc="This project focuses on the classification of kidney diseases using deep learning and computer vision techniques. It includes a full ML pipeline with ingestion, transformation, training, and evaluation."
      tech={["Next.js", "TypeScript", "TailwindCSS", "Flask", "MLflow", "DVC"]}
    />
  </div>
</motion.div>


      {/* tech stack section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 py-10 mb-20 text-center max-w-3xl mx-auto w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Tech 1 */}
          <TechStackIcon
            src="/tech-icons/python.svg"
            name="Python"
            alt="python"
          />
          {/* Tech 2 */}
          <TechStackIcon
            src="/tech-icons/javascript.svg"
            name="Javascript"
            alt="javascript"
          />
          {/* Tech 3 */}
          <TechStackIcon src="/tech-icons/react.svg" name="React" alt="react" />
          {/* Tech 4 */}
          <TechStackIcon
            src="/tech-icons/nodejs.svg"
            name="NodeJs"
            alt="nodejs"
          />
          {/* Tech 5 */}
          <TechStackIcon src="/tech-icons/aws.svg" name="AWS" alt="aws" />
          {/* Tech 6 */}
          <TechStackIcon
            src="/tech-icons/nextjs.svg"
            name="Next.js"
            alt="next.js"
          />
          {/* Tech 7 */}
          <TechStackIcon
            src="/tech-icons/tailwindcss.svg"
            alt="Tailwind Css"
            name="Tailwind CSS"
          />
          {/* Tech 8 */}
          <TechStackIcon src="/tech-icons/git.svg" alt="Git" name="Git" />
        </div>
      </motion.div>
    </main>
  );
}