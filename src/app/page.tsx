import AboutMe from "./components/AboutMe";
import CursorDot from "./components/CursorDot";
import { FadeIn } from "./components/FadeIn";
import { HeroHighlight } from "./components/HeroHighlight";
import { TechCard } from "./components/TechCard";
import { TitleCard } from "./components/TitleCard";
import { TitleToBody } from "./components/TitleToBody";

export default function Home() {
    return (
        <>
            <HeroHighlight className="h-screen flex items-center justify-center">
                <FadeIn>
                    <TitleCard />
                </FadeIn>
            </HeroHighlight>
            <FadeIn>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    className="fill-black dark:fill-white absolute bottom-0 left-0 right-0 mx-auto mb-4 animate-bounce"
                    viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                    />
                </svg>
            </FadeIn>
            <TitleToBody />
            <div className="p-32 flex flex-col justify-start items-center">
                <FadeIn>
                    <AboutMe />
                </FadeIn>
                <FadeIn>
                    <button className="bg-blue-500 text-white dark:bg-white dark:text-black rounded-2xl px-8 py-5 hover:opacity-65 transition-all ease-in-out duration-300 text-sm font-semibold">
                        Get In Touch
                    </button>
                </FadeIn>
            </div>
            <div className="h-screen flex flex-row justify-center">
                <FadeIn>
                    <TechCard>asdfasdf</TechCard>
                </FadeIn>
            </div>
        </>
    );
}
