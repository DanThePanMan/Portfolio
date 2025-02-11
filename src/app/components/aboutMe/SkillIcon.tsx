import { Tooltip } from "react-tooltip";
import { cn } from "../../../utils/utils";
import { ReactNode } from "react";

interface SkillIconProps {
    children: ReactNode;
    name: string;
    id: string;
    className: string;
}

export default function SkillIcon({
    children,
    name,
    id,
    className,
}: SkillIconProps) {
    return (
        <>
            <Tooltip id={id} float>
                {name}
            </Tooltip>
            <div
                data-tooltip-id={id}
                className={cn(
                    "shadow-md p-1 bg-[#67bb4a50] rounded-xl flex justify-center items-center h-10 w-10",
                    className
                )}>
                {children}
            </div>
        </>
    );
}
