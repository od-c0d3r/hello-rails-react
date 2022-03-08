import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types"
import Greeting from "./Greeting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
