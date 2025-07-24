"use client";

import { Bell } from "lucide-react";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Outlet, useLocation } from "react-router";
import { Breadcrumbs } from "~/components/sidebar/breadcrumbs";

export default function Layout() {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(today);

  const location = useLocation();


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-[999] flex h-16 shrink-0 items-center justify-between bg-[#f37021] px-4 text-white transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          {/* Left side of the header */}
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumbs currentPath={location.pathname} />
          </div>

          {/* Right side of the header */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{formattedDate}</span>
            <Bell className="size-5" />
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User Avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main content area with scroll container */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-auto p-4">
            <div className="mx-auto max-w-full">
              <Outlet />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-4 text-center text-sm bg-blue-600 font-bold py-3 text-white">
          {new Date().getFullYear()} Your Company Name. All rights reserved.
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
