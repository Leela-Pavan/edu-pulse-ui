import { NavLink, useLocation } from "react-router-dom";
import { Home, QrCode, CheckSquare, BarChart3, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Attendance", href: "/attendance", icon: QrCode },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Profile", href: "/profile", icon: User },
];

export const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full transition-colors duration-200",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon size={20} className={cn(
                "mb-1 transition-all duration-200",
                isActive && "scale-110"
              )} />
              <span className={cn(
                "text-xs font-medium transition-all duration-200",
                isActive ? "font-semibold" : "font-normal"
              )}>
                {item.name}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};