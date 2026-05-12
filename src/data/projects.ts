export type Project = {
  slug: string;
  title: string;
  image: string;
  previewText: string;
};

export const projects: Project[] = [
  {
    slug: "stichting-hartekind",
    title: "Stichting Hartekind",
    image: "/images/stichtingHartekind.png",
    previewText: `Built a new website for a foundation supporting children with congenital heart defects focused on accessibility,
      storytelling, and making it easy for visitors to donate and get involved.`,
  },
  {
    slug: "aidsfonds",
    title: "Aidsfonds",
    image: "/images/aidsfonds.png",
    previewText: `Built a new website supporting their mission toward a world without AIDS clear information, accessible donation flow,
      and personal stories that move people to act.`,
  },
  {
    slug: "plan-internationaal",
    title: "Plan Internationaal",
    image: "/images/planInternationaal.png",
    previewText: `Redesigned the website for a global children's rights organization for a fresher look, clearer information architecture
      and an improved user experience to better reflect their mission.`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
