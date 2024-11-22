'use client';
import React from "react";
import { FloatingDock } from "@/components/AceternityUI/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import { GoProject } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineContactless } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";


export function TestNav() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-teal-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "About",
            icon: (
                <SiAboutdotme className="h-full w-full text-teal-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
        {
            title: "Projects",
            icon: (
                <GoProject className="h-full w-full text-teal-500 dark:text-neutral-300" />
            ),
            href: "#project",
        },
        {
            title: "Contact",
            icon: (
                <MdOutlineContactless className="h-full w-full text-teal-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Linkedin",
            icon: (
                <SlSocialLinkedin className="h-full w-full text-teal-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/antu-antu/",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-teal-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/antudaa",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                mobileClassName="translate-y-10"
                items={links}
            />
        </div>
    );
}
