import React from "react";
import { TechCard } from "./TechCard";
import SkillIcon from "./SkillIcon";
import {
    Html5Original,
    Css3Original,
    JavascriptOriginal,
    TypescriptOriginal,
    PythonOriginal,
    JavaOriginal,
    AzuresqldatabasePlain,
    ReactOriginal,
    TailwindcssOriginal,
    FramermotionOriginal,
    ExpressOriginal,
    NextjsOriginal,
    MongodbOriginal,
    GitOriginal,
    WebpackOriginal,
    FigmaOriginal,
    PostgresqlOriginal,
    PrismaOriginal,
    VscodeOriginal,
    JestPlain,
    NpmOriginalWordmark,
    VitejsOriginal,
    GithubOriginal,
    VercelOriginal,
    NodejsOriginal,
} from "devicons-react";
import { h2Style } from "../../Styles/Styles";
import { FadeIn } from "../universal/FadeIn";

//todo: add the hover effect on the card to display some cool pop up animation with mini icons

const Skills = () => {
    return (
        <div className="flex flex-col gap-8 items-start justify-start basis-[35%]">
            <FadeIn>
                <h2 className={h2Style}>My Skills</h2>
            </FadeIn>
            <FadeIn>
                <TechCard text="Languagues">
                    <SkillIcon name="HTML" id="html" className="bg-[#e44d2650]">
                        <Html5Original size="25" />
                    </SkillIcon>
                    <SkillIcon name="CSS" id="css" className="bg-[#1572b650]">
                        <Css3Original size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="JavaScript"
                        id="js"
                        className="bg-[#f0db4f50]">
                        <JavascriptOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="TypeScript"
                        id="ts"
                        className="bg-[#007acc50]">
                        <TypescriptOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon name="Python" id="py" className="bg-[#007acc50]">
                        <PythonOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon name="Java" id="java" className="bg-[#cf543e50]">
                        <JavaOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon name="SQL" id="sql" className="bg-[#1f65b750]">
                        <AzuresqldatabasePlain size="25" />
                    </SkillIcon>
                </TechCard>
            </FadeIn>

            <FadeIn>
                <TechCard text="Frameworks and Libraries">
                    <SkillIcon
                        name="React"
                        id="react"
                        className="bg-[#61dafb50]">
                        <ReactOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Tailwind"
                        id="tailwind"
                        className="bg-[#38bdf850]">
                        <TailwindcssOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Node Js"
                        id="nd"
                        className="transition-all dark:bg-[#395a4b50]">
                        <NodejsOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Express JS"
                        id="xp"
                        className="transition-all bg-[#ffffff60] dark:bg-[#5d647050]">
                        <ExpressOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Next JS"
                        id="njs"
                        className="transition-all bg-[#ffffff60] dark:bg-[#2d374850]">
                        <NextjsOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Framer Motion"
                        id="framer"
                        className="transition-all bg-[#ffffff60] dark:bg-[#2d374850]">
                        <FramermotionOriginal size="25" />
                    </SkillIcon>
                </TechCard>
            </FadeIn>
            <FadeIn>
                <TechCard text="Technologies">
                    <SkillIcon name="git" id="git" className="bg-[#f89e3850]">
                        <GitOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon name="git" id="git" className="bg-[#52525250]">
                        <GithubOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Webpack"
                        id="wbp"
                        className="bg-[#389bf850]">
                        <WebpackOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Figma"
                        id="figma"
                        className="bg-[#ffffff60] dark:bg-[#2d374850]">
                        <FigmaOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="PostgreSQL"
                        id="pg"
                        className=" bg-[#5671a050]">
                        <PostgresqlOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Prisma"
                        id="prisma"
                        className=" bg-[#222a3850]">
                        <PrismaOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="MongoDB"
                        id="mongo"
                        className="transition-all bg-[#82bb9360] dark:bg-[#2d483450]">
                        <MongodbOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Vs code"
                        id="vs"
                        className="transition-all  bg-[#2d314850]">
                        <VscodeOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Jest"
                        id="jest"
                        className="transition-all  bg-[#b85f6c50]">
                        <JestPlain size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Npm"
                        id="npm"
                        className="transition-all  bg-[#d63b5250]">
                        <NpmOriginalWordmark size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Vite"
                        id="vite"
                        className="transition-all  bg-[#b73bd650]">
                        <VitejsOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Vercel"
                        id="vercel"
                        className="transition-all  bg-[#61616150]">
                        <VercelOriginal size="25" />
                    </SkillIcon>
                </TechCard>
            </FadeIn>
        </div>
    );
};

export default Skills;
