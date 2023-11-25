import { NotionApiResult } from "./schemas.notion";
import { projectsSchema } from "./schemas.user";
import { notion, projectsDatabaseId } from "./";

export const getProjects = async () => {
  const response = await notion.databases.query({
    database_id: projectsDatabaseId,
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
        direction: "ascending",
      },
    ],
  });
  const results = NotionApiResult.parse(response.results);
  const parsedProps = projectsSchema.parse(results);
  return parsedProps;
};
