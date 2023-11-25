export function getBaseUrl() {
  let url = "";
  if (process.env.SITE_URL) {
    url = `https://${process.env.SITE_URL}`;
    return url;
  }
  if (process.env.VERCEL_URL) {
    url = `https://${process.env.VERCEL_URL}`;
    return url;
  }
  url = `http://localhost:${process.env.PORT ?? 3000}`;
  return url;
}
