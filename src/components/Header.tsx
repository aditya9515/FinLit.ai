import { Calendar } from 'lucide-react';

export function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <header className="bg-card border-b border-border p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">F</span>
        </div>
        <h1 className="font-bold">FInLit.ai</h1>
      </div>
      
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4" />
        <span>Date: {currentDate}</span>
      </div>
    </header>
  );
}