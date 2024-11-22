"use client"
import * as React from "react"
import {
  BookOpen,
  Bot,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import logo from "@/assets/logo/letter-a.png";
import Image from "next/image"
import Link from "next/link"

const data = {
  user: {
    name: "Antu Das",
    email: "antu.programmer@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Personal",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Skills",
          url: "/dashboard",
        },
        {
          title: "Personal Details",
          url: "/dashboard",
        },
        {
          title: "Education",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Experience",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Work",
          url: "/dashboard",
        },
        {
          title: "Achievement",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "View Projects",
          url: "/dashboard",
        },
        {
          title: "Add Project",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "All Blogs",
          url: "/dashboard",
        },
        {
          title: "Post Blog",
          url: "/dashboard",
        },
      ],
    },
  ],
  // navSecondary: [
  //   {
  //     title: "Support",
  //     url: "#",
  //     icon: LifeBuoy,
  //   },
  //   {
  //     title: "Feedback",
  //     url: "#",
  //     icon: Send,
  //   },
  // ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image className="size-6" src={logo} alt="Logo" width={100} height={100} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Antu Das</span>
                  <span className="truncate text-xs">Jr. Software Engineer</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
