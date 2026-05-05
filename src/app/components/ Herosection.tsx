import StatCard from "./StatCard";

export default function Herosection() {
    return(
        <div className="flex flex-col md:flex-row w-full min-h-dvh bg-warm-amber">
            <div className="flex flex-col gap-5 w-full lg:w-1/2 xl:p-48">
                <h2 className="text-5xl sm:text-6xl">I build fast, clean <span className="text-(--violet) font-mono">digital things.</span></h2>
                <p className="opacity-80 text-md/4">
                    SE student with a passion for good software. From internship projects to personal builds,
                    I care about the details that make products feel right.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatCard title="Projects" titleTop={true} content="6" items={[]} />
              <StatCard title="Interships done" titleTop={false} content="1" items={[]} />
              <StatCard title="Techstack" titleTop={true} content="" items={["NextJs", "Typescript", "Tailwind"]} />
            </div>
        </div>
    )
}