import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Aboutme from './aboutme';
import Achievements from './achievements';
import Home from './App';
import './App.css';
import Courses from './courses';
import Edu from './edu';
import Profex from './profex';
import Projects from './projects';
import Resume from './resume';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id='div1'>
        <h1>JHANAVI DAVE</h1>
        <hr />
        <nav id='nav1'>
          |&nbsp;
          <NavLink to='/aboutme' className="link-style">AboutMe</NavLink>&nbsp;|&nbsp;
          <NavLink to='/resume' className="link-style">Resume</NavLink>&nbsp;|&nbsp;
          <NavLink to='/profex' className="link-style">Experience</NavLink>&nbsp;|&nbsp;
          <NavLink to='/edu' className="link-style">Education</NavLink>&nbsp;|&nbsp;
          <NavLink to='/projects' className="link-style">Projects</NavLink>&nbsp;|&nbsp;
          <NavLink to='/courses' className="link-style">Courses</NavLink>&nbsp;|&nbsp;
          <NavLink to='/achievements' className="link-style">Achievements</NavLink>
          &nbsp;|
        </nav>
      </div>
      <div>
        <Routes>
          <Route path='/ ' element={<App />} className="route-style" />
          <Route path='/home' element={<Home />} className="route-style" />
          <Route path='/aboutme' element={<Aboutme />} className="route-style" />
          <Route path='/resume' element={<Resume />} className="route-style" />
          <Route path='/profex' element={<Profex />} className="route-style" />
          <Route path='/edu' element={<Edu />} className="route-style" />
          <Route path='/projects' element={<Projects />} className="route-style" />
          <Route path='/courses' element={<Courses />} className="route-style" />
          <Route path='/achievements' element={<Achievements />} className="route-style" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
