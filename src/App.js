import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; old code
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <Router>
      <Navbar title='TextUtils' About='About Us' mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading='Enter the text to analyze below' mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;