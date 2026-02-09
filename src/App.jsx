import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Projects } from './Components/Projects/Projects';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { TechStack } from './Components/TechStack/TechStack';


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='techstack' element={<TechStack />} />
    </Routes>
  );
}

export default App
