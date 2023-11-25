import { type ArticleListProps } from "~/components/home/article-list";

export { type ArticleListProps } from "~/components/home/article-list";
import { motion } from "framer-motion";

import { ArticleListItem } from "./article-list-item";

import { parentVariants } from "~/lib/animations";

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <motion.div
      variants={parentVariants}
      className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </motion.div>
  );
}
