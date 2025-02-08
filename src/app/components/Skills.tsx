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
} from "devicons-react";
import { h2Style } from "../Styles/Styles";

const Skills = () => {
    return (
        <div className="flex flex-col gap-8 items-start justify-start">
            <h2 className={h2Style}>My Skills</h2>
            <TechCard text="Languagues">
                <SkillIcon name="HTML" id="html" className="bg-[#e44d2650]">
                    <Html5Original size="40" />
                </SkillIcon>
                <SkillIcon name="CSS" id="css" className="bg-[#1572b650]">
                    <Css3Original size="40" />
                </SkillIcon>
                <SkillIcon name="JavaScript" id="js" className="bg-[#f0db4f50]">
                    <JavascriptOriginal size="40" />
                </SkillIcon>
                <SkillIcon name="TypeScript" id="ts" className="bg-[#007acc50]">
                    <TypescriptOriginal size="40" />
                </SkillIcon>
                <SkillIcon name="TypeScript" id="ts" className="bg-[#007acc50]">
                    <PythonOriginal size="40" />
                </SkillIcon>
                <SkillIcon name="TypeScript" id="ts" className="bg-[#007acc50]">
                    <JavaOriginal size="40" />
                </SkillIcon>
                <SkillIcon name="SQL" id="sql" className="bg-[#1f65b750]">
                    <AzuresqldatabasePlain size="40" />
                </SkillIcon>
            </TechCard>
            <TechCard text="Front-End">
                <SkillIcon name="React" id="react" className="bg-[#61dafb50]">
                    <ReactOriginal size="40" />
                </SkillIcon>
                <SkillIcon
                    name="Tailwind"
                    id="tailwind"
                    className="bg-[#38bdf850]">
                    <TailwindcssOriginal size="40" />
                </SkillIcon>
                <SkillIcon
                    name="Framer Motion"
                    id="framer"
                    className="transition-all bg-[#ffffff60] dark:bg-[#2d374850]">
                    <FramermotionOriginal size="40" />
                </SkillIcon>
            </TechCard>
        </div>
    );
};

export default Skills;
