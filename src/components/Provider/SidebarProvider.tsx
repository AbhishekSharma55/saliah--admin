"use client";
import { MenuIcon } from "lucide-react";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "@/components/ui/button";

interface SidebarContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

// Create the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Custom hook to use the sidebar context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// SidebarProvider component
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  useEffect(() => {
    if (window.innerWidth <= 720) {
      toggleSidebar();
    }
    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const SidebarButton = ({ className }: { className?: string }) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant={"ghost"} className={className} size={"icon"}>
      <MenuIcon onClick={toggleSidebar} className="h-6 w-6 cursor-pointer" />
    </Button>
  );
};
