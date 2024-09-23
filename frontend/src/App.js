import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/HomeComponents/Home'; // Import your Home component
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/ProfileComponents/Profile';

function App() {
  
  const [pageXOffset, setPage] = useState("profile");

  return (
    <div>
      {/* Pass pageXOffset and setPage as props */}
      <Navbar pageXOffset={pageXOffset} setPage={setPage} />

      <div className="container my-3">
        {pageXOffset === "home" ? (
          <div>
            <Home />
          </div>
        ) : (
          <Profile />
        )}
      </div>
    </div>
  );
}

export default App;
