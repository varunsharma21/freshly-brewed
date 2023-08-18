import "./Landing.css";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";
// import DiscoverPage from "./components/DiscoverPage/DiscoverPage"; // importing this is distorting other pages' css.

function Landing() {
  return (
    <div className="main">
      <SideBar />
      <Home />
      {/* <DiscoverPage /> */}
    </div>
  );
}

export default Landing;
