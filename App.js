import React from 'react';
import { AuthProvider } from './src/context/AuthContext';

import Router from './src/routes'

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
