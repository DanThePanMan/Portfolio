import { cn } from "@/utils/utils";

export const TechCard = ({
    className,
    children,
    text,
}: {
    className?: string;
    children: React.ReactNode;
    text?: string;
}) => {
    return (
        <div
            className={cn(
                "w-full mx-auto p-4 rounded-xl border-blue-400 border-2 dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group flex flex-col gap-4 ",
                className
            )}>
            <h2 className="text-2xl font-bold bg-gradient-to-t from-zinc-600 to-black dark:from-zinc-400 dark:to-white dark:text-transparent inline-block bg-clip-text">
                {text}
            </h2>
            <div className="flex flex-row flex-wrap grow-0 gap-3">
                {children}
            </div>
        </div>
    );
};
