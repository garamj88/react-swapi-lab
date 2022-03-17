import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StartshipListfrom from './pages/StarshipList/StarshipList';

function App() {
  return (
    <div>
      <h1>Hi</h1>
      <routes>
      <Route path='/startship-list' element={<StartshipList />} />
      </routes>
    </div>
    );
}

export default App;
