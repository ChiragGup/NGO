import { Routes, Route } from "react-router-dom";
import Home from "./coompo/Home";
import About from "./coompo/About";
import Form from "./coompo/Form";
import Navbar from "./coompo/Navbar";
import Footer from "./coompo/Footer";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Always Show Navbar */}
      <Navbar/>

      {/* Only This Part Will Change with Routing */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </div>

      {/* Always Show Footer */}
      <Footer/>
    </div>
  );
}

export default App;
