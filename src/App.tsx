import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Development from "./pages/Development";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/development" element={<Development />} />
        </Routes>
      </Layout>
    </Router>
  );
}
