
import React from 'react';
import { CrmProvider } from './context/CrmProvider';
import AppShell from './components/AppShell';

// FIX: Removed React.FC to prevent potential typing issues with children props.
const App: React.FC = () => {
  return (
    <CrmProvider>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <AppShell />
      </div>
    </CrmProvider>
  );
};

export default App;
