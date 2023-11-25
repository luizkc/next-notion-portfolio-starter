import RSS from "rss";

import { getBaseUrl } from "./getbaseUrl";

import { bio } from "~/bio";
import { getArticles } from "~/notion/get-articles";

export async function generateRssFeed() {
  const articles = await getArticles();
  const baseUrl = getBaseUrl();

  const feedOptions = {
    title: `${bio.firstName}${bio.separator}${bio.lastName}`,
    description: bio.blogDescription,
    site_url: baseUrl,
    feed_url: `${baseUrl}/rss.xml`,
    image_url: `${baseUrl}/favicon.ico`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      bio.firstName
    } ${bio.lastName}`,
  };

  const feed = new RSS(feedOptions);

  articles.map((article) => {
    feed.item({
      title: article.properties.Name.title[0].plain_text,
      description: article.properties.description.rich_text[0].plain_text,
      url: `${baseUrl}/blog/${
        article.properties.slug.formula.type === "string"
          ? article.properties.slug.formula.string
          : ""
      }`,
      date: article.properties.created.created_time,
    });
  });
  return feed.xml({ indent: true });
}
