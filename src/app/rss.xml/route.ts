import { NextResponse } from "next/server";

import { generateRssFeed } from "~/lib/rss";

export async function GET() {
  const feed = await generateRssFeed();
  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
