import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  ...(process.env.CONTENTFUL_ACCESS_TOKEN
    ? {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    : {
        accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? "",
        host: "preview.contentful.com",
      }),
});
