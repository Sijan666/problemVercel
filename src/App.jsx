import "./App.css";
import RootLayouts from "/src/components/layouts/RootLayouts";
import About from "/src/components/pages/About";
import Error from "/src/components/pages/Error";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<About />} />
          <Route path="/protfolio" element={<About />} />
          <Route path="/price" element={<About />} />
          <Route path="/blog" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
