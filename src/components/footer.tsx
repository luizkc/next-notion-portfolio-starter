"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Network, Rss, Send } from "lucide-react";
import { default as NextLink } from "next/link";

import { ModeToggle } from "./ui/mode-toggle";
import { Logo } from "./logo";

import { bio } from "~/bio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { parentVariants } from "~/lib/animations";

const Link = motion(NextLink);

export function Footer() {
  return (
    <motion.div variants={parentVariants} className="max-w-2xl">
      <motion.hr className="mb-4 border-muted-foreground" />
      <motion.footer className="flex justify-between">
        <Link className="no-underline" href="/" target="_self">
          <Logo />
        </Link>
        <motion.div className="flex items-center gap-4">
          <ModeToggle />
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/resume" target="_self">
                  <FileText size={16} />
                  <span className="sr-only">
                    {bio.footer.hoverMessages.resume}
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{bio.footer.hoverMessages.resume}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="/rss.xml"
                  target="_self"
                  className="focus:outline-offset-6 underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-500 focus:decoration-neutral-500"
                >
                  <span className="sr-only">
                    {bio.footer.hoverMessages.rssfeed}
                  </span>
                  <Rss className=" h-4 w-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                {bio.footer.hoverMessages.rssfeed}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger className="hidden sm:inline">
                <Link
                  href="/sitemap.xml"
                  target="_self"
                  className="focus:outline-offset-6 underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-500 focus:decoration-neutral-500"
                >
                  <span className="sr-only">
                    {bio.footer.hoverMessages.sitemap}
                  </span>
                  <Network className=" h-4 w-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                {bio.footer.hoverMessages.sitemap}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={`mailto:${bio.email}`}
                  target="_self"
                  className="focus:outline-offset-6 underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-500 focus:decoration-neutral-500"
                >
                  <span className="sr-only">
                    {bio.footer.hoverMessages.email}
                  </span>
                  <Send className=" h-4 w-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{bio.footer.hoverMessages.email}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={bio.socials.github.url}
                  target="_blank"
                  className="focus:outline-offset-6 underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-500 focus:decoration-neutral-500"
                >
                  <span className="sr-only">
                    {bio.socials.github.hoverMessage}
                  </span>
                  <Github className=" h-4 w-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{bio.socials.github.hoverMessage}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={bio.socials.linkedin.url}
                  target="_blank"
                  className="focus:outline-offset-6 underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-500 focus:decoration-neutral-500"
                >
                  <span className="sr-only">
                    {bio.socials.linkedin.hoverMessage}
                  </span>
                  <Linkedin className=" h-4 w-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                {bio.socials.linkedin.hoverMessage}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={bio.socials.twitter.url}
                  target="_blank"
                  className="focus:outline-offset-6 underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-500 focus:decoration-neutral-500"
                >
                  <span className="sr-only">
                    {bio.socials.twitter.hoverMessage}
                  </span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-x"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.title>X (formerly known as Twitter)</motion.title>
                    <motion.path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      fill="none"
                    ></motion.path>
                    <motion.path d="M4 4l11.733 16h4.267l-11.733 -16z"></motion.path>
                    <motion.path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></motion.path>
                  </motion.svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                {bio.socials.twitter.hoverMessage}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </motion.footer>
    </motion.div>
  );
}
