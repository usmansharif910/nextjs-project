"use client";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import SidebarDrawer from "@/components/SidebarDrawer";
import { Terminal } from "lucide-react";


const Usman = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        console.log("Button clicked");
        console.log(showAlert);
       setShowAlert((prev) => !prev);
}


    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="text-2xl font-bold">Usman</div>
            
            {/* Alert Button */}
            <Button
                onClick={handleClick}
                className="bg-blue-500 text-white hover:bg-blue-600">
                {showAlert ? "Hide" : "Show"} Alert
            </Button>

            {/* Drawer Component */}
            <SidebarDrawer />

            {/* Alert Display */}
            {showAlert && (
                <div className="fixed top-20 left-0 w-full h-full flex items-center justify-center z-10">
                    <Alert variant="default" className="mt-4">
                        <Terminal />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components and dependencies to your app using the cli.
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
};

export default Usman;