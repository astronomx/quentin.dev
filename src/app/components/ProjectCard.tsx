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
        <div className="flex w-80 flex-col rounded-lg">
            <div className="z-20 bg-background w-fit h-fit py-0.5 px-2 rounded-tr-lg">
                <h2 className="font-bold text-xl text-(--slate-blue)">{title}</h2>
            </div>

            <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="320px"
                    className="object-cover"
                />
            </div>

            <div className="mt-3 flex h-28 w-full flex-col gap-2 text-xs">
                <p className="min-h-0 flex-1 overflow-hidden leading-snug line-clamp-4">{previewText}</p>

                <div className="flex shrink-0 flex-row items-center gap-1 transition-all group">
                    <Link
                        href="/"
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
