import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PromptEntry {
  id: string;
  timestamp: string;
  role: 'user' | 'assistant';
  content: string;
  tags: string[];
}

interface PromptState {
  prompts: PromptEntry[];
  addPrompt: (role: 'user' | 'assistant', content: string, tags?: string[]) => void;
}

export const usePromptStore = create<PromptState>()(
  persist(
    (set) => ({
      prompts: [],
      addPrompt: (role, content, tags = []) => 
        set((state) => ({
          prompts: [
            {
              id: crypto.randomUUID(),
              timestamp: new Date().toISOString(),
              role,
              content,
              tags
            },
            ...state.prompts
          ]
        })),
    }),
    {
      name: 'prompt-storage',
    }
  )
)
