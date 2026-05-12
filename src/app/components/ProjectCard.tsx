import Image from "next/image";
import Link from "next/link";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

type ProjectCardType = {
    title: string,
    previewText: string,
    image: string
}

export default function ProjectCard({title, previewText, image}: ProjectCardType) {
    return (
        <div className="h-56 w-80 rounded-lg flex flex-col">
            <div className="z-20 bg-background w-fit h-fit py-0.5 px-2 rounded-tr-lg">
                <h2 className="font-bold text-xl text-(--slate-blue)">{ title }</h2>
            </div>


            <div className="relative flex flex-col-reverse">
                <Image src={image} alt={`${title}`} height={224} width={320}
                    className="absolute flex-1 rounded-lg border-background-muted group
                        " 
                    />
            </div>

            <div className="flex flex-col text-xs gap-3 w-full h-fit mt-3">
                <p className="">{ previewText }</p>

                <div className="flex flex-row gap-1 items-center group transition-all">
                    <Link
                        href={"/"}
                        className="text-xs underline underline-offset-4
                            rounded-lg drop-shadow-sm cursor-pointer transition-all duration-200"
                    >
                        Go to project 
                    </Link>

                    <ArrowLongRightIcon
                        className="h-5 w-5 text-foreground transition-transform duration-200 group-hover:translate-x-1"
                    />
                </div>
          
            </div>
        </div>
    )
}