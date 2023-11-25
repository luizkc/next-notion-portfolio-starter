import { z } from "zod";

import * as NotionSchemas from "./schemas.notion";

export const articleSchema = z.object({
  id: z.string(),
  cover: NotionSchemas.NotionCover,
  properties: z.object({
    description: NotionSchemas.RichTextProperty,
    created: NotionSchemas.CreatedTimeProperty,
    slug: NotionSchemas.FormulaProperty,
    edited: NotionSchemas.LastEditedTimeProperty,
    Name: NotionSchemas.TitleProperty,
  }),
});

export const articlesSchema = z.array(articleSchema);

export const projectSchema = z.object({
  id: z.string(),
  properties: z.object({
    description: NotionSchemas.RichTextProperty,
    url: NotionSchemas.URLProperty,
    published: NotionSchemas.CheckboxProperty,
    created: NotionSchemas.CreatedTimeProperty,
    Name: NotionSchemas.TitleProperty,
  }),
});

export const projectsSchema = z.array(projectSchema);

export type Article = z.infer<typeof articleSchema>;
export type Project = z.infer<typeof projectSchema>;
