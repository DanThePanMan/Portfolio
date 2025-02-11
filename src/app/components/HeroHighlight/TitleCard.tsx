import { FlipWords } from "./FlipWords";

export const TitleCard = () => {
    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-row">
                <h1 className="text-7xl font-bold bg-gradient-to-t from-zinc-600 to-black dark:from-zinc-400 dark:to-white dark:text-transparent inline-block bg-clip-text">
                    Hi!
                </h1>
                <h1 className="text-7xl font-bold ">👋</h1>
                <h1 className="text-7xl font-bold bg-gradient-to-t from-zinc-600 to-black dark:from-zinc-400 dark:to-white dark:text-transparent inline-block bg-clip-text">
                    My name is Dan,
                </h1>
            </div>
            <h1 className="text-7xl font-bold bg-gradient-to-t from-zinc-600 to-black dark:from-zinc-400 dark:to-white dark:text-transparent inline-block bg-clip-text">
                a{" "}
                <FlipWords
                    className="font-bold text-7xl text-blue-500"
                    words={["Front-end", "Back-end", "Full-stack", "Mobile"]}
                    duration={3000}></FlipWords>
                Developer
            </h1>
        </div>
    );
};
