import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Projects from "./components/Porjects";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// const LoadingSpinner = () => (
//   <div
//     style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundColor: "rgba(255, 255, 255, 0.)", // White semi-transparent background
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       backdropFilter: "blur(2px)", // 🔥 Blurs the background
//       zIndex: 1000, // Ensure it's on top
//     }}
//   >
//     <img
//       src="/images/House-loading.gif"
//       alt="Loading..."
//       style={{
//         width: "80px",
//         height: "80px",
//       }}
//     />
//   </div>
// );

// function LoadingWrapper({ children }) {
//   const location = useLocation();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1500); // Adjust delay as needed
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   return (
//     <div style={{ position: "relative" }}>
//       {loading && <LoadingSpinner />} {/* ✅ Shows loader on top */}
//       <div style={{ filter: loading ? "blur(5px)" : "none" }}>
//         {children}
//       </div>{" "}
//       {/* ✅ Blurs content while loading */}
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      {/* <LoadingWrapper> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Feature />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      {/* </LoadingWrapper> */}
    </Router>
  );
}

export default App;
