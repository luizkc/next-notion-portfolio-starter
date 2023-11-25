"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "./logo";

import { parentVariants } from "~/lib/animations";
import { cn } from "~/lib/utils";

export function Header() {
  const path = usePathname();
  return (
    <motion.header
      variants={parentVariants}
      className={cn(
        "-mt-2 flex h-10 items-center justify-between",
        path !== "/" && "hover:cursor-pointer",
      )}
    >
      {path === "/" && <Logo />}
      {path !== "/" && (
        <Link
          className="no-underline hover:cursor-pointer"
          href="/"
          target="_self"
        >
          <Logo />
        </Link>
      )}
    </motion.header>
  );
}
