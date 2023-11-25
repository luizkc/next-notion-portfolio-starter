"use client";

import { Markdown } from "~/components/ui/markdown";

export function Resume({ md }: { md: string }) {
  return <Markdown md={md} />;
}
