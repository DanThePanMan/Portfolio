import { FlipWords } from "./FlipWords";

export const TitleCard = () => {
    return (
        <div className="flex flex-col items-start px-4 sm:px-6 lg:px-8 max-w-full">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-t from-zinc-600 to-black dark:from-zinc-400 dark:to-white dark:text-transparent inline-block bg-clip-text">
                    Hi!
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    👋
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-t from-zinc-600 to-black dark:from-zinc-400 dark:to-white dark:text-transparent inline-block bg-clip-text">
                    My name is Dan,
                </h1>
            </div>
            <div className="mt-2 sm:mt-4 max-w-full overflow-hidden">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-t from-zinc-600 to-black dark:from-zinc-400 dark:to-white dark:text-transparent inline-block bg-clip-text whitespace-nowrap">
                    a{" "}
                    <FlipWords
                        className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-500 whitespace-nowrap pb-4"
                        words={[
                            "Full-stack Developer",
                            "Mobile Developer",
                            "Data Engineer",
                            "Lifelong Learner",
                        ]}
                        duration={3000}></FlipWords>
                </h1>
            </div>
        </div>
    );
};
