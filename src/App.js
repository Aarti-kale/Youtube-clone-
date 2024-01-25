import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import WatchVideoPage from './pages/WatchVideo';


const App = () => {
  return (
   <Router>
    
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Watch/:videoId" element={WatchVideoPage}/>
    </Routes>
    <Footer/>
   </Router>
  );
};

export default App;
