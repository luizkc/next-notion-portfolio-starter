import { serialize } from "next-mdx-remote/serialize";

import { Resume } from "~/components/resume";
import { getResume } from "~/notion/get-resume";

export const revalidate = 3600;
export const dynamic = "force-static";

export default async function ResumePage() {
  const resume = await getResume();
  const md = await serialize(resume.parent);
  return <Resume md={md.compiledSource} />;
}
