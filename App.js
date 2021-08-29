import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { TabBarVisibilityProvider } from './src/context/NavigationContext';
import { SettingsProvider } from './src/context/SettingsContext';

import Router from './src/routes'

export default function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <TabBarVisibilityProvider>
          <Router />
        </TabBarVisibilityProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}
