// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import ScreenPage from './components/ScreenPage';
import ProjectCategories from './components/ProjectCategories';
import TrustedCompanies from './components/TrustedCompanies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ScreenPage />
      <ProjectCategories />
      <TrustedCompanies />
      <Footer />
    </div>
  );
}

export default App;
