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
                "max-w-sm w-full mx-auto p-6 rounded-xl border-blue-400 border-4 dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group flex flex-col gap-4",
                className
            )}>
            <h2 className="text-2xl font-bold">{text}</h2>
            <div className="flex flex-row flex-wrap grow-0 gap-3">
                {children}
            </div>
        </div>
    );
};
