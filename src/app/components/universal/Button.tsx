import React from "react";

type ButtonProps = {
    text: string;
    onClick: () => void;
};

const Button = (props: ButtonProps) => {
    return (
        <button className="bg-blue-600 dark:bg-white dark:text-gray-800 no-underline flex cursor-pointer hover:opacity-75 transition duration-200 shadow-zinc-900 px-8 py-4 rounded-lg items-center justify-center">
            <p className="font-[400] text-white dark:text-black text-sm lg:text-xl text-center ">
                {props.text}
            </p>
        </button>
    );
};

export default Button;
