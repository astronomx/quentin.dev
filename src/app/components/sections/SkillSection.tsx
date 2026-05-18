import {
  SiArchlinux,
  SiFigma,
  SiGit,
  SiHyprland,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

const highlightedSkills: { name: string; Icon: IconType }[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "TypeScript", Icon: SiTypescript },
];

const otherSkills: { name: string; Icon: IconType }[] = [
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Git", Icon: SiGit },
  { name: "Figma", Icon: SiFigma },
];

const cellBase =
  "flex aspect-square items-center justify-center border-background-muted p-4";

export default function SkillSection() {
  return (
    <div className="flex justify-center">
      <div className="grid w-fit max-w-full grid-cols-6">
        {highlightedSkills.map(({ name, Icon }, index) => (
          <div
            key={name}
            className={`${cellBase} col-span-2 border-b ${
              index < highlightedSkills.length - 1 ? "border-r" : ""
            }`}
            title={name}
          >
            <Icon className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" aria-hidden />
          </div>
        ))}

        {otherSkills.map(({ name, Icon }) => (
          <div key={name} className={`${cellBase} border-r`} title={name}>
            <Icon className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden />
          </div>
        ))}

        <div className={cellBase} title="Arch Linux / Hyprland">
          <div className="flex flex-row items-center gap-1">
            <SiArchlinux className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden />
            <span className="text-xl opacity-80">X</span>
            <SiHyprland className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
