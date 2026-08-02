'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  NotepadText,
  Settings,
  SmilePlus,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="mt-5 px-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">Mentally</h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="mt-5 flex gap-0.5 px-8">
          <Link href="/dashboard">
            <SidebarMenuButton
              size="lg"
              isActive={pathname === '/dashboard'}
              className="cursor-pointer"
            >
              <LayoutDashboard />
              <li className="font-bold">Dashboard</li>
            </SidebarMenuButton>
          </Link>

          <Link href="/mood-log">
            <SidebarMenuButton
              size="lg"
              isActive={pathname === '/mood-log'}
              className="cursor-pointer"
            >
              <SmilePlus />
              <li className="font-bold">Mood log</li>
            </SidebarMenuButton>
          </Link>

          <Link href="/assesments">
            <SidebarMenuButton
              size="lg"
              isActive={pathname === '/assesments'}
              className="cursor-pointer"
            >
              <NotepadText />
              <li className="font-bold">Assesments</li>
            </SidebarMenuButton>
          </Link>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mb-5 px-8">
        <Link href="/settings">
          <SidebarMenuButton
            size="lg"
            isActive={pathname === '/settings'}
            className="cursor-pointer"
          >
            <Settings />
            <li className="font-bold">Settings</li>
          </SidebarMenuButton>
        </Link>

        <Card className="bg-sidebar-accent px-2">
          <div className="flex items-center gap-2">
            <Avatar size="lg">
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sidebar-primary">User name</h4>
            </div>
          </div>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
