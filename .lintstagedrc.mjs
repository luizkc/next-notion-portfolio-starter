/** @type {import("lint-staged").Config} */
const config = {
  "*.{ts,tsx,mjs,cjs}": ["pnpm prettier --write", "pnpm dlx eslint --fix"],
};

export default config;
