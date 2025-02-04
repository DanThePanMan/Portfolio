import { FlipWords } from "./FlipWords";

export const TitleCard = () => {
    return (
        <div className="flex flex-col items-start">
            <h1 className="text-6xl font-bold">Hi!👋 My name is Dan, a</h1>
            <FlipWords
                className="font-bold text-6xl text-blue-500"
                words={[
                    "Front-end Developer",
                    "Back-end Developer",
                    "Full-stack Developer",
                    "Mobile Developer",
                ]}
                duration={3000}></FlipWords>
        </div>
    );
};
