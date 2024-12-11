import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./app.scss";
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/" element={<Header />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;