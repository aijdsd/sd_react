import * as React from 'react';
import {  BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from './pages/Home';
import Display from './pages/Display';
import TitleBar from './components/TitleBar';

const App = () => {
  return (
    <BrowserRouter basename="/sd_react">
      <TitleBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/display' element={<Display />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;