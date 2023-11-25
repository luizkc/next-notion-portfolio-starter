import { default as NextImage } from "next/image";
import { default as NextLink } from "next/link";

export { type ArticleListProps } from "../home/article-list";
import { type MouseEvent } from "react";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { parentVariants } from "~/lib/animations";
import { type getArticles } from "~/notion/get-articles";

const Link = motion(NextLink);
const Image = motion(NextImage);

export interface ArticleListItemProps {
  article: Awaited<ReturnType<typeof getArticles>>[0];
}

export function ArticleListItem({ article }: ArticleListItemProps) {
  const { properties, id, cover } = article;
  const {
    created,
    description,
    slug,
    Name: { title },
  } = properties;
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x) as MotionValue<number>;
  const mouseYSpring = useSpring(y) as MotionValue<number>;

  const rotateX = useTransform(mouseYSpring, [0, 1], ["-6deg", "6deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["6deg", "-6deg"]);

  function handleMouseMove(e: MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height } = rect;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width;
    const yPct = mouseY / height;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <Link
      variants={parentVariants}
      href={`/blog/${
        (slug.formula.type === "string" && slug.formula.string) ?? ""
      }`}
      target="_self"
      style={{ all: "unset" }}
    >
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        variants={parentVariants}
        key={id}
        className="flex flex-col gap-3 rounded-md border border-transparent p-2 hover:cursor-pointer"
        whileHover="scale"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          variants={parentVariants}
          whileHover="unscale"
          className="h-40 w-full rounded-md"
        >
          <Image
            alt={title[0].plain_text}
            fill
            className="!static my-0 w-full overflow-hidden rounded-md object-cover"
            variants={parentVariants}
            whileHover="unscale"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={cover?.external?.url ?? cover?.file?.url ?? ""}
            blurDataURL={cover.blurDataURL}
            placeholder="blur"
          />
        </motion.div>
        <motion.p
          variants={parentVariants}
          whileHover="unscale"
          className="focus:outline-offset-6 my-0 flex w-fit border-spacing-y-3.5 items-center gap-2 border-b border-muted-foreground text-muted-foreground no-underline transition-colors hover:border-accent-foreground hover:text-foreground"
        >
          {title[0].plain_text}
        </motion.p>
        <motion.p
          className="my-0"
          whileHover="unscale"
          variants={parentVariants}
        >
          {description.rich_text[0].plain_text}
        </motion.p>
        <motion.span
          whileHover="unscale"
          variants={parentVariants}
          className="text-muted-foreground"
        >
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }).format(new Date(created.created_time))}
        </motion.span>
        {/* <motion.span
          variants={parentVariants}
          initial="hide"
          //   whileHover="show"
          //   className="text-muted-foreground opacity-0 bg-transparent absolute right-0 bottom-3.5 px-2"
        >
          <MoveRight size={16} />
        </motion.span> */}
      </motion.article>
    </Link>
  );
}
