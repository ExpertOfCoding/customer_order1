import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import OnePage from "./components/OnePage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/idari" element={<OnePage focused={"idari"} />}></Route>
          <Route exact path="/sinif" element={<OnePage focused={"sinif"} />}></Route>
          <Route exact path="/kantin" element={<OnePage focused={"kantin"} />}></Route>
          <Route exact path="/ogretmenler_odasi" element={<OnePage focused={"ogretmenler_odasi"} />}></Route>
          <Route path="*" element={<OnePage focused={""}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
