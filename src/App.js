// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar'
import Banner from './Components/Banner';
import CourseCatalog from './Components/CourseCatalog';
import Course from './Components/Course';
import About from './Components/About';
import Home from './Components/Home';
import CourseCard from './Components/CourseCard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={CourseCatalog} />
          <Route path="/course/:id" component={Course} />
          <Route path="/about" component={About} />
       
        </Routes>
        <div className='App'>
          <CourseCard></CourseCard>
        </div>
      </div>
    </Router>
  );
}

export default App;
