import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "View My Projects", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        // Changed w-32 to w-56 to fit "View My Projects"
        "group relative w-44 cursor-pointer overflow-hidden rounded-lg border bg-white dark:bg-white/5 backdrop-blur-md py-[0.55rem] text-center font-medium text-[0.85rem] border-black/10 dark:border-white/10",
        className
      )}
      {...props}
    >
      {/* Initial Text */}
      <span className="inline-block text-black dark:text-white transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>

      {/* Hover Text & Icon */}
      <div className="absolute top-0 z-10 flex h-full w-full -translate-x-4 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
        <span className="text-white dark:text-black">{text}</span>
        <ArrowRight className="h-5 w-5 dark:text-black" />
      </div>

      {/* Expanding Background Circle */}
      <div className="absolute -left-[5%] top-[100%] h-2 w-2 scale-[6] rounded-lg bg-black dark:bg-gray-300 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-black dark:group-hover:bg-gray-300"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };