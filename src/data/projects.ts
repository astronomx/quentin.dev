export type Project = {
  slug: string;
  title: string;
  image: string;
  previewText: string;
  myWork: string;
  learned: string;
};

export const projects: Project[] = [
  {
    slug: "aidsfonds",
    title: "Aidsfonds",
    image: "/images/aidsfonds.png",
    previewText: `Built a new website supporting their mission toward a world without AIDS, clear information, accessible donation flow,
      and personal stories that move people to act.`,
    myWork: `When I started my internship development for Aidsfonds had already started for a bit. Here I got introduced to custom ACF blocks, SCSS and Twig templating. My main tasks were mainly creating new custom blocks Aidsfonds could use to build their website in Wordpress. The blocks I created followed the design that was made, in this design a multitude of components like a CTA, quote or text block were displayed.
      \nThe blocks could have different sizes, colors or other configurations, here is where Twig and SCSS came into play. With twig and it's respective HTML semantics a template was built for a block and it's contents, and with SCSS the different options that were selected could be styled according to what the user had selected in Wordpress.`,
    learned: `Handling feedback from merge requests in the first quarter to half of my internship was a bit weak, handling multiple tickets at once and continuing new work was a lot. This caused me to sometimes not read the feedback I got and process it. I had a talk with my supervisor about this and she told me to check my code well before I put it in a merge request. Because of this I started looking from another perspective to my code before I put it in for review. After this the efficiency only went up and the team and I were able to move a lot quicker because of this.  
    \nMy basics of Git were good, I knew how to use it but there was so much more to learn about keywords, flags and dealing with merge requests. I was taught how to rebase properly, this alone showed me how commits move around. When you mess up a lot can go wrong during rebasing which can be hard at the beginning but it pushed me to understand git and solve it with what it has to offer like resetting, cherry picking and what to handle different situations.
    \nThe biggest shift in how I write code came from learning structure. Before my internship I would just open a div and put the contents inside it without thinking which sometimes would cause a mess and made it unreadable. Looking at existing code I saw structure, multiple classes and logical names. This structure really put in perspective how I could set something up from scratch quickly and understand not only the structure of my code but also components.`
  },
  {
    slug: "stichting-hartekind",
    title: "Stichting Hartekind",
    image: "/images/stichtingHartekind.png",
    previewText: `Built a new website for a foundation supporting children with congenital heart defects focused on accessibility,
      storytelling, and making it easy for visitors to donate and get involved.`,
    myWork: ``,
    learned: ``
  },
  {
    slug: "plan-internationaal",
    title: "Plan Internationaal",
    image: "/images/planInternationaal.png",
    previewText: `Redesigned the website for a global children's rights organization for a fresher look, clearer information architecture
      and an improved user experience to better reflect their mission.`,
    myWork: ``,
    learned: ``
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
