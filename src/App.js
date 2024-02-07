import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/home";
import Skills from "./containers/home";
import Resume from "./containers/home";
import Portfolio from "./containers/home";
import Contact from "./containers/home";

function App() {
  return (
    <div className="App">
      {/** particels js **/}

      {/** navbar component **/}

      {/** main page content **/}
      <Routes>
        {/** create all routes  **/}
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
