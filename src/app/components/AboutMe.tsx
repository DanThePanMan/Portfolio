"use client";
import React from "react";
import { TechCard } from "./TechCard";

export default function AboutMe() {
    return (
        <div className="flex flex-col justify-start items-center gap-16">
            <div className="flex flex-col justify-start items-center gap-6 text-center">
                <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
                    ABOUT ME
                </h1>
                <div className="w-12 h-2 bg-blue-600 rounded-full"></div>
                <p className="text-lg text-gray-800 dark:text-zinc-400 text-justify font-[400]">
                    Here you will find more information about me, including what
                    I do, and my skills
                </p>
            </div>
            <div className="flex flex-row justify-center items-start gap-6">
                <div className="flex flex-col gap-8 items-start justify-start">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                        Get to know me!
                    </h2>
                    <p className="text-lg text-gray-800 dark:text-zinc-400 font-[400] text-pretty leading-8 text-left w-96">
                        Hi there! I&apos;m a software developer based in Ottawa,
                        Ontario, with a passion for transforming creative ideas
                        and designs into dynamic, functional code. Whether
                        it&apos;s web or mobile development, I thrive on the
                        challenge of crafting seamless and intuitive user
                        experiences.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-zinc-400 font-[400] text-pretty leading-8 text-left w-96">
                        I&apos;m always on the lookout for new opportunities to
                        expand my skill set and grow as a developer,
                        continuously pushing the boundaries of what&apos;s
                        possible with technology. Outside of coding, I am an
                        ameture snowboarder, sim racer, someone who&apos;s way
                        to obsessed with keyboards, and an avid builder of model
                        kits
                    </p>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                        My Skills
                    </h2>
                    <TechCard className="w-64">asf</TechCard>
                </div>
            </div>
        </div>
    );
}
