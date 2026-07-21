import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/utils';

export interface CalendarProps {
  className?: string;
  mode?: 'single' | 'multiple' | 'range';
  selected?: Date | Date[] | { from: Date; to: Date };
  onSelect?: (date: any) => void;
  defaultMonth?: Date;
}

export const Calendar = ({
  className,
  mode = 'single',
  selected,
  onSelect,
  defaultMonth,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(defaultMonth || new Date());
  
  // A very simplified calendar for demonstration purposes.
  // In a real project, consider using react-day-picker.

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const isSelected = (day: number) => {
    if (!selected) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (mode === 'single' && selected instanceof Date) {
      return date.toDateString() === selected.toDateString();
    }
    
    if (mode === 'multiple' && Array.isArray(selected)) {
      return selected.some(s => s.toDateString() === date.toDateString());
    }
    
    return false;
  };

  const handleDayClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (mode === 'single') {
      onSelect?.(date);
    } else if (mode === 'multiple') {
      const selectedArr = Array.isArray(selected) ? selected : [];
      const isAlreadySelected = selectedArr.some(s => s.toDateString() === date.toDateString());
      if (isAlreadySelected) {
        onSelect?.(selectedArr.filter(s => s.toDateString() !== date.toDateString()));
      } else {
        onSelect?.([...selectedArr, date]);
      }
    }
  };

  return (
    <div className={cn("p-3 bg-white rounded-md border shadow-sm", className)}>
      <div className="flex justify-between items-center pt-1 pb-4">
        <button onClick={prevMonth} className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center border rounded-md">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-sm font-medium">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <button onClick={nextMonth} className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center border rounded-md">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-500">
        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {paddingDays.map((_, i) => (
          <div key={\`padding-\${i}\`} className="h-9 w-9 p-0" />
        ))}
        {days.map((day) => {
          const selectedState = isSelected(day);
          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={cn(
                "h-9 w-9 p-0 font-normal rounded-md text-sm transition-colors hover:bg-gray-100",
                selectedState ? "bg-gray-900 text-white hover:bg-gray-800 hover:text-white focus:bg-gray-900 focus:text-white" : "text-gray-900"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};
