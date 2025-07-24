import type * as React from "react"
import { NavMain } from "~/components/sidebar/nav-main"
import { TeamSwitcher } from "~/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "~/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { ChevronRight } from "lucide-react"
import { dataAppSidebar } from "./_data"




export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={dataAppSidebar.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={dataAppSidebar.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
