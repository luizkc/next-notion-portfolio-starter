import { motion } from "framer-motion";
import { bio } from "~/bio";

export function Logo() {
  return (
    <motion.span className="select-none text-foreground hover:cursor-default">
      {`${bio.firstName} ${bio.separator}`}{" "}
      <span className=" font-serif italic text-muted-foreground">
        {bio.lastName}
      </span>
    </motion.span>
  );
}
