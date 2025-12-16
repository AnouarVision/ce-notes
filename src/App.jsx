import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Section from "./pages/Section/Section";
import Layout from "./components/Layout";
import Exercises from "./pages/Exercises/Exercises";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /> </Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/exercises" element={<Layout>< Exercises/></Layout>} />
        <Route path="/section/:slug" element={<Layout><Section /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}