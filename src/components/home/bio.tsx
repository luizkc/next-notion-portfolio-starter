"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { bio } from "~/bio";
import { parentVariants } from "~/lib/animations";

export function Bio() {
  return (
    <p className=" mt-0">
      <motion.span variants={parentVariants}>
        Hi there, I&apos;m <motion.strong>{bio.firstName}</motion.strong> aka{" "}
        <motion.strong>
          {`${bio.firstName} ${bio.separator}`}{" "}
          <motion.span className=" font-serif font-normal italic text-foreground">
            {bio.lastName}
          </motion.span>
        </motion.strong>
        . I&apos;m {new Date().getFullYear() - bio.birthYear} y/o and I&apos;m a{" "}
        {bio.profession}. I like <motion.strong>{bio.hobbies[0]}</motion.strong>{" "}
        and <motion.strong>{bio.hobbies[1]}</motion.strong>. I enjoy{" "}
        <motion.strong>{bio.activities[0]}</motion.strong>,{" "}
        <motion.strong>{bio.activities[1]}</motion.strong> and{" "}
        <motion.strong>{bio.activities[2]}</motion.strong>.
      </motion.span>
      <br />
      <br />
      <motion.span variants={parentVariants}>
        Right now I&apos;m working at{" "}
        <strong>
          <Link
            href={bio.companyUrl}
            target="_blank"
            className="focus:outline-offset-6 mr-0.5 w-fit border-spacing-y-3.5 gap-2 border-b border-muted-foreground no-underline transition-colors hover:border-accent-foreground"
          >
            {bio.company}
          </Link>
        </strong>
        , {bio.jobDescription}.
      </motion.span>
    </p>
  );
}
