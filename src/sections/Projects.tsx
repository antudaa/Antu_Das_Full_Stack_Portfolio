import athloBlitzImage from "@/assets/images/Athlo_Blitz_Image.png";
import bitNftImage from "@/assets/images/Bit_NFT_Project_Image.png";
import webGlPortfolioImage from "@/assets/images/Portfolio_Image.png";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";


const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Athlo Blitz",
    results: [
      { title: "Streamlined facility management with React + TypeScript, boosting efficiency by 45%" },
      { title: "Improved user engagement through responsive design, increasing mobile traffic by 30%" },
      { title: "Reduced page load times by 50% with Vite and optimized performance" },
    ],
    link: "https://athloblitz.vercel.app/",
    image: athloBlitzImage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Bit NFT",
    results: [
      { title: "Implemented Firebase Authentication and Google OAuth for Secure Login" },
      { title: "Dynamic Blog Management with Admin Approval System" },
      { title: "Seamless Theming with Light/Dark Modes and Daisy UI Customization" },
    ],
    link: "https://nft-collection-project.web.app/",
    image: bitNftImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "WebGL Portfolio",
    results: [
      { title: "Interactive 3D Animations with WebGL" },
      { title: "Seamless User Experience with React and Three.js Integration" },
      { title: "Optimized Performance for High-Fidelity Graphics" },
    ],
    link: "https://antuprofile.netlify.app/",
    image: webGlPortfolioImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {
            portfolioProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))
          }
        </div>
      </div>
    </section>
  );
};
