import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { TabBarVisibilityProvider } from './src/context/NavigationContext';

import Router from './src/routes'

export default function App() {
  return (
    <AuthProvider>
      <TabBarVisibilityProvider>
        <Router />
      </TabBarVisibilityProvider>
    </AuthProvider>
  );
}
