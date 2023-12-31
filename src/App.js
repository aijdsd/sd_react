import * as React from 'react';
import {  BrowserRouter, Route,  Routes } from 'react-router-dom';
import Display from './pages/Display';
import Landing from './components/Landing';
import Home from './pages/Home';
import About from './pages/about';

const App = () => {
  return (
    <BrowserRouter>
      {/* <TitleBar /> */}
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/display' element={<Display />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;