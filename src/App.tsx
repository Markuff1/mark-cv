import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Home from "./Home";

// Replace this with your actual Measurement ID
const GA_MEASUREMENT_ID = "G-8TM3CJK34G";

// Hook to track page views on route change
function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

// Main App Content
function AppContent() {
  usePageViews();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

// App with GA initialization
function App() {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  return (
    <Router basename="/mark-cv">
      <AppContent />
    </Router>
  );
}

export default App;
