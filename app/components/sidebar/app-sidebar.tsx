import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "~/components/sidebar/nav-main"
import { TeamSwitcher } from "~/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprises",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: BookOpen,
    },
    {
      title: "Reports",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Transactions",
          url: "/admin/transactions",
        },
        {
          title: "Downloads",
          url: "#",
        },
      ],
    },
    {
      title: "Administrasi",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Add New",
          url: "#",
        },
        {
          title: "Upload File",
          url: "#",
        },
      ],
    },
    {
      title: "User Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Add User",
          url: "#",
        },
        {
          title: "Add Role",
          url: "#",
        },
      ],
    },
    {
      title: "Monitoring",
      url: "#",
      icon: BookOpen,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
