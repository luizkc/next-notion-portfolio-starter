import { NotionApiResult } from "./schemas.notion";
import { articleSchema } from "./schemas.user";
import { blogDatabaseId, notion } from ".";

export const getArticle = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: blogDatabaseId,
    filter: {
      and: [
        {
          property: "published",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "slug",
          formula: {
            string: {
              equals: slug,
            },
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
  if (response.results.length === 0) {
    return null;
  }
  const results = NotionApiResult.parse(response.results);
  const parsed = articleSchema.parse(results[0]);
  return parsed;
};
