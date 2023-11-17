// App.tsx
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import  { Home }  from './src/screens/Home';
import  Login  from './src/screens/Home/login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
      <StatusBar style="light" />
    </>
  );
}
