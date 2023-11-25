import { ArticleNotFound } from "~/components/blog/article-not-found";
import { getArticles } from "~/notion/get-articles";

export default async function NotFound() {
  const articles = await getArticles();
  if (articles.length > 3) {
    articles.slice(3);
  }
  return <ArticleNotFound articles={articles} />;
}
