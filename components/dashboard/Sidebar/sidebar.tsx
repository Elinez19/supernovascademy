import {
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarContent>
        <SidebarHeader>
          <Image
            src="/supernovas-logo.png"
            alt="Supernovas Academy Logo"
            width={180}
            height={180}
            className="h-10 w-auto md:h-12 -mr-4"
            priority
          />
        </SidebarHeader>
      </SidebarContent>
    </SidebarProvider>
  );
};

export default Sidebar;
