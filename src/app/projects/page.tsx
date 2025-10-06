"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Next.js optimized image component

const projects = [
  {
    title: "AI Powered Flood Risk Assessment Tool",
    description:
      "AI-Powered Flood Risk Assessment System is a full-stack application that evaluates flood risks using geographic coordinates or terrain images.",
    link: "https://flood-risk-assessment-tool-frontend.vercel.app/",
    color: "text-emerald-400",
    image: "/images/project1.png", // ✅ Path from /public
    imageClass: "max-h-60 rotate-2",
  },
  {
    title: "Role Validator XML to PDF Job Role Comparison Tool",
    description:
      "An AI-powered Streamlit app that validates job roles by comparing structured XML definitions with roles extracted from unstructured PDFs.",
    link: "https://role-validator-xml-to-pdf-job-role-comparison-tool.streamlit.app/",
    color: "text-rose-400",
    image: "/images/project2.png",
    imageClass: "max-h-60 -rotate-2",
  },
  {
    title: "Intelligent SQL Assistant - Natural Language to Database Query System",
    description:
      "An AI-powered Streamlit app that converts natural language questions into SQL queries. It supports live database querying, result display, and uses LLMs for intelligent SQL generation—making data access seamless for non-technical users.",
    link: "https://natural-language-to-database-query-system-sindhu.streamlit.app/",
    color: "text-sky-400",
    image: "/images/project3.png",
    imageClass: "max-h-60 rotate-1",
  },
  {
    title: "Kidney Health Prediction - End-to-End ML Pipeline",
    description:
      "This project focuses on the classification of kidney diseases using deep learning and computer vision techniques. It includes a full ML pipeline with data ingestion, transformation, model training, and evaluation. Tech stack: Next.js, TypeScript, TailwindCSS, Flask, MLflow, DVC.",
    link: "https://kidney-disease-classification.vercel.app/",
    color: "text-violet-400",
    image: "/images/project4.png",
    imageClass: "max-h-60 -rotate-1",
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center text-neutral-100 bg-gradient-to-br from-black/80 via-zinc-900 to-red-700">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="max-w-5xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mt-4 mb-12 text-center"
        >
          My Projects
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16 flex flex-col sm:flex-row items-center bg-neutral-900 rounded-2xl shadow-xl p-8"
          >
            {/* Left side text */}
            <div className="sm:w-1/2">
              <h3 className={`text-3xl font-bold ${project.color}`}>
                {project.title}
              </h3>
              <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className={`mt-6 inline-block ${project.color} font-medium hover:underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live ↗
              </a>
            </div>

            {/* Right side image */}
            <motion.div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotateY: 8,
                  rotateX: 1,
                  zIndex: 19,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                }}
                className={`transform ${project.imageClass}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
