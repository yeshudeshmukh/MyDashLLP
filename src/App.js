import React from "react";
import BarChart from "./Component/BarChart";
import Registration from "./Component/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration/>}/>
          <Route path="/BarChart" element={<BarChart/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
