"use client";

import { motion } from "framer-motion";

import { Markdown } from "../ui/markdown";

import { parentVariants } from "~/lib/animations";

export function Article({ title, md }: { title: string; md: string }) {
  return (
    <motion.article
      variants={parentVariants}
      className="prose prose-zinc dark:prose-invert prose-pre:bg-inherit prose-pre:p-0"
    >
      <motion.h1
        variants={parentVariants}
        className="pt-8 font-serif font-normal italic"
      >
        {title} <br />
        {/* <span className="font-sans text-muted-foreground text-xs font-light">
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }).format(new Date(article.created))}
        </span> */}
      </motion.h1>
      <Markdown md={md} />
    </motion.article>
  );
}
