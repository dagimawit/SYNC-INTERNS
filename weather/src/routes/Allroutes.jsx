import {  Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Weatherpage from '../pages/weatherpage';
export default function AllRoutes() {
  
  return <Routes>
        <Route path="/" element={<Homepage />} ></Route>
        <Route path="/weather" element={<Weatherpage />} ></Route>
      </Routes>
    
  
}

