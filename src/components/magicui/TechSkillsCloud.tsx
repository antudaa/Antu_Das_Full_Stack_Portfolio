import IconCloud from "./icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export function TechSkillsCloud() {
    return (
        <div className="relative flex md:h-[600px] md:w-[600px] items-center justify-center overflow-hidden rounded-lg px-8 pb-20">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
