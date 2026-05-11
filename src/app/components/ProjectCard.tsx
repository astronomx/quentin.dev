import Image from "next/image";
import Link from "next/link";

type ProjectCardType = {
    title: string,
    previewText: string,
    image: string
}

export default function ProjectCard({title, previewText, image}: ProjectCardType) {
    return (
        <div className="h-56 w-80 rounded-lg flex flex-col">
            <h2 className="font-bold text-2xl text-(--slate-blue)">{ title }</h2>


            <div className="relative">
                <Image src={image} alt={`${title}`} height={224} width={320}
                    className="absolute flex-1 rounded-lg border-background-muted group
                        " 
                    />

                <div className="absolute z-10 flex flex-col text-xs gap-3 p-3 bg-white w-full h-fit">
                    <p className="">{ previewText }</p>

                    <Link href={"/"} className="bg-background text-xs py-0.5 px-1 h-fit w-fit
                        rounded-md drop-shadow-sm cursor-pointer"
                    >
                        Go to project 
                    </Link>
                </div>
            </div>
        </div>
    )
}