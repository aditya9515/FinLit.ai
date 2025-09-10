import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { UploadDocumentsDialog } from './UploadDocumentsDialog';
import { VoiceAssistantDialog } from './VoiceAssistantDialog';
import { TrendingUp, Bot, Settings, Upload, DollarSign, Target, TrendingDown } from 'lucide-react';
import { IncomeChart } from './IncomeChart';

const INCOME_DATA = {
  netIncome: 2800,
  monthlyGoal: 3200,
  expenses: 1900,
  savings: 900,
  weeklyIncome: 700,
  lastWeekIncome: 650
};

export function Home() {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isVoiceDialogOpen, setIsVoiceDialogOpen] = useState(false);
  return (
    <div className="space-y-6">
      {/* Income Details Section */}
      <div className="space-y-4">
        <h2>Income Overview</h2>
        
        {/* Key Income Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">This Week</span>
              <TrendingUp className="w-4 h-4" style={{ color: 'var(--banking-teal)' }} />
            </div>
            <div className="text-2xl font-bold">₹{INCOME_DATA.weeklyIncome}</div>
            <p className="text-xs" style={{ color: 'var(--banking-teal)' }}>+₹{INCOME_DATA.weeklyIncome - INCOME_DATA.lastWeekIncome} from last week</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Income</span>
              <DollarSign className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            </div>
            <div className="text-2xl font-bold">₹{INCOME_DATA.netIncome}</div>
            <p className="text-xs" style={{ color: 'var(--accent)' }}>This month</p>
          </Card>
        </div>

        {/* Income Chart */}
        <Card className="p-4">
          <h3 className="mb-4 flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Income Trend</span>
          </h3>
          <IncomeChart />
        </Card>

        {/* Income vs Expenses */}
        <Card className="p-4">
          <h3 className="mb-3">Financial Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Income</span>
              <span className="font-medium" style={{ color: 'var(--banking-teal)' }}>₹{INCOME_DATA.netIncome}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Expenses</span>
              <span className="font-medium" style={{ color: 'var(--destructive)' }}>₹{INCOME_DATA.expenses}</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Net Savings</span>
                <span className="font-bold" style={{ color: 'var(--banking-gold)' }}>₹{INCOME_DATA.savings}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-4">
        <h3 className="mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="aspect-square flex flex-col items-center justify-center space-y-2"
            onClick={() => setIsVoiceDialogOpen(true)}
          >
            <Bot className="w-6 h-6" />
            <span className="text-sm">FIn AI</span>
          </Button>
          
          <Button variant="outline" className="aspect-square flex flex-col items-center justify-center space-y-2">
            <Settings className="w-6 h-6" />
            <span className="text-sm">Plan Changer</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="aspect-square flex flex-col items-center justify-center space-y-2 col-span-2"
            onClick={() => setIsUploadDialogOpen(true)}
          >
            <Upload className="w-6 h-6" />
            <span className="text-sm">Upload Documents</span>
          </Button>
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