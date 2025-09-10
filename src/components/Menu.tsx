import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Settings, 
  HelpCircle, 
  FileText, 
  Star, 
  Share2, 
  Download,
  Moon,
  Users,
  Target,
  TrendingUp,
  Calculator,
  PieChart,
  LogOut
} from 'lucide-react';

interface MenuProps {
  selectedPersona: string;
  onLogout: () => void;
}

const MENU_SECTIONS = [
  {
    title: 'Quick Actions',
    items: [
      { icon: Target, label: 'Set Financial Goal', action: 'goal' },
      { icon: Calculator, label: 'Expense Calculator', action: 'calculator' },
      { icon: TrendingUp, label: 'View Reports', action: 'reports' },
      { icon: PieChart, label: 'Budget Planner', action: 'budget' }
    ]
  },
  {
    title: 'Account',
    items: [
      { icon: Users, label: 'Switch Persona', action: 'persona' },
      { icon: Settings, label: 'Settings', action: 'settings' },
      { icon: Download, label: 'Export Data', action: 'export' }
    ]
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', action: 'help' },
      { icon: FileText, label: 'Privacy Policy', action: 'privacy' },
      { icon: Star, label: 'Rate App', action: 'rate' },
      { icon: Share2, label: 'Share App', action: 'share' }
    ]
  }
];

const PERSONA_OPTIONS = [
  { id: 'student', label: 'Student', color: 'bg-blue-500' },
  { id: 'gig-worker', label: 'Gig Worker', color: 'bg-green-500' },
  { id: 'first-earner', label: 'First Earner', color: 'bg-purple-500' },
  { id: 'rural-entrepreneur', label: 'Rural Entrepreneur', color: 'bg-orange-500' }
];

export function Menu({ selectedPersona, onLogout }: MenuProps) {
  const handleAction = (action: string) => {
    switch (action) {
      case 'persona':
        // Show persona switching dialog or navigate
        break;
      case 'goal':
        // Navigate to goal setting
        break;
      case 'calculator':
        // Open calculator
        break;
      case 'reports':
        // Navigate to reports
        break;
      case 'budget':
        // Navigate to budget planner
        break;
      case 'settings':
        // Navigate to settings
        break;
      case 'export':
        // Trigger data export
        break;
      case 'help':
        // Open help center
        break;
      case 'privacy':
        // Show privacy policy
        break;
      case 'rate':
        // Open app store rating
        break;
      case 'share':
        // Open share dialog
        break;
      default:
        console.log(`Action: ${action}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Persona */}
      {selectedPersona && (
        <Card className="p-4">
          <h3 className="mb-3">Current Persona</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {PERSONA_OPTIONS.map(persona => 
                persona.id === selectedPersona && (
                  <div key={persona.id} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${persona.color} rounded-full`}></div>
                    <span className="font-medium">{persona.label}</span>
                  </div>
                )
              )}
            </div>
            <Badge variant="secondary">Active</Badge>
          </div>
        </Card>
      )}



      {/* Menu Sections */}
      {MENU_SECTIONS.map((section, index) => (
        <Card key={index} className="p-4">
          <h3 className="mb-3">{section.title}</h3>
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <Button
                  key={itemIndex}
                  variant="ghost"
                  className="w-full justify-start h-auto p-3"
                  onClick={() => handleAction(item.action)}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>
        </Card>
      ))}

      {/* Logout Section */}
      <Card className="p-4">
        <Button
          variant="destructive"
          onClick={onLogout}
          className="w-full justify-start h-auto p-3"
        >
          <LogOut className="w-4 h-4 mr-3" />
          <span>Logout</span>
        </Button>
      </Card>

      {/* App Info */}
      <Card className="p-4">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">F</span>
            </div>
            <span className="font-medium">FInLit.ai</span>
          </div>
          <p className="text-sm text-muted-foreground">Version 1.0.0</p>
          <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
            <Moon className="w-3 h-3" />
            <span>Dark Theme Enabled</span>
          </div>
        </div>
      </Card>
    </div>
  );
}