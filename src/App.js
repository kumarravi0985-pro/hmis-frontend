import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import MenuBar from "./components/MenuBar";
import PatientRegistration from "./pages/patientregistration";
import "./App.css"; 

function Footer() {
  return (
    <footer className="app-footer">
      <p>Powered by <strong>PiCaSoid</strong>. All Rights Reserved.</p>
    </footer>
  );
}

function AppContent() {
  const location = useLocation();
  const hideMenu = location.pathname === "/";

  return (
    <>
      {!hideMenu && <MenuBar />}

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patientregistration" element={<PatientRegistration />} />
        </Routes>
      </div>

      {!hideMenu && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
