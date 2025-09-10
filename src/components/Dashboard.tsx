import { useState } from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { IncomeChart } from './IncomeChart';
import { UploadDocumentsDialog } from './UploadDocumentsDialog';
import { VoiceAssistantDialog } from './VoiceAssistantDialog';
import { TrendingUp, TrendingDown, DollarSign, Target, Upload, MessageSquare, Bot } from 'lucide-react';

interface DashboardProps {
  persona: string;
}

const PERSONA_DATA = {
  'student': {
    netIncome: 1250,
    monthlyGoal: 1500,
    expenses: 850,
    savings: 400
  },
  'gig-worker': {
    netIncome: 2800,
    monthlyGoal: 3200,
    expenses: 1900,
    savings: 900
  },
  'first-earner': {
    netIncome: 3200,
    monthlyGoal: 3500,
    expenses: 2400,
    savings: 800
  },
  'rural-entrepreneur': {
    netIncome: 4200,
    monthlyGoal: 4800,
    expenses: 2800,
    savings: 1400
  }
};

export function Dashboard({ persona }: DashboardProps) {
  const data = PERSONA_DATA[persona as keyof typeof PERSONA_DATA] || PERSONA_DATA['gig-worker'];
  const goalProgress = (data.netIncome / data.monthlyGoal) * 100;
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isVoiceDialogOpen, setIsVoiceDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card className="p-4">
        <h3 className="mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline" className="aspect-square flex flex-col items-center justify-center space-y-1">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Mike</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="aspect-square flex flex-col items-center justify-center space-y-1"
            onClick={() => setIsUploadDialogOpen(true)}
          >
            <Upload className="w-5 h-5" />
            <span className="text-xs">Upload</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="aspect-square flex flex-col items-center justify-center space-y-1"
            onClick={() => setIsVoiceDialogOpen(true)}
          >
            <Bot className="w-5 h-5" />
            <span className="text-xs">FIn AI</span>
          </Button>
          
          <Button variant="outline" className="aspect-square flex flex-col items-center justify-center space-y-1">
            <Target className="w-5 h-5" />
            <span className="text-xs">Virtual Pay</span>
          </Button>
          
          <Button variant="outline" className="aspect-square flex flex-col items-center justify-center space-y-1">
            <DollarSign className="w-5 h-5" />
            <span className="text-xs">Goal Track</span>
          </Button>
          
          <Button variant="outline" className="aspect-square flex flex-col items-center justify-center space-y-1">
            <TrendingDown className="w-5 h-5" />
            <span className="text-xs">Plan Change</span>
          </Button>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Net Income</span>
            <TrendingUp className="w-4 h-4" style={{ color: 'var(--banking-teal)' }} />
          </div>
          <div className="text-2xl font-bold">₹{data.netIncome}</div>
          <p className="text-xs" style={{ color: 'var(--banking-teal)' }}>+12% from last month</p>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Expenses</span>
            <TrendingDown className="w-4 h-4" style={{ color: 'var(--destructive)' }} />
          </div>
          <div className="text-2xl font-bold">₹{data.expenses}</div>
          <p className="text-xs" style={{ color: 'var(--destructive)' }}>+5% from last month</p>
        </Card>
      </div>

      {/* Monthly Goal Progress */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span className="font-medium">Monthly Goal</span>
          </span>
          <Badge variant={goalProgress >= 100 ? 'default' : 'secondary'}>
            {Math.round(goalProgress)}%
          </Badge>
        </div>
        <Progress value={goalProgress} className="mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₹{data.netIncome}</span>
          <span>₹{data.monthlyGoal}</span>
        </div>
      </Card>

      {/* Income Chart */}
      <Card className="p-4">
        <h3 className="mb-4 flex items-center space-x-2">
          <DollarSign className="w-4 h-4" />
          <span>Income Tracking</span>
        </h3>
        <IncomeChart />
      </Card>

      {/* Your Details */}
      <Card className="p-4">
        <h3 className="mb-3">Your Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Income:</span>
            <span>₹{data.netIncome}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Expenses:</span>
            <span>₹{data.expenses}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Savings:</span>
            <span style={{ color: 'var(--banking-teal)' }}>₹{data.savings}</span>
          </div>
        </div>
      </Card>

      {/* Dialogs */}
      <UploadDocumentsDialog 
        isOpen={isUploadDialogOpen} 
        onClose={() => setIsUploadDialogOpen(false)} 
      />
      <VoiceAssistantDialog 
        isOpen={isVoiceDialogOpen} 
        onClose={() => setIsVoiceDialogOpen(false)} 
      />
    </div>
  );
}