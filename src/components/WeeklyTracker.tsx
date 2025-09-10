import { useState } from 'react';
import { Checkbox } from './ui/checkbox';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function WeeklyTracker() {
  const [checkedDays, setCheckedDays] = useState<boolean[]>(new Array(7).fill(false));

  const handleDayCheck = (index: number, checked: boolean) => {
    const newCheckedDays = [...checkedDays];
    newCheckedDays[index] = checked;
    setCheckedDays(newCheckedDays);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="mb-3">Weekly Progress</h3>
      <div className="flex justify-between items-center">
        {DAYS.map((day, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground font-medium">{day}</span>
            <Checkbox
              checked={checkedDays[index]}
              onCheckedChange={(checked) => handleDayCheck(index, checked as boolean)}
              className="w-5 h-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}