import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, BrowserRouter, Routes } from 'react-router-dom';
import SingleVinView from './components/singleVinWiew/SingleVinView';
import AggregatedView from './components/aggregatedView';

function App() {
  return (
    <div className="App p-2 text-center">
       <BrowserRouter>
       <Routes>
            <Route path="/" element={<SingleVinView />} />
            <Route path="/agv" element={<AggregatedView />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
