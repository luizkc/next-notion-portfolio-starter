"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

import { buttonVariants } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface CopyCodeProps {
  code: string;
}

export function CopyCode({ code }: CopyCodeProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    return () => clearTimeout(timeoutId); // cleanup function to prevent memory leaks
  }, [copied]);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <CopyToClipboard onCopy={() => setCopied(true)} text={code}>
          <TooltipTrigger
            aria-label="copy code"
            className={buttonVariants({
              size: "icon",
              variant: "link",
              className: "absolute right-0",
            })}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {!copied && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Copy className="text-white" size={16} />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              {copied && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Check className="text-white" size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </TooltipTrigger>
        </CopyToClipboard>
        <TooltipContent>
          <span className="font-sans">Copy</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
