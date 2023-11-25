"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { buttonVariants } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    // <Button
    //   variant="link"
    //   className="border border-background h-4 w-4 border-none bg-transparent"
    //   size="icon"
    //   onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    // >
    //   <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //   <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //   <span className="sr-only">Toggle theme</span>
    // </Button>
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className={buttonVariants({
            size: "icon",
            variant: "link",
            className:
              "h-4 w-4 border border-none border-background bg-transparent",
          })}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </TooltipTrigger>
        <TooltipContent>dark mode &gt; light mode</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
