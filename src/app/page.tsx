"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          I Build Products Where <br />{" "}
          <span className="text-red-500">Finance meets Code</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Full-stack dev with a quant brain. I make web, Android & trading
          systems. Soon diving deep into ML. Let’s talk money, models, and
          minimal UI.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-red-500 hover:bg-red-600 font-semibold text-sm rounded-xl px-5 py-2 transition "
          >
            View Projects
          </a>
          
        </div>
      </motion.section>
    </main>
  );
}
