import { BlogScreen } from "~/components/blog/screen";
import { getArticles } from "~/notion/get-articles";

export const revalidate = 3600;
export const dynamic = "force-static";

export default async function BlogPage() {
  const articles = await getArticles();

  if (articles.length > 8) {
    articles.splice(8);
  }

  return <BlogScreen articles={articles} />;
}
