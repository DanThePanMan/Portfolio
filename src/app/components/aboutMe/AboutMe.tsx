"use client";
import React from "react";
import Button from "../universal/Button";
import Skills from "./Skills";
import { FadeIn } from "../universal/FadeIn";

import { h2Style, textStyle } from "../../Styles/Styles";
import { paragraphStyle } from "../../Styles/Styles";

export default function AboutMe() {
    return (
        <div className="flex flex-col justify-start items-center gap-16 w-full md:w-[70%] 2xl:w-[50%] mx-auto">
            <div className="flex flex-col justify-start items-center gap-6 text-center">
                <FadeIn>
                    <h1 className="text-6xl font-bold bg-gradient-to-t from-zinc-600 to-black dark:from-zinc-400 dark:to-white dark:text-transparent inline-block bg-clip-text">
                        ABOUT ME
                    </h1>
                </FadeIn>
                <FadeIn>
                    <div className="w-12 h-2 bg-blue-600 rounded-full"></div>
                </FadeIn>
                <FadeIn>
                    <p className={textStyle}>
                        Here you will find more information about me, including
                        what I do, and my skills
                    </p>
                </FadeIn>
            </div>
            <div className="flex flex-row justify-center items-start gap-6">
                <div className="flex flex-col gap-8 items-start justify-start basis-[55%]">
                    <FadeIn>
                        <h2 className={h2Style}>Get to know me!</h2>
                    </FadeIn>
                    <FadeIn>
                        <p className={paragraphStyle}>
                            Hi there! I&apos;m a software developer based in
                            Ottawa, Ontario, with a passion for transforming
                            creative ideas and designs into dynamic, functional
                            code. Whether it&apos;s web or mobile development, I
                            thrive on the challenge of crafting seamless and
                            intuitive user experiences.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <p className={paragraphStyle}>
                            I&apos;m always on the lookout for new opportunities
                            to expand my skill set and grow as a developer,
                            continuously pushing the boundaries of what&apos;s
                            possible with technology. Outside of coding, I am an
                            ameture snowboarder, sim racer, someone who&apos;s
                            way to obsessed with keyboards, and an avid builder
                            of model kits
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <p className={paragraphStyle}>
                            I&apos;m open to Job opportunities where I can
                            contribute, learn and grow. If you have a good
                            opportunity that matches my skills and experience
                            then don&apos;t hesitate to contact me.
                        </p>
                    </FadeIn>
                </div>
                <Skills />
            </div>
            <FadeIn>
                <Button
                    text="Contact Me"
                    onClick={() => console.log("clicked")}
                />
            </FadeIn>
        </div>
    );
}
