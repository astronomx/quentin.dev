import Herosection from "./components/Herosection";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Herosection />

      <div className="">
        <ProjectCard title="Stichting Hartekind" previewText="Test text" image="/images/stichtingHartekind.png" />
   
      </div>
    </div>
  );
}
