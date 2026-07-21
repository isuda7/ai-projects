import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PromptLog {
  id: string;
  timestamp: string;
  component: string;
  action: string;
  description: string;
}

interface PromptStore {
  logs: PromptLog[];
  addPrompt: (log: Omit<PromptLog, 'id' | 'timestamp'>) => void;
  clearLogs: () => void;
}

export const usePromptStore = create<PromptStore>()(
  persist(
    (set) => ({
      logs: [],
      addPrompt: (log) => set((state) => ({
        logs: [
          ...state.logs,
          {
            ...log,
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
          }
        ]
      })),
      clearLogs: () => set({ logs: [] }),
    }),
    {
      name: 'prompt-storage',
    }
  )
);
