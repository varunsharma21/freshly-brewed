import styles from "./Landing.module.css";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";

function Landing() {
  return (
    <div className={styles.main}>
      <SideBar />
      <Home />
    </div>
  );
}

export default Landing;
