import './App.css';
import HomePage from './components/HomePage/HomePage';
import Projects from "./components/ProjectsPage/Projects";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

export default App;