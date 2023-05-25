import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
