import { FlipWords } from "./FlipWords";

export const TitleCard = () => {
    return (
        <div className="flex flex-col items-start">
            <h1 className="text-6xl font-bold">Hi!👋 My name is Dan,</h1>
            <h1 className="text-6xl font-bold">
                a{" "}
                <FlipWords
                    className="font-bold text-6xl text-blue-500"
                    words={["Front-end", "Back-end", "Full-stack", "Mobile"]}
                    duration={3000}></FlipWords>
                Developer
            </h1>
        </div>
    );
};
