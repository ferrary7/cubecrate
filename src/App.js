import './App.css';
import HomePage from './components/HomePage/HomePage';
import {Route, Routes} from "react-router-dom";
import AboutUs from './components/AboutUsPage/AboutUs';
import ServicesPage from './components/ServicesPage/ServicesPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/services/web-development' element={<ServicesPage page='web' />} />
      <Route path='/services/ui-design' element={<ServicesPage page='ui' />} />
      <Route path='/services/logo-design' element={<ServicesPage page='logodesign' />} />
      <Route path='/services/video-editing' element={<ServicesPage page='video' />} />
      <Route path='/services/thumbnail-design' element={<ServicesPage page='thumb' />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
  );
}

export default App;