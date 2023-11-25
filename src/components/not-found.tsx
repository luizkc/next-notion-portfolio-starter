"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { default as NextImage } from "next/image";

import { Footer } from "./footer";
import { Header } from "./header";

import { parentVariants } from "~/lib/animations";

const NotFoundGif = "https://i.giphy.com/media/iey6oXTNZqrxHk6zdS/giphy.webp";

const Image = motion(NextImage);

export function NotFound() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <motion.main
      className="prose prose-zinc min-h-screen dark:prose-invert"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <motion.h2
        className="font-serif font-normal italic"
        variants={parentVariants}
      >
        this page doesn&apos;t exist, but this gif does
      </motion.h2>
      <Image
        priority
        src={NotFoundGif}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt="fuck this page, it doesn't exist"
        className="!static overflow-hidden rounded-md object-cover"
        fill
      />
      <div className="mt-28" />
      <Footer />
    </motion.main>
  );
}
