import { useEffect } from 'react';
import './App.scss';
import Overview from './MainPages/Overview/Overview';
import Footer from './MainPages/Footer/Footer';
import Navbar from './MainPages/Navbar/Navbar';
import Dashboard from './MainPages/Dashboard/Dashboard';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // To give some information to the user
  useEffect(() => {
    alert('Recommended resolution: 1366 x 663 \n1. For Chart Click on bar graph at bottom\n 2. For Circular chart go to Dashboard in Nav')
  }, [])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />                                    {/* Nav bar on top to control flow of webpage */}
        <div className='components'>
          <Routes>
            <Route index element={<Overview />} />              {/* Overview, the index/main page of site */}
            <Route path="Dashboard" element={<Dashboard />} />  {/* Dashboard Element */}
          </Routes>
        </div>
        <Footer />                                    {/* Footer at Bottom */}
      </BrowserRouter>
    </div>
  );
}

export default App;
