import React from "react";

type ButtonProps = {
    text: string;
    onClick: () => void;
};

const Button = (props: ButtonProps) => {
    return (
        <div className="bg-slate-900 dark:bg-white dark:text-black no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 p-px font-semibold text-white px-4 py-2 w-full sm:w-52 h-14 rounded-2xl text-sm text-center items-center justify-center">
            {props.text}
        </div>
    );
};

export default Button;
