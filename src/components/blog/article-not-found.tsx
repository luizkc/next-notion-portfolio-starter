"use client";

import { motion } from "framer-motion";

import { ArticleList } from "./article-list";

import { parentVariants } from "~/lib/animations";
import { type getArticles } from "~/notion/get-articles";

interface ArticleNotFoundProps {
  articles: Awaited<ReturnType<typeof getArticles>>;
}
export function ArticleNotFound({ articles }: ArticleNotFoundProps) {
  return (
    <>
      <motion.h3
        variants={parentVariants}
        className="font-serif font-normal italic"
      >
        Article not found
      </motion.h3>
      <motion.p variants={parentVariants}>
        It seems like this article doesn&apos;t exist or was deleted.
      </motion.p>
      <motion.h3
        variants={parentVariants}
        className="font-serif font-normal italic"
      >
        Suggestions
      </motion.h3>
      <ArticleList articles={articles} />
    </>
  );
}
