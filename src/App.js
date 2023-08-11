import Contacts from "./components/Contacts/Contacts";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import "./App.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
          <Intro/>
          <Portfolio/>
          <Works/>
          <Testimonials/>
          <Contacts/>
      </div>
    </div>
  );
}

export default App;
