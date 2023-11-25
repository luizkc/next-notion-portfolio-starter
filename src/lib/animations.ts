import { type Variants } from "framer-motion";

export const parentVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05 },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
  scale: {
    scale: 1.05,
    borderColor: "hsl(var(--muted))",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  scaleWithPadding: {
    scale: 1.05,
    padding: "0.5rem",
    borderColor: "hsl(var(--muted))",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  unscale: {
    scale: 1,
    borderColor: "rgba(0,0,0,0)",
    boxShadow: "unset",
  },

  show: {
    opacity: 1,
    x: 0,
  },
  hide: {
    opacity: 0,
    x: -20,
  },
};
