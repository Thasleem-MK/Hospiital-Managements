import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import HospitalsPage from "./Pages/Hospitals";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import HospitalDetails from "./Pages/HospitalDetailes";
import DoctorsPage from "./Pages/Doctors";
import SpecialtiesPage from "./Pages/Specialties";
import AmbulanceServicesPage from "./Pages/Ambulance-services";
import DepartmentDoctorsPage from "./Pages/HospitalSpecialtiesDetails";
import UserRegistration from "./Pages/Registration";
import UserLogin from "./Pages/Login";
import PasswordReset from "./Pages/PasswordReset";
import { useEffect } from "react";
import { apiClient } from "./Components/Axios";
import { useDispatch } from "react-redux";
import { setHospitalData } from "./Redux/HospitalsData";

function App() {
  const dispatch = useDispatch();
    useEffect(() => {
      const getHospitalData = async () => {
        try {
          const result = await apiClient.get("/api/hospitals");
          dispatch(setHospitalData({ data: result.data.data }));
        } catch (err) {
          console.error(err);
        }
      };
      getHospitalData();
    }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Registration" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/password" element={<PasswordReset />} />
        <Route path="/services">
          <Route path="hospitals" element={<HospitalsPage />} />
          <Route path="hospitals/:id" element={<HospitalDetails />} />
          <Route
            path="hospitals/:id/:departmentId"
            element={<DepartmentDoctorsPage />}
          />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="specialties" element={<SpecialtiesPage />} />
          <Route path="ambulance" element={<AmbulanceServicesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
