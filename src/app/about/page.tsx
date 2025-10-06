"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 mt-5">
          Sindhu in a Nutshell
        </h2>

        <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
          I&apos;m an <span className="font-medium">AI/ML Engineer</span> and{" "}
          <span className="font-medium">full-stack developer</span> who loves
          exploring the intersection of{" "}
          <span className="italic">algorithms, creativity, and cosmic ideas</span>.
          Whether it’s web, mobile, or AI-driven automation—I thrive on turning
          imagination into working products.
        </p>

        <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
          My toolkit includes{" "}
          <span className="font-medium">Next.js, React Native, Firebase</span> for
          front-end & mobile apps, and{" "}
          <span className="font-medium">Python, FastAPI, and cloud platforms</span> for
          backend and automation. I also work with{" "}
          <span className="font-medium">ML/DL frameworks</span> to bring neural
          networks and data-driven solutions to life. I believe in building{" "}
          <span className="italic">fast, useful, and minimal</span> solutions that
          actually solve problems.
        </p>

        <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
          Beyond coding, I love experimenting with{" "}
          <span className="font-semibold text-cyan-500">AI models</span>, creating{" "}
          <span className="font-semibold text-purple-500">automation workflows</span>,
          and blending <span className="italic">apps + AI + design</span> into unique
          projects. Some of my work ranges from{" "}
          <span className="font-semibold text-blue-500">smart apps</span> to{" "}
          <span className="font-semibold text-pink-500">intelligent bots</span>.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I like to call myself a{" "}
          <span className="italic">“cosmic coder”</span> 🚀 — constantly tinkering,
          solving problems, and dreaming big at the intersection of{" "}
          <span className="font-medium">technology, AI, and creativity</span>.
        </p>
      </motion.section>
    </main>
  );
}
