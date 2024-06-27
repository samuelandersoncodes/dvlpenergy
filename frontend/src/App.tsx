import SolarPlantMap from "./components/solarplantsmap/SolarPlantsMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/layout";

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<SolarPlantMap />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );

}

export default App;
