"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import { Footer } from "../footer";
import { Header } from "../header";
import { ArticleList, type ArticleListProps } from "../home/article-list";
import { Bio } from "../home/bio";
import { Projects, type ProjectsProps } from "../home/projects";

import { parentVariants } from "~/lib/animations";

export function HomeScreen({
  articles,
  projects,
}: ArticleListProps & ProjectsProps) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <motion.main
      className="prose prose-zinc min-h-screen dark:prose-invert"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <motion.section className="max-w-2xl">
        <Bio />
        <Projects projects={projects} />
        <ArticleList articles={articles} />
      </motion.section>
      <div className="mt-28" />
      <Footer />
    </motion.main>
  );
}
