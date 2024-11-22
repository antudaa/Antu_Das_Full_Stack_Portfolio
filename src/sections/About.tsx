'use client';
import { MainCard } from "@/components/ui/MainCard";
import { SectionHeader } from "./SectionHeader";
import BookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import Python from '@/assets/icons/python.svg';
import TypeScript from '@/assets/icons/typescript.svg';
import Java from '@/assets/icons/java.svg';
import NextJS from '@/assets/icons/next-js.svg';
import Redux from '@/assets/icons/redux.svg';
import NodeJS from '@/assets/icons/node.svg';
import ExpressJS from '@/assets/icons/express.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { ToolboxItems } from "@/components/Global/ToolboxItems";
import { GlobeLocation } from "@/components/AceternityUI/GlobeLocation";
import { motion } from "framer-motion";
import { useRef } from "react";
import { CardHeader } from "@/components/Global/CardHeader";

const toolBoxItems = [
  {
    title: 'Python',
    icon: Python,
  },
  {
    title: 'Java',
    icon: Java,
  },
  {
    title: 'Javascript',
    icon: JavascriptIcon,
  },
  {
    title: 'TypeScript',
    icon: TypeScript,
  },
  {
    title: 'HTML5',
    icon: HTMLIcon,
  },
  {
    title: 'CSS3',
    icon: CSSIcon,
  },
  {
    title: 'React',
    icon: ReactIcon,
  },
  {
    title: 'Next.js',
    icon: NextJS,
  },
  {
    title: 'Redux',
    icon: Redux,
  },
  {
    title: 'Node.js',
    icon: NodeJS,
  },
  {
    title: 'Express.js',
    icon: ExpressJS,
  },
  {
    title: 'Github',
    icon: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Football',
    emoji: '⚽',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Music',
    emoji: '🎶',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '⛹️‍♀️',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = () => {

  const constraintRef = useRef(null)

  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* My Reades Card */}
            <MainCard className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover Image" />
              </div>
            </MainCard>

            {/* My Tech ToolBox Card */}
            <MainCard className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to create digital experiences."
              />
              <ToolboxItems
                items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </MainCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* My Hobbies Card */}
            <MainCard className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {
                  hobbies.map(hobby => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))
                }
              </div>
            </MainCard>

            {/* My Location Card */}
            <MainCard className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <span className="text-3xl font-serif max-w-md p-6 flex justify-center items-center text-center mx-auto">
                I am very flexible with time zone communication
              </span>
              <GlobeLocation />
            </MainCard>
          </div>
        </div>
      </div>
    </section>
  );
};
