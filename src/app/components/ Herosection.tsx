import StatCard from "./StatCard";

export default function Herosection() {
    return(
        <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="flex flex-col gap-5 w-full lg:w-1/2 xl:p-48">
                <h2 className="text-5xl sm:text-6xl">I build fast, clean <span className="text-(--violet) font-mono">digital things.</span></h2>
                <p className="opacity-80 text-md/4">
                    SE student with a passion for good software. From internship projects to personal builds,
                    I care about the details that make products feel right.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row w-full gap-3">
                    <StatCard content="3" contentInfo="Projects shipped" icon="none" />
                    <StatCard content="1" contentInfo="Interships done" icon="X" />
                </div>

                <StatCard title="Internship" content="What did u do?" contentInfo="US media" role="Intern/Junior dev"
                    icon="Circle" period={{ startDate: "Jun 2025", endDate: "Sep 2025" }} />

                <StatCard title="Techstack" icon="none"
                    items={["NextJs", "Typescript", "Tailwind", "VueJs", "Java", "Figma", "Git"]} />
            </div>
        </div>
    )
}