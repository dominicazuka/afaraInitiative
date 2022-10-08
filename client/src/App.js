import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Scores from './pages/Scores'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<Home />*/}
        <main>
          <Routes basename="/index.html">
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scores />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
