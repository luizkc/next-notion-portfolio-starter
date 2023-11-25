import type { Metadata } from "next";
import { bio } from "~/bio";

import { BlogLayout } from "~/components/blog/layout";

export const metadata: Metadata = {
  title: `${bio.firstName}${bio.separator}${bio.lastName} — recent articles`,
  description: bio.blogDescription,
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BlogLayout>{children}</BlogLayout>;
}
