import { GlobalStateProvider } from '@/components/hooks/GlobalStateContext.tsx'; 
import { TabsBar } from '@/components/layout/Tabsbar';
import { ReactNode } from 'react';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <GlobalStateProvider>
      <TabsBar />
      {children}
    </GlobalStateProvider>
  );
}
