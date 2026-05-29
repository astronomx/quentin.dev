import Image from "next/image";
import { notFound } from "next/navigation";

import BackButton from "@/app/components/BackButton";
import { getProjectBySlug, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectIdPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div>
      <div className="fixed p-5">
        <BackButton />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-12">
        <h1 className="text-3xl font-bold lg:text-4xl">{project.title}</h1>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-background-muted">
          {/* TODO: Make GIF instead of picture */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>

        <section className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl text-(--violet) italic">My work</h3>
          <p className="whitespace-pre-line text-sm leading-relaxed opacity-90 lg:text-base">
            {project.myWork}
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl text-(--violet) italic">What did I learn?</h3>
          <p className="whitespace-pre-line text-sm leading-relaxed opacity-90 lg:text-base">
            {project.learned}
          </p>
        </section>
      </div>
    </div>
  );
}
