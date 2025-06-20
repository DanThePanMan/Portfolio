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
    PostgresqlOriginal,
    PrismaOriginal,
    JestPlain,
    NpmOriginalWordmark,
    VitejsOriginal,
    GithubOriginal,
    VercelOriginal,
    NodejsOriginal,
    FlaskOriginal,
    AzureOriginal,
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
            <FadeIn addedStyles=" flex-grow self-stretch">
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

            <FadeIn addedStyles=" flex-grow self-stretch">
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
                        name="Prisma"
                        id="prisma"
                        className=" bg-[#222a3850]">
                        <PrismaOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Framer Motion"
                        id="framer"
                        className="transition-all bg-[#ffffff60] dark:bg-[#2d374850]">
                        <FramermotionOriginal size="25" />
                    </SkillIcon>
                </TechCard>
            </FadeIn>
            <FadeIn addedStyles=" flex-grow self-stretch">
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
                        name="PostgreSQL"
                        id="pg"
                        className=" bg-[#5671a050]">
                        <PostgresqlOriginal size="25" />
                    </SkillIcon>

                    <SkillIcon
                        name="MongoDB"
                        id="mongo"
                        className="transition-all bg-[#82bb9360] dark:bg-[#2d483450]">
                        <MongodbOriginal size="25" />
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
                    <SkillIcon
                        name="Azure"
                        id="azure"
                        className="transition-all  bg-[#5b9ff850]">
                        <AzureOriginal size="25" />
                    </SkillIcon>
                    <SkillIcon
                        name="Snowflake"
                        id="snowflake"
                        className="transition-all  bg-[#5b9ff850]">
                        <svg
                            height="1.5em"
                            viewBox="0 0 24 24"
                            width="2em"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Snowflake</title>
                            <path
                                clipRule="evenodd"
                                d="M23.252 10.365l-2.843 1.636 2.843 1.631a1.47 1.47 0 01.697.903 1.492 1.492 0 01-.15 1.135c-.202.342-.53.591-.912.693a1.498 1.498 0 01-1.132-.15l-5.09-2.924a1.473 1.473 0 01-.68-.851 1.446 1.446 0 01-.068-.485 1.5 1.5 0 01.745-1.248l5.09-2.921a1.496 1.496 0 012.044.547 1.479 1.479 0 01-.544 2.034zm-2.692 7.927l-5.087-2.92a1.477 1.477 0 00-.867-.195 1.478 1.478 0 00-.982.468c-.257.276-.4.639-.403 1.017v5.847A1.49 1.49 0 0014.718 24c.828 0 1.497-.668 1.497-1.491v-3.27l2.849 1.636a1.493 1.493 0 002.044-.544 1.49 1.49 0 00-.548-2.04zm-5.87-5.719l-2.116 2.102a.42.42 0 01-.265.112h-.621a.427.427 0 01-.265-.112l-2.115-2.102a.42.42 0 01-.11-.262v-.62a.43.43 0 01.11-.265l2.114-2.102a.426.426 0 01.264-.11h.623a.422.422 0 01.265.11l2.116 2.102a.43.43 0 01.109.265v.62a.428.428 0 01-.11.262zM13 11.99a.442.442 0 00-.113-.266l-.612-.607a.431.431 0 00-.266-.11h-.024a.426.426 0 00-.264.11l-.612.607a.436.436 0 00-.107.266v.024c0 .085.047.202.107.262l.612.61c.061.06.179.11.264.11h.024a.434.434 0 00.266-.11l.612-.61a.429.429 0 00.112-.262v-.024zM3.436 5.704l5.089 2.924c.274.157.578.219.868.195.375-.026.726-.194.983-.47.256-.275.4-.64.403-1.017V1.489C10.78.667 10.11 0 9.284 0c-.829 0-1.498.667-1.498 1.49v3.27l-2.85-1.639a1.496 1.496 0 00-2.045.546 1.489 1.489 0 00.546 2.037zm11.17 3.119c.29.024.594-.038.866-.195l5.087-2.923a1.474 1.474 0 00.697-.903 1.496 1.496 0 00-.149-1.135 1.496 1.496 0 00-2.044-.545L16.215 4.76V1.489C16.215.667 15.546 0 14.718 0c-.83 0-1.497.667-1.497 1.49v5.845a1.491 1.491 0 001.385 1.487zm-5.213 6.354a1.479 1.479 0 00-.868.194l-5.089 2.92a1.476 1.476 0 00-.696.905 1.498 1.498 0 00.148 1.135 1.496 1.496 0 002.044.543l2.851-1.636v3.27c0 .825.67 1.491 1.498 1.491.826 0 1.496-.667 1.496-1.49v-5.847a1.5 1.5 0 00-.401-1.017 1.477 1.477 0 00-.982-.468zm-1.38-2.74c.05-.156.072-.32.068-.484a1.497 1.497 0 00-.751-1.248l-5.084-2.92a1.499 1.499 0 00-2.045.547 1.481 1.481 0 00.549 2.034l2.841 1.636L.75 13.633a1.47 1.47 0 00-.698.903 1.492 1.492 0 00.15 1.135c.202.343.53.592.912.693.382.102.789.048 1.132-.15l5.086-2.924c.345-.195.577-.505.684-.852z"
                                fill="#249EDC"
                                fillRule="evenodd"></path>
                        </svg>
                    </SkillIcon>
                    <SkillIcon
                        name="Dagster"
                        id="dagster"
                        className="transition-all  bg-[#6932e750]">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 560 560"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M221.556 440.815C221.562 442.771 221.97 444.704 222.757 446.494C223.543 448.285 224.689 449.894 226.125 451.221C227.56 452.548 229.254 453.565 231.1 454.208C232.946 454.851 234.905 455.107 236.854 454.959C310.941 449.655 380.913 397.224 403.252 315.332C404.426 310.622 407.96 308.26 412.669 308.26C415.082 308.357 417.36 309.402 419.009 311.168C420.658 312.933 421.545 315.278 421.477 317.694C421.477 335.953 398.006 383.674 364.442 411.368C362.731 412.807 361.367 414.614 360.452 416.654C359.536 418.694 359.092 420.914 359.154 423.149C359.188 424.967 359.58 426.76 360.308 428.425C361.036 430.091 362.086 431.596 363.397 432.855C364.708 434.114 366.254 435.101 367.948 435.761C369.641 436.421 371.448 436.739 373.264 436.699C376.205 436.699 380.913 434.931 386.795 429.627C410.266 408.412 455 348.909 455 283.508C455 187.624 380.872 105 277.418 105C185.106 105 105.138 180.414 105.138 267.611C105.138 325.345 151.004 368.937 211.56 368.937C258.019 368.937 300.945 335.953 312.708 290.58C313.881 285.87 317.402 283.508 322.11 283.508C324.525 283.606 326.804 284.65 328.455 286.415C330.106 288.181 330.996 290.525 330.933 292.942C330.933 313.564 292.122 385.484 213.327 385.484C194.509 385.484 170.996 380.18 154.524 370.746C152.319 369.677 149.917 369.075 147.469 368.978C145.594 368.906 143.725 369.223 141.979 369.909C140.232 370.594 138.647 371.634 137.321 372.962C135.996 374.291 134.96 375.879 134.278 377.627C133.596 379.376 133.283 381.247 133.359 383.122C133.435 385.524 134.123 387.867 135.357 389.929C136.592 391.991 138.332 393.703 140.414 394.904C162.173 407.334 188.047 413.757 214.501 413.757C280.359 413.757 340.335 368.978 357.98 302.997C359.154 298.287 362.688 295.926 367.383 295.926C369.797 296.023 372.077 297.067 373.728 298.832C375.379 300.598 376.269 302.943 376.205 305.359C376.205 332.459 327.992 419.655 235.087 426.727C231.492 426.994 228.123 428.579 225.625 431.18C223.128 433.78 221.679 437.211 221.556 440.815V440.815Z"
                                fill="#4F43DD"
                            />
                            <path
                                d="M313.62 215.178C326.301 215.083 338.748 218.589 349.517 225.288C350.605 219.33 351.206 213.292 351.312 207.236C351.312 179.266 329.995 154.211 304.038 154.211C283.853 154.211 271.233 170.937 271.233 191.6C271.137 202.763 275.057 213.588 282.279 222.098C292.062 217.431 302.782 215.064 313.62 215.178V215.178Z"
                                fill="white"
                            />
                            <path
                                d="M374.439 316.505C378.042 304.185 379.63 295.635 379.63 290.083C379.52 287.685 378.493 285.421 376.761 283.76C375.028 282.099 372.724 281.168 370.325 281.16C368.089 281.202 365.932 281.99 364.196 283.399C362.46 284.808 361.244 286.757 360.743 288.936C359.762 292.983 357.664 303.95 355.593 310.912C356.449 308.306 357.231 305.658 357.94 302.97C359.114 298.246 362.648 295.898 367.342 295.898C369.756 295.991 372.035 297.033 373.687 298.796C375.338 300.559 376.228 302.902 376.165 305.318C376.054 309.115 375.446 312.881 374.356 316.519L374.439 316.505Z"
                                fill="#352D8E"
                            />
                            <path
                                d="M424.418 303.632C424.305 301.237 423.278 298.977 421.55 297.317C419.821 295.658 417.522 294.724 415.126 294.709C412.893 294.754 410.739 295.543 409.006 296.952C407.272 298.36 406.059 300.308 405.558 302.485C404.564 306.629 402.424 317.761 400.325 324.709H400.422C401.444 321.615 402.396 318.48 403.183 315.289C404.357 310.565 407.891 308.217 412.599 308.217C415.012 308.311 417.29 309.353 418.939 311.116C420.588 312.88 421.475 315.223 421.408 317.637C421.341 320.569 420.938 323.485 420.207 326.325C423.134 316.049 424.418 308.618 424.418 303.632Z"
                                fill="#352D8E"
                            />
                            <path
                                d="M313.619 215.178C319.921 215.166 326.196 216.007 332.272 217.678C335.462 213.326 337.056 208.008 336.786 202.618C336.516 197.228 334.398 192.095 330.789 188.084C327.18 184.073 322.3 181.428 316.97 180.594C311.64 179.761 306.185 180.789 301.524 183.507L311.189 199.419L293.089 191.587C290.637 195.545 289.407 200.139 289.555 204.793C289.702 209.446 291.22 213.953 293.917 217.747C300.34 216.016 306.967 215.152 313.619 215.178V215.178Z"
                                fill="#030615"
                            />
                            <path
                                d="M174.172 317.583C181.797 317.583 187.979 311.399 187.979 303.771C187.979 296.143 181.797 289.959 174.172 289.959C166.547 289.959 160.365 296.143 160.365 303.771C160.365 311.399 166.547 317.583 174.172 317.583Z"
                                fill="#352D8E"
                            />
                            <path
                                d="M174.172 262.335C181.797 262.335 187.979 256.151 187.979 248.523C187.979 240.895 181.797 234.711 174.172 234.711C166.547 234.711 160.365 240.895 160.365 248.523C160.365 256.151 166.547 262.335 174.172 262.335Z"
                                fill="#352D8E"
                            />
                            <path
                                d="M146.558 289.958C154.183 289.958 160.364 283.774 160.364 276.146C160.364 268.518 154.183 262.334 146.558 262.334C138.932 262.334 132.751 268.518 132.751 276.146C132.751 283.774 138.932 289.958 146.558 289.958Z"
                                fill="#352D8E"
                            />
                            <path
                                d="M208.688 368.91H211.45C257.909 368.91 300.835 335.927 312.598 290.554C313.771 285.844 317.292 283.482 322 283.482C324.415 283.579 326.694 284.624 328.345 286.389C329.996 288.155 330.886 290.499 330.823 292.916C330.612 297.737 329.522 302.479 327.606 306.908C327.939 306.393 328.23 305.853 328.476 305.292C331.969 297.304 333.774 288.679 333.777 279.96C333.777 266.41 324.361 257.571 310.844 257.571C287.276 257.571 282.554 278.151 272.614 300.154C262.3 322.999 243.357 347.709 195.586 347.709C145.951 347.709 94.9487 312.944 107.389 242.253C107.54 241.369 107.665 240.582 107.761 239.85C105.939 248.982 105.014 258.272 105 267.584C105.138 324.491 149.582 367.585 208.688 368.91Z"
                                fill="#352D8E"
                            />
                        </svg>
                    </SkillIcon>
                </TechCard>
            </FadeIn>
        </div>
    );
};

export default Skills;
