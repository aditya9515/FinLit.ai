import { Home, BarChart3, User, Menu } from 'lucide-react';

interface NavigationProps {
  currentView: 'dashboard' | 'profile' | 'home' | 'menu';
  onViewChange: (view: 'dashboard' | 'profile' | 'home' | 'menu') => void;
}

const NAV_ITEMS = [
  { id: 'home' as const, label: 'Home', icon: Home },
  { id: 'dashboard' as const, label: 'Dashboard', icon: BarChart3 },
  { id: 'profile' as const, label: 'Profile', icon: User },
];

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
        
        <button 
          onClick={() => onViewChange('menu')}
          className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-colors ${
            currentView === 'menu'
              ? 'text-primary bg-primary/10' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Menu className="w-5 h-5" />
          <span className="text-xs">Menu</span>
        </button>
      </div>
    </nav>
  );
}