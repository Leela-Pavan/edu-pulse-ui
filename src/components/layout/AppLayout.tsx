import { ReactNode } from "react";
import { BottomNavigation } from "./BottomNavigation";

interface AppLayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
}

export const AppLayout = ({ children, hideNavigation = false }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main className={cn(
        "pb-16 min-h-screen",
        !hideNavigation && "pb-16"
      )}>
        {children}
      </main>
      {!hideNavigation && <BottomNavigation />}
    </div>
  );
};

// Import cn function
import { cn } from "@/lib/utils";