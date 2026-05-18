import { SiNextdotjs, 
    SiTailwindcss, 
    SiSupabase, 
    SiTypescript, 
    SiPostgresql, 
    SiArchlinux, 
    SiFigma, 
    SiVuedotjs,
    SiGit,
    SiHyprland
 } 
from "react-icons/si"

export default function SkillSection() {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="flex flex-row gap-10">
                <SiNextdotjs className="w-48 h-48" />
                <SiTailwindcss className="w-48 h-48" />
                <SiTypescript className="w-48 h-48" />
            </div>

            <div className="flex flex-row gap-10">
                <SiVuedotjs className="w-20 h-20" />
                <SiSupabase className="w-20 h-20" />
                <SiPostgresql className="w-20 h-20" />
                <SiGit className="w-20 h-20" />
                <SiFigma className="w-20 h-20" />

                <div className="flex flex-row items-center">
                    <SiArchlinux className="w-20 h-20" />
                    <p className="text-3xl">/</p>
                    <SiHyprland className="w-20 h-20" />
                </div>
            </div>
        </div>
    )
}