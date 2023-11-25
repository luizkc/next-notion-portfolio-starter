import { NotionApiResult } from "./schemas.notion";
import { articlesSchema } from "./schemas.user";
import { blogDatabaseId, notion } from ".";

import { getBase64 } from "~/lib/getBase64";

export const getArticles = async () => {
  const response = await notion.databases.query({
    database_id: blogDatabaseId,
    filter: {
      or: [
        {
          property: "published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "created",
        direction: "descending",
      },
    ],
  });
  const results = NotionApiResult.parse(response.results);
  const parsed = articlesSchema.parse(results);
  const parsedWithBlur = await Promise.all(
    parsed.map(async (article) => ({
      ...article,
      cover: {
        ...article.cover,
        blurDataURL: await getBase64(
          article.cover?.external?.url ?? article.cover?.file?.url ?? "",
        ),
      },
    })),
  );
  return parsedWithBlur;
};
