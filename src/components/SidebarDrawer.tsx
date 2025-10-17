"use client";
import { Button } from "@/components/ui/button";
import { 
  Drawer, 
  DrawerContent, 
  DrawerDescription, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger,
  DrawerClose 
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

interface SidebarDrawerProps {
  triggerText?: string;
  title?: string;
  description?: string;
  menuItems?: Array<{
    title: string;
    description: string;
    onClick?: () => void;
  }>;
}

const SidebarDrawer = ({ 
  triggerText = "Show Sidebar",
  title = "Sidebar Menu",
  description = "Navigation menu and options",
  menuItems = [
    {
      title: "Dashboard",
      description: "Overview and analytics"
    },
    {
      title: "Profile", 
      description: "Manage your account"
    },
    {
      title: "Settings",
      description: "App preferences"
    },
    {
      title: "Help",
      description: "Support and documentation"
    }
  ]
}: SidebarDrawerProps) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button className="bg-green-500 text-white hover:bg-green-600">
          <Menu className="w-4 h-4 mr-2" />
          {triggerText}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-80">
        <DrawerHeader className="border-b">
          <div className="flex items-center justify-between">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="sm">
                <X className="w-4 h-4" />
              </Button>
            </DrawerClose>
          </div>
          <DrawerDescription>
            {description}
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer"
                onClick={item.onClick}
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SidebarDrawer;
