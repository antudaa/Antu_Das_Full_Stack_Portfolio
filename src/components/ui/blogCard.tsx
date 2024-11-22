import { MainCard } from "./MainCard";
import Image from "next/image";
import CheckCircleIcom from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { IProject } from "@/types";

export const BlogCard = ({ project, index }: { project: IProject; index: number; }) => {
    return (
        <MainCard
            key={project.title}
            className="px-8 md:px-10 pb-0 lg:px-20 pt-8 md:pt-12 lg:pt-16 sticky"
            style={{
                top: `calc(64px + ${index * 40}px)`
            }}
        >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map(result => (
                            <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                                <CheckCircleIcom className='size-5 md:size-6' />
                                <span>{result.title}</span>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={project.link}
                        target="_blank"
                    >
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                            <span>View Live Site</span>
                            <ArrowUpRightIcon className='size-4' />
                        </button>
                    </a>
                </div>
                <div className="relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-2xl"
                    />
                </div>
            </div>
        </MainCard>
    );
};