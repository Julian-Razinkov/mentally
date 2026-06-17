import {
  Sidebar,
  SidebarHeader,
  SidebarProvider,
} from '@/components/ui/sidebar';

export default function Dashboard() {
  return (
    <div>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <h1>Dashboard</h1>
          </SidebarHeader>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}
