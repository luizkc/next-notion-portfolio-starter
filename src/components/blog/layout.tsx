"use client";

import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";
import { default as NextLink } from "next/link";
import { useParams, usePathname } from "next/navigation";

import { Footer } from "~/components/footer";
import { parentVariants } from "~/lib/animations";

const Link = motion(NextLink);

export function BlogLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const path = usePathname();
  return (
    <motion.main
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="prose prose-zinc min-h-[90vh] dark:prose-invert"
    >
      <Link
        variants={parentVariants}
        href={
          params.slug?.length > 0
            ? "/blog"
            : path.startsWith("/blog")
              ? "/"
              : "/blog"
        }
        target="_self"
        className=" focus:outline-offset-6 flex w-fit border-spacing-y-3.5 items-center gap-2 border-b border-muted-foreground text-muted-foreground no-underline transition-all  hover:border-accent-foreground hover:text-foreground"
      >
        <MoveLeft size={16} /> Back
      </Link>
      {children}
      <Footer />
    </motion.main>
  );
}
