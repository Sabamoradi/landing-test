import React, { useState } from "react";
import "./styles/root.scss";
import "./styles/grid.scss";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Flight from "./views/Hotel";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight/:id" element={<Flight />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
