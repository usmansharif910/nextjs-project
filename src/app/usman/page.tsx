"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import SidebarDrawer from "@/components/SidebarDrawer";
import { Terminal } from "lucide-react";


const Usman = () => {
    const { toast } = useToast();

    const handleClick = () => {
        console.log("Button clicked");
        toast({
            title: "Heads up!",
            description: "You can add components and dependencies to your app using the cli.",
        });
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="text-2xl font-bold">Usman</div>
            
            {/* Toast Button */}
            <Button
                onClick={handleClick}
                className="bg-blue-500 text-white hover:bg-blue-600">
                Show Toast
            </Button>

            {/* Drawer Component */}
            <SidebarDrawer />
        </div>
    );
};

export default Usman;