"use client";
import React from "react";
import Image from "next/image";
import profile from "../../assets/profile.jpg";

export default function AboutMe() {
    return (
        <div className="flex flex-row justify-center gap-16">
            <Image
                src={profile}
                alt="My Profile Picture"
                className="w-[21rem] h-[21rem] object-cover object-[25%_75%] rounded-full overflow-hidden"></Image>

            <div className="flex flex-col gap-16">
                <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
                    A Litte Bit About Me
                </h1>
                <p className="text-md text-gray-800 dark:text-zinc-400 text-justify w-[60rem] font-semibold">
                    Hi there! I&apos;m a software developer based in Ottawa,
                    Ontario, with a passion for transforming creative ideas and
                    designs into dynamic, functional code. Whether it&apos;s web
                    or mobile development, I thrive on the challenge of crafting
                    seamless and intuitive user experiences. I&apos;m always on
                    the lookout for new opportunities to expand my skill set and
                    grow as a developer, continuously pushing the boundaries of
                    what&apos;s possible with technology. Outside of coding, I
                    am an ameture snowboarder, sim racer, someone who&apos;s way
                    to obsessed with keyboards, and an avid builder of model
                    kits
                </p>
            </div>
        </div>
    );
}
