import React from 'react';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
