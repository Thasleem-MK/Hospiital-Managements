import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
// import HospitalsPage from "./Pages/Hospitals";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/services">
          <Route path="hospitals" element={<HospitalsPage />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
