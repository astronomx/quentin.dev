export default function Herosection() {
    return(
        <div className="flex flex-col md:flex-row w-full min-h-dvh bg-warm-amber">
            <div className="flex flex-col gap-5 w-full lg:w-1/2 xl:p-48">
                <h2 className="text-5xl sm:text-6xl">I build fast, clean <span className="text-(--violet)">digital things.</span></h2>
                <p className="opacity-80 text-md/4">
                    SE student with a passion for good software. From internship projects to personal builds,
                    I care about the details that make products feel right.
                </p>
            </div>
        </div>
    )
}