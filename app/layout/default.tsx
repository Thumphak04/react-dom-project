"use client"

import type * as React from "react"
import { Bell } from "lucide-react"
import { AppSidebar } from "~/components/sidebar/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import { Separator } from "~/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Outlet } from "react-router"

export default function Layout() {
  const today = new Date()
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(today)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-[999] flex h-16 shrink-0 items-center justify-between bg-[#f37021] px-4 text-white transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          {/* Left side of the header */}
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Right side of the header */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{formattedDate}</span>
            <Bell className="size-5" />
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
         <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
