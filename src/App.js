import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app bg-custom-gray-1 smooth-scroll ">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
