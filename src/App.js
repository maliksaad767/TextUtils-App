import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const version = '1.0.1';

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
    <>
    <div className="App">
      <link rel="stylesheet" href={`App.css?v=${version}`} />
    </div>
    
    <Router>
      <Navbar title='TextUtils' About='About Us' mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading='Enter the text to analyze below' mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;