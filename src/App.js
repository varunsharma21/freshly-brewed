import "./App.css";
import { Fragment } from "react";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="main">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
