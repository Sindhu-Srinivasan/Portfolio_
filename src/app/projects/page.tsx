"use client";
import { motion } from "framer-motion";

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Projects</h2>
        {/* Project 1: Zenin */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-500">
            Zenin - Finance Tracker
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            A mobile finance tracking app that categorizes spending, suggests
            savings strategies, and tracks investments. Built using React Native
            and Firebase.
          </p>
          <a
            href="https://github.com/akash-kumar5/zenin"
            className="mt-4 inline-block text-red-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2: Dazai */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-500">
            Dazai - Trading Algo
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            A quantitative trading algorithm that generates buy/sell signals for
            stocks and crypto, with logging to track performance. Developed with
            Python and various technical indicators.
          </p>
          <a
            href="https://github.com/akash-kumar5/dazai"
            className="mt-4 inline-block text-red-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        {/* Project 3: RentKr */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-500">
            Rentkr - Item Rental Service
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            A MERN stack web app for renting out items like sound systems,
            bikes, and books. Built with React, Node.js, MongoDB, and AWS S3 for
            image storage.
          </p>
          <a
            href="https://github.com/your-username/rentkr"
            className="mt-4 inline-block text-red-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </motion.section>
    </main>
  );
}
