import StatCard from "./StatCard";

import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Herosection() {
    return(
        <div className="flex flex-col lg:items-center md:flex-row w-full gap-5">
            <div className="flex flex-col gap-5 w-full lg:w-1/2 xl:p-48">
                <h2 className="text-5xl sm:text-6xl">I build fast, clean <span className="text-(--violet) font-mono">digital things.</span></h2>
                <p className="opacity-80 text-md/4">
                    SE student with a passion for good software. From internship projects to personal builds,
                    I care about the details that make products feel right.
                </p>

                <div className="flex flex-row gap-3">
                    <a className="flex flex-row group gap-1 items-center rounded-md px-2 md:px-3 py-1 md:py-2 bg-foreground text-background underline-none
                        border-2 border-foreground ease-in-out transition-colors duration-300 hover:bg-background hover:text-foreground
                        text-xs md:text-lg cursor-pointer"
                        href="/"
                    >
                        View my work
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 text-background transition-colors duration-300 group-hover:text-foreground" />
                    </a>
        
                    <a
                        href="/cv/quentin-resume.pdf"
                        download
                        className="flex group flex-row gap-1 items-center rounded-md px-2 md:px-3 py-1 md:py-2 border-2 border-foreground text-foreground
                            ease-in-out transition-colors duration-300 hover:bg-foreground hover:text-background cursor-pointer
                            text-xs md:text-lg"
                    >
                        Download CV
                        <ArrowDownTrayIcon className="h-4 w-4 text-foreground transition-colors duration-300 group-hover:text-background" />
                    </a>
               
               
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-7/12 lg:p-5">
                <div className="flex flex-col md:flex-row w-full gap-3">
                    <StatCard content="3" contentInfo="Projects shipped" icon="none" />
                    <StatCard content="1" contentInfo="Interships done" icon="X" />
                </div>

                <StatCard title="Internship" content="
                    At US Media I worked on various projects including Aidsfonds, Stichting Hartekind, 
                    and Plan Internationaal. Here, I learned how a project is set up from absolutely nothing, a lot about how important workflows are, 
                    how to handle meetings and how to meet deadlines. The main thing I worked with was Wordpress BUT with a twist. We used ACF Custom fields, 
                    Twig and SCSS (with a little Typescript for logic) to create custom themes and block the NGO's could use all in their in own style.
                    " 
                    contentInfo="US media" role="Intern / Junior dev"
                    icon="Square" period={{ startDate: "Jun 2025", endDate: "Sep 2025" }} />

                <StatCard title="Programming languages / Tools" icon="none"
                    items={["NextJs", "Typescript", "Tailwind", "VueJs", "Java", "SQL", "Figma", "Git", "Linux"]} />
            </div>
        </div>
    )
}