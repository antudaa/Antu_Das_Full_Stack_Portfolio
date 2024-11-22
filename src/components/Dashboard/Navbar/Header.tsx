'use client'
import React from 'react';
import navbarimage from '@/assets/images/Antu_Profile_Imge-With_Background.jpg';
import { BsArrowBarUp } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import {
    IoMdNotificationsOutline,
    IoMdInformationCircleOutline,
} from 'react-icons/io';
import avatar from '@/assets/images/Antu_Profile_Image_Without_Background.png';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Dropdown from '@/components/Dropdown';

const Navbar = () => {
    const [darkmode, setDarkmode] = React.useState(
        document.body.classList.contains('dark'),
    );
    return (
        <header
            className={`duration-175 linear left-3 top-3 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/30 transition-all   p-2 backdrop-blur-xl dark:bg-[#0b14374d]  `}
        >
            <div className="flex items-center gap-2 px-4 mt-4">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1 text-zinc-800 dark:text-white" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="block">
                                    <BreadcrumbLink className="" href="#">
                                        Pages
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Home</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <h2 className="text-2xl md:text-3xl text-zinc-800 dark:text-white font-semibold tracking-wide">
                            Admin Dashboard
                        </h2>
                    </div>
                </div>
            </div>

            <div className="relative mt-[3px] flex h-[61px] w-full flex-grow items-center justify-between gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:bg-zinc-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
                <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-zinc-700 dark:text-white xl:w-[225px] border">
                    <p className="pl-3 pr-2 text-xl">
                        <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
                    </p>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-gray-700 outline-none placeholder:!text-gray-400 dark:bg-zinc-700 dark:text-white dark:placeholder:!text-white sm:w-fit"
                    />
                </div>
                <div className='flex gap-2 items-center'>
                    {/* start Notification */}
                    <Dropdown
                        button={
                            <p className="cursor-pointer">
                                <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
                            </p>
                        }
                        animation="origin-[65%_0%] md:origin-top-end transition-all duration-300 ease-in-out"
                        classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
                    >
                        <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-bold text-navy-700 dark:text-white">
                                    Notification
                                </p>
                                <p className="text-sm font-bold text-navy-700 dark:text-white">
                                    Mark all read
                                </p>
                            </div>

                            <button className="flex w-full items-center">
                                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brand-400 to-brand-500 py-4 text-2xl text-white">
                                    <BsArrowBarUp />
                                </div>
                                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                        New Update: Horizon UI Dashboard PRO
                                    </p>
                                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                        A new update for your downloaded item is available!
                                    </p>
                                </div>
                            </button>

                            <button className="flex w-full items-center">
                                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brand-400 to-brand-500 py-4 text-2xl text-white">
                                    <BsArrowBarUp />
                                </div>
                                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                        New Update: Horizon UI Dashboard PRO
                                    </p>
                                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                        A new update for your downloaded item is available!
                                    </p>
                                </div>
                            </button>
                        </div>
                    </Dropdown>
                    {/* start Horizon PRO */}
                    <Dropdown
                        button={
                            <p className="cursor-pointer">
                                <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
                            </p>
                        }
                        classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
                        animation="origin-[75%_0%] md:origin-top-end transition-all duration-300 ease-in-out"
                    >
                        <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                            <div
                                style={{
                                    backgroundImage: `url(${navbarimage.src})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}
                                className="mb-2 aspect-video w-full rounded-lg"
                            />
                            <a
                                target="blank"
                                href="https://horizon-ui.com/pro?ref=live-pro-tailwind-react"
                                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
                            >
                                Buy Horizon UI PRO
                            </a>
                            <a
                                target="blank"
                                href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-pro-tailwind-react"
                                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
                            >
                                See Documentation
                            </a>
                            <a
                                target="blank"
                                href="https://horizon-ui.com/?ref=live-pro-tailwind-react"
                                className="px-full linear hover:bg-black flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
                            >
                                Try Horizon Free
                            </a>
                        </div>
                    </Dropdown>
                    <div
                        className="cursor-pointer text-gray-600"
                        onClick={() => {
                            if (darkmode) {
                                document.body.classList.remove('dark');
                                setDarkmode(false);
                            } else {
                                document.body.classList.add('dark');
                                setDarkmode(true);
                            }
                        }}
                    >
                        {darkmode ? (
                            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
                        ) : (
                            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
                        )}
                    </div>
                    {/* Profile & Dropdown */}
                    <Dropdown
                        button={
                            <Image
                                width="100"
                                height="100"
                                className="size-10 rounded-full border border-zinc-800"
                                src={avatar}
                                alt="Elon Musk"
                            />
                        }
                        classNames={'py-2 top-8 -left-[180px] w-max'}
                    >
                        <div className="flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                            <div className="ml-4 mt-3">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                                        👋 Hey, Adela
                                    </p>{' '}
                                </div>
                            </div>
                            <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                            <div className="ml-4 mt-3 flex flex-col">
                                <a
                                    href=" "
                                    className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                                >
                                    Profile Settings
                                </a>
                                <a
                                    href=" "
                                    className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                                >
                                    Newsletter Settings
                                </a>
                                <a
                                    href=" "
                                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                                >
                                    Log Out
                                </a>
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Navbar;