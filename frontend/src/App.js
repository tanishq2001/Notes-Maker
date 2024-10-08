import './App.css';
import React, { useState } from 'react';
import Home from './components/HomeComponents/Home'; // Import your Home component
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/ProfileComponents/Profile';
import MyNavbar from './components/MyNavbar';

function App() {
  
  const [pageXOffset, setPage] = useState("profile");

  return (
    <div>
      {/* Pass pageXOffset and setPage as props */}
      <MyNavbar pageXOffset={pageXOffset} setPage={setPage} />

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
