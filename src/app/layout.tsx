import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";

import { bio } from "~/bio";
import { ThemeProvider } from "~/components/ui/theme-provider";
import { getBaseUrl } from "~/lib/getbaseUrl";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  description: bio.slogan,
  title: [bio.firstName, bio.separator, bio.lastName].join(""),
  metadataBase: new URL(baseUrl),
  openGraph: {
    description: bio.slogan,
    title: [bio.firstName, bio.separator, bio.lastName].join(""),
    type: "website",
    url: baseUrl,
    images: [
      {
        url: "/og.png",
        alt: [bio.firstName, bio.separator, bio.lastName].join(""),
      },
    ],
  },
};

const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Person",
  name: [bio.firstName, bio.lastName].join(" "),
  jobTitle: bio.profession,
  url: baseUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning={process.env.NODE_ENV === "development"}
      lang="en"
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="mx-auto max-w-2xl px-4">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
