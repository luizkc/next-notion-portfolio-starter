import { n2m, resumePageId } from "./";

export async function getResume() {
  const mdblocks = await n2m.pageToMarkdown(resumePageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString;
}
