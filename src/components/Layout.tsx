import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Network, Layers, Server, Radio, Cable, Globe, Lock, FileText, Home, Award } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";

interface LayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { path: "/", label: "Introduction", icon: Home },
  { path: "/layer-7", label: "Layer 7: Application", icon: Globe },
  { path: "/layer-6", label: "Layer 6: Presentation", icon: Lock },
  { path: "/layer-5", label: "Layer 5: Session", icon: Lock },
  { path: "/layer-4", label: "Layer 4: Transport", icon: Server },
  { path: "/layer-3", label: "Layer 3: Network", icon: Network },
  { path: "/layer-2", label: "Layer 2: Data Link", icon: Layers },
  { path: "/layer-1", label: "Layer 1: Physical", icon: Cable },
  { path: "/reverse-path", label: "Receiving Reply", icon: FileText },
  { path: "/credits", label: "Credits", icon: Award },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="h-6 w-6 text-primary animate-pulse" />
            <h1 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Email Journey — OSI Model
            </h1>
          </div>
          <HeaderNav />
        </div>
      </header>

      <div className="container flex gap-6 py-6">
        <aside className="hidden lg:block w-64 shrink-0">
          <nav className="sticky top-24 space-y-1">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
                  )}
                >
                  <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-md border-2",
                    isActive ? "border-primary bg-primary/10" : "border-border"
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      <style>{`
        @media print {
          header, aside { display: none; }
          main { margin: 0; padding: 0; }
        }
      `}</style>
    </div>
  );
};
