import React from 'react';
import './App.css';
import NavigationBar from './components/navigationbar';
import Home from './components/home';
function App() {
  return (
    <div className = "main" >
    <NavigationBar/>
    <Home/>
    </div>
  );
}

export default App;
