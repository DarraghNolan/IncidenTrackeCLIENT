import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DriveOffs from './pages/DriveOffs';
import AddDriveOff from './pages/AddDriveOffs';
import UpdateDriveOff from './pages/UpdateDriveOff';
import DetailsDriveOff from './pages/DetailsDriveOff';
import SearchDriveOffs from './pages/SearchDriveOffs';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { useState } from "react";
import Protected from './Protected';
import { AuthContext, AuthProvider } from './AuthContext';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem("isLoggedIn") === "true"
  // );

  const auth = useContext(AuthContext);

  //    --    ChatGPT gave this function, but it just creates errors, need to troubleshoot furhter
  // useEffect(() => {
  //   // Check if the user is logged in when the App component mounts
  //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //   auth.setIsLoggedIn(isLoggedIn);
  // }, [auth]);

  return (
    <div className="App">      
      <BrowserRouter>
      <Protected isLoggedIn={auth.isLoggedIn}>
        <Navbar/>
      </Protected>
          <Routes>
            <Route
              path="/*"
              element={
                <Login isLoggedIn={auth.isLoggedIn} setIsLoggedIn={auth.logIn} />
              }
            />
            <Route
              path="/driveoffs"
              element={                
                <DriveOffs />
              }
            />
            {/* <Route
              path="/driveoffs"
              element={
                <Protected isLoggedIn={auth.isLoggedIn}>
                  <DriveOffs />
                </Protected>
              }
            /> */}
            <Route
              path="/adddriveoff"
              element={
                <Protected isLoggedIn={auth.isLoggedIn}>
                  <AddDriveOff />
                </Protected>
              }
            />
            <Route
              path="/updatedriveoff/:id"
              element={
                <Protected isLoggedIn={auth.isLoggedIn}>
                  <UpdateDriveOff />
                </Protected>
              }
            />
            <Route
              path="/detailsdriveoff/:id"
              element={
                <Protected isLoggedIn={auth.isLoggedIn}>
                  <DetailsDriveOff />
                </Protected>
              }
            />
            <Route
              path="/searchdriveoffs"
              element={
                <Protected isLoggedIn={auth.isLoggedIn}>
                  <SearchDriveOffs />
                </Protected>
              }
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
