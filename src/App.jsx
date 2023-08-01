import React, { useState } from "react";

import "./index.css";


import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminManager from "./pages/AdminManager";


export const isAdmin = false

const App = () => (
  <BrowserRouter>
    <Routes>

      <Route path = "/admin" element={<Admin/>}/>
      <Route path = "/admin_manager" element={<AdminManager/>}/>

      <Route path="/home" element={<Home />} />

      <Route path="/favorites/:type" element={<Favorites />} />
      <Route path="/favorites" element={<Navigate to="/favorites/food" />} />

      <Route path="/" element={<Navigate to={'/home'} />} />

    </Routes>

  </BrowserRouter>

)

export default App


