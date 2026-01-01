import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Topic from "./pages/Topic/Topic";
import Layout from "./components/Layout";
import Exercises from "./pages/Exercises/Exercises";
import Section from "./pages/Section/Section";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /> </Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/exercises" element={<Layout>< Exercises/></Layout>} />
        <Route path="/topic/:topicSlug" element={<Layout><Topic/></Layout>} />
        <Route path="/topic/:topicSlug/:pageSlug" element={<Layout><Section/></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}