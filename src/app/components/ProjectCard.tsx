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
        <div className="flex w-full flex-col rounded-lg">
            <div className="z-20 w-fit rounded-tr-lg bg-background px-2 py-0.5 lg:px-3 lg:py-1">
                <h2 className="text-xl font-bold text-(--slate-blue) lg:text-2xl">{title}</h2>
            </div>

            <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-lg sm:h-[220px] lg:h-[280px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

            <div className="mt-3 flex h-28 w-full flex-col gap-2 text-xs lg:h-36 lg:gap-3 lg:text-sm">
                <p className="min-h-0 flex-1 overflow-hidden leading-snug line-clamp-4 lg:line-clamp-5">{previewText}</p>

                <div className="flex shrink-0 flex-row items-center gap-1 transition-all group">
                    <Link
                        href="/"
                        className="text-xs underline underline-offset-4 rounded-lg drop-shadow-sm transition-all duration-200
                            cursor-pointer lg:text-sm"
                    >
                        Go to project
                    </Link>

                    <ArrowLongRightIcon
                        className="h-5 w-5 text-foreground transition-transform duration-200 group-hover:translate-x-1 lg:h-6 lg:w-6"
                    />
                </div>
            </div>
        </div>
    )
}
