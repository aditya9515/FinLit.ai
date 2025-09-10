import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { GraduationCap, Briefcase, DollarSign, Tractor } from 'lucide-react';

const PERSONAS = [
  {
    id: 'student',
    title: 'Students',
    description: 'Managing education expenses and part-time income',
    icon: GraduationCap,
    color: 'bg-blue-500'
  },
  {
    id: 'first-earner',
    title: 'First Earners',
    description: 'Starting your financial journey',
    icon: DollarSign,
    color: 'bg-purple-500'
  },
  {
    id: 'gig-worker',
    title: 'Gig Workers',
    description: 'Tracking multiple income streams and expenses',
    icon: Briefcase,
    color: 'bg-green-500'
  },
  {
    id: 'rural-entrepreneur',
    title: 'Rural Entrepreneurs',
    description: 'Agricultural and rural business finances',
    icon: Tractor,
    color: 'bg-orange-500'
  }
];

interface PersonaSelectionProps {
  onPersonaSelect: (persona: string) => void;
  selectedPersona?: string;
  onContinue: () => void;
}

export function PersonaSelection({ onPersonaSelect, selectedPersona, onContinue }: PersonaSelectionProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <h1 className="font-bold text-2xl">FInLit.ai</h1>
          </div>
          <p className="text-muted-foreground">Choose your financial profile</p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="mb-2">Select Your Profile</h2>
              <p className="text-sm text-muted-foreground">Choose the profile that best describes you</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {PERSONAS.map((persona) => {
                const Icon = persona.icon;
                const isSelected = selectedPersona === persona.id;
                
                return (
                  <Card 
                    key={persona.id}
                    className={`p-4 cursor-pointer transition-all hover:bg-accent ${
                      isSelected ? 'ring-2 ring-primary bg-accent' : ''
                    }`}
                    onClick={() => onPersonaSelect(persona.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${persona.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{persona.title}</h3>
                          {isSelected && <Badge variant="secondary">Selected</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{persona.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {selectedPersona && (
              <Button onClick={onContinue} className="w-full mt-6">
                Continue
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}