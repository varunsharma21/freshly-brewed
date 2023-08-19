import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import DiscoverPage from "./components/DiscoverPage/DiscoverPage";

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="discover" element={<DiscoverPage />} />
      </Routes>
    </div>
  );
}

export default App;
