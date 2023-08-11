import Contacts from "./components/Contacts/Contacts";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import "./App.scss"


function App() {
  return (
    <div className="app">
      <Navbar/>
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
