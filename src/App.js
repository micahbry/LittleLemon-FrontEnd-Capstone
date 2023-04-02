import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
