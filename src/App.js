import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StartshipListfrom from './pages/StarshipList/StarshipList';

function App() {
  return (
    <>
      <routes>
      <Route path='/startship-list' element={<StartshipList />} />
      </routes>
    </>
    );
}

export default App;
