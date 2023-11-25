import { type MetadataRoute } from "next";
import { bio } from "~/bio";

import { getBaseUrl } from "~/lib/getbaseUrl";

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = getBaseUrl();
  return {
    name: `${bio.firstName} ${bio.lastName}`,
    short_name: bio.firstName,
    description: bio.slogan,
    categories: ["entertainment"],
    icons: [
      {
        src: "icon3.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon4.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#d4d4d8",
    background_color: "#27272a",
    display: "standalone",
    start_url: baseUrl,
  };
}
