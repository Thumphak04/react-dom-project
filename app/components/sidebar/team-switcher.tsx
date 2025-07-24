import { useState } from "react";
import { SidebarMenu, SidebarMenuItem } from "~/components/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const [activeTeam] = useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <section className="flex items-center justify-between gap-3 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <img src="/assets/img/logo-png.png" className="size-12 object-contain" />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{activeTeam.name}</span>
            <span className="truncate text-xs">{activeTeam.plan}</span>
          </div>
        </section>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
