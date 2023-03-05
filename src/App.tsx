import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
      <>
          <SideMenu/>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
      </>
  );
}

export default App;
