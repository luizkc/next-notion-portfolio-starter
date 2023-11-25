"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { default as NextImage } from "next/image";
import { default as NextLink } from "next/link";
import { MDXRemote } from "next-mdx-remote";

import { CodeBlock } from "~/components/ui/code-block";
import { parentVariants } from "~/lib/animations";

const Image = motion(NextImage);
const Link = motion(NextLink);
const MDX = motion(MDXRemote);

interface MarkdownProps {
  md: string;
}

export const Markdown = forwardRef<HTMLElement | SVGElement, MarkdownProps>(
  ({ md }, ref) => {
    return (
      <MDX
        ref={ref}
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        scope={{}}
        frontmatter={{}}
        components={{
          a: (props) => (
            // @ts-expect-error motion props
            <Link
              target="_blank"
              className="focus:outline-offset-6 mr-0.5 w-fit border-spacing-y-3.5 gap-2 border-b border-muted-foreground no-underline transition-colors hover:border-accent-foreground"
              variants={parentVariants}
              {...props}
            />
          ),
          // @ts-expect-error motion props
          h1: (props) => <motion.h1 variants={parentVariants} {...props} />, // motion component for h1
          // @ts-expect-error motion props
          p: (props) => <motion.p variants={parentVariants} {...props} />, // motion component for paragraph
          // @ts-expect-error motion props
          ul: (props) => <motion.ul variants={parentVariants} {...props} />, // motion component for unordered lists
          // @ts-expect-error motion props
          li: (props) => <motion.li variants={parentVariants} {...props} />, // motion component for list items
          // @ts-expect-error motion props
          div: (props) => <motion.div variants={parentVariants} {...props} />, // motion component for list items
          // @ts-expect-error motion props
          pre: (props) => <motion.pre variants={parentVariants} {...props} />, // motion component for list items
          blockquote: (props) => (
            // @ts-expect-error motion props
            <motion.blockquote variants={parentVariants} {...props} />
          ), // motion component for list items
          table: (props) => (
            // @ts-expect-error motion props
            <motion.table variants={parentVariants} {...props} />
          ), // motion component for list items
          thead: (props) => (
            // @ts-expect-error motion props
            <motion.thead variants={parentVariants} {...props} />
          ), // motion component for list items
          tbody: (props) => (
            // @ts-expect-error motion props
            <motion.tbody variants={parentVariants} {...props} />
          ), // motion component for list items
          // @ts-expect-error motion props
          tr: (props) => <motion.tr variants={parentVariants} {...props} />, // motion component for list items
          // @ts-expect-error motion props
          th: (props) => <motion.th variants={parentVariants} {...props} />, // motion component for list items
          // @ts-expect-error motion props
          td: (props) => <motion.td variants={parentVariants} {...props} />, // motion component for list items
          img: (props) => (
            // @ts-expect-error eslint-disable-next-line jsx-a11y/alt-text
            <Image
              variants={parentVariants}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="!static overflow-hidden rounded-md object-cover"
              fill
              src={props.src!}
              alt={props.alt ?? "image"}
              {...props}
            />
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className ?? "");
            return match ? (
              <CodeBlock
                code={String(children).replace(/\n$/, "")}
                language={match[1]}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        compiledSource={md}
      />
    );
  },
);

Markdown.displayName = "Markdown";
