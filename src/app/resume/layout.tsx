"use client";

import { motion } from "framer-motion";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { parentVariants } from "~/lib/animations";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="prose prose-zinc min-h-[90vh] dark:prose-invert"
    >
      <Header />
      {children}
      <Footer />
    </motion.main>
  );
}
