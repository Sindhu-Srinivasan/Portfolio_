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
          Akash in a Nutshell
        </h2>
        <p className="mb-6 text-lg text-muted-foreground">
          I&apos;m a full-stack developer and AI enthusiast, currently pursuing my MCA while building real-world projects that blend web, mobile, and emerging AI tech.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          I&apos;ve shipped products in <span className="font-medium">Web dev</span>{" "}
          (Next.js, MERN),
          <span className="font-medium"> Android dev</span> (React Native +
          Firebase), and
          <span className="font-medium"> backend automation </span> (Python, FastAPI). My stack includes Python, JS/TS, C++, AWS, Git, and I
          design clean, minimal UIs.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          Currently building <span className="font-semibold text-red-600">Zenin</span> (a
          money-tracking app), <span className="font-semibold text-red-600">Dazai</span>{" "}
          (a trading bot), <span className="font-semibold text-red-600">Rentkr</span>{" "} (a rental platform), and <span className="font-semibold text-red-600">Lexx</span>{" "}
          (a legal assistant for research and drafting powered by Large Language Models(LLM) + Retrieval-Augmented Generation (RAG)).        </p>
        <p className="text-lg text-muted-foreground">
          I&apos;m that guy who mixes{" "}
          <span className="italic">apps + AI + automation</span>. If
          it&apos;s fast, useful, and minimal—I&apos;m building it.
        </p>
      </motion.section>
    </main>
  );
}
