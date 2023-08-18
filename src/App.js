import "./App.css";
import { Fragment } from "react";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
