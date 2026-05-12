type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectIdPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-12">
      <h1 className="text-3xl font-bold">{slug}</h1>
      <p className="text-sm opacity-70">Project page placeholder.</p>
    </div>
  );
}
