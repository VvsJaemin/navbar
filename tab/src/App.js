import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Express from './pages/Express';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/express" exact component={Express} />
      </Routes>
    </Router>
  );
}
export default App;