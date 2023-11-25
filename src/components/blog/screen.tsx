"use client";

import { motion } from "framer-motion";

import {
  ArticleList,
  type ArticleListProps,
} from "~/components/blog/article-list";
import { parentVariants } from "~/lib/animations";

export const revalidate = 3600;

export function BlogScreen({ articles }: ArticleListProps) {
  return (
    <motion.main
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="prose prose-zinc min-h-[90vh] dark:prose-invert"
    >
      <motion.h1
        variants={parentVariants}
        className="my-8 font-serif font-normal italic"
      >
        Blog
      </motion.h1>
      {/* <div className="my-8"></div> */}
      <ArticleList articles={articles} />
    </motion.main>
  );
}
