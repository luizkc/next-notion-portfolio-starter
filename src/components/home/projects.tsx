import { motion } from "framer-motion";
import { default as NextLink } from "next/link";

import { parentVariants } from "~/lib/animations";
import { type getProjects } from "~/notion/get-projects";

const Link = motion(NextLink);

export interface ProjectsProps {
  projects: Awaited<ReturnType<typeof getProjects>>;
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <motion.h2
        variants={parentVariants}
        className="font-serif font-normal italic"
      >
        Projects
      </motion.h2>
      <motion.div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {projects.map(
          ({
            properties: {
              description,
              url,
              Name: { title },
            },
          }) => (
            <motion.div
              variants={parentVariants}
              key={title[0].plain_text}
              className=" flex flex-col"
            >
              <Link
                href={url.url}
                target="_blank"
                className="focus:outline-offset-6 flex w-fit border-spacing-y-3.5 items-center gap-2 border-b border-muted-foreground text-muted-foreground no-underline transition-colors hover:border-accent-foreground hover:text-foreground"
              >
                <motion.span className="font-medium">
                  {title[0].plain_text}
                </motion.span>
              </Link>
              <motion.span className="pt-3">
                {description.rich_text[0].plain_text}
              </motion.span>
            </motion.div>
          ),
        )}
      </motion.div>
    </>
  );
}
