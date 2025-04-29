import Home from "./assets/home/home";
import Service from "./assets/service/service.jsx"
import About from "./assets/about/about.jsx"
import Contact from "./assets/contact/contact.jsx"
import Nav from './component/nav.jsx'
import Footer from './component/footer.jsx'
import Industries from "./assets/industries/Industries.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"

// import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/service" element={<Service />}/>
       <Route path="/industries" element={<Industries />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/contact" element={<Contact />}/>
      

    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
