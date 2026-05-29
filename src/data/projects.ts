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
    myWork: `I got to help building this project from the ground up which was a great experience to learn from. From planning the stories to actually programming them, I really got to do it all. Something new to me in this project was browser testing with Lighthouse and Browserstack. I was going back and forth with Lighthouse and it's SEO score checking if everything loaded in correctly and if all semantics were correct. With browserstack I made sure the website worked between all widely used browsers available.
      \nIn this project I've worked on the teasers and thier different styling for normal and research related work. Navigation in the main menu and the footer were both fun to build, the styling for different situations showed me the strengths of grid. Among other blocks I worked on I really liked this project, it gave me clear view of what a well structered and production ready project looks like from the inside.`,
    learned: `School can only teach you so much about building a project, setting it up, the notes and what goes into it. Working on it with people with more experience and a broader skillset than you get to learn in another way. I followed the lead of my supervisor and our other colleague, in meetings I would not only write down notes for the project but also what my colleagues asked and what they focused on.
      \nGiving the stories a weight and being a part of that process taught me how to estimate the time a task should take and what to prioritise and when. Not only did I learn how to prioritise my own tasks and work, but also what the client wanted to be prioritised. Attending all meetings listening and watching made me more comfortable asking questions and not just sit at the background just taking notes. Asking these questions gave me a better perspective at the tasks at hand but also any future tasks.
    `
  },
  {
    slug: "plan-internationaal",
    title: "Plan Internationaal",
    image: "/images/planInternationaal.png",
    previewText: `Redesigned the website for a global children's rights organization for a fresher look, clearer information architecture
      and an improved user experience to better reflect their mission.`,
    myWork: `For Plan Internationaal I first just worked on tickets for the project. Mostly simple stuff but directly visible on the pages like layout mistakes or bugs. After a while I got asked to join a colleague with redesigning, a bunch of stuff had to be done. A week after I got briefed about the redesign my colleague had to stay home for a while so I got put on the project alone. This was the first time meeting with a client alone (+ Client Services Director) so it was weird but good. I wrote everything down, asked questions and gave recommendations.
      \nThings like colors, fonts, layouts etc. mainly had to be changed around. Again simple stuff but directly visible which made it super fun to work on and see the immediate changes. The donation form needed new colors and the donation options 'One-time' to 'Monthly' had to change to the corresponding amounts. The quote and carousel needed some touch ups, mainly colorwise but the quote needed a new font too and options.`,
    learned: `The thing I will always take from this project is that I was trusted to handle it on my own. It was some easy stuff but juggling this alongside my other projects was new. I had to remind myself I had other tasks to handle and could not work on the main projects going on. I learned to trust in the capabilities I had not only programming wise but also how I handeld things professionally. Asking the right questions and being an active note taker instead of a quiet voice taught me that my input had value beyond just the code I wrote `
  },
  {
    slug: "defensie",
    title: "Defensie Vibration Detector",
    image: "/images/defensie2.png",
    previewText: `In collabartion with Defensie for a school project we made a vibration detector that upon activation starts recording what happend, and can do AI analys that gives a summary of the audio.`,
    myWork: `I got assigned to the frontend of this project and made a full tactical dashboard. The dashboard is a MVP but a functional and great one. It features a map, event timeline and a tabe for node information and the analyses data.
      \nThe map component displays the location of the nodes that are put into the system. We didn't incoporate a gps in the physical node, since operaters often carry of compass or somethings else for their location I chose to add a menu where can manually add the coordinates of the node.
      \nUnderneath the map there is a event timeline. In this the events are displayed live from newest to oldest. When a event has happend the AI will do a analyses. With this analsys the top result will become the output and is used to display what event has happend and which node this happend at.
      \nThe nodes are interactive. When the 'Node' tab is selected in the node detail panel next to the map, the selected nodes information will be displayed. You can see all recent events of this node, listen to the audio and the status. Click on a audio event will start a AI analyses and will direct you straight to the analys tab.
      \nThis tab has all the info about the events. The audio which again you can play directly in the browser, the outcome of what AI thinks it is with a confidence percentage and a top 5 of sounds it could be with the confidence percentages.
      \nBefore I started coding the dashboard I first created figma designs for mulptiple pages.`,
    learned: `This project I mainly focused on iterating the right way. This meant talking a lot with my team and the product owner. I started from scractch by researching tactical dashboards and design. From this I took inspiration and started creating the wireframes for a multitude of pages.
      \nAfter the designs were done I showed them to my team for feedback, and after the sprint was done I showed them to the product owner which was happy with not only the design but all aspects of it. The colors, layout, fonts etc. were correct and some aspects they already used in their own products. I kept repeating this process of showing all the stuff I made, this really helped me grow by understanding deeper part of the processes you go through in a project.
      \nBeing a creative technologist this semester really got me out of my 'shell', I became more pro-active sharing my toughts and idea's. I was constantly on the look out for things to improve or new things we could maybe use to make the most out of our project. I wasn't just focussing on the programming and improving code but focusing on the product as a whole which gave me a great perspective shift.`
  },
];

/** Projects shown in the homepage projects section (3-column grid). */
export const featuredProjects = projects.slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
