import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Timer, Calendar, TrendingUp, Eye, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/timer', icon: Timer, label: 'Timer' },
    { path: '/planner', icon: Calendar, label: 'Planner' },
    { path: '/progress', icon: TrendingUp, label: 'Progress' },
    { path: '/dsa', icon: Code2, label: 'DSA' },
    { path: '/wellness', icon: Eye, label: 'Wellness' },
  ];

  return (
    <div className="min-h-screen gradient-soft">
      {/* Main Content */}
      <main className="pb-20 md:pb-6">{children}</main>

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden glass-card border-t z-50">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center justify-center flex-1 h-full"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent/10 rounded-xl"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <Icon
                  className={`w-6 h-6 relative transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                />
                <span
                  className={`text-xs mt-1 relative transition-colors ${
                    isActive ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Side Navigation - Desktop */}
      <nav className="hidden md:block fixed top-0 left-0 h-screen w-20 glass-card border-r z-50">
        <div className="flex flex-col items-center py-8 space-y-8">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg">
            FF
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabDesktop"
                    className="absolute inset-0 -left-1 w-1 bg-primary rounded-r"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-accent/10 text-muted-foreground'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="absolute left-full ml-2 px-2 py-1 bg-card rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm pointer-events-none">
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Content Padding */}
      <div className="hidden md:block md:ml-20" />
    </div>
  );
};

export default Layout;
