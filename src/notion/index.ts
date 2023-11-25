import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

export const projectsDatabaseId = process.env.NOTION_PROJECTS_DATABASE_ID ?? "";
export const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID ?? "";
export const resumePageId = process.env.NOTION_RESUME_PAGE_ID ?? "";
