import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainPage from "./components/MainPage";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
