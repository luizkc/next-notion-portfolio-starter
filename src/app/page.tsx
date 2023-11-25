import { HomeScreen } from "~/components/home/screen";
import { getArticles } from "~/notion/get-articles";
import { getProjects } from "~/notion/get-projects";

export const revalidate = 3600;
export const dynamic = "force-static";

export default async function HomePage() {
  const articles = await getArticles();
  const projects = await getProjects();

  if (articles.length > 4) {
    articles.slice(4);
  }

  return <HomeScreen articles={articles} projects={projects} />;
}
