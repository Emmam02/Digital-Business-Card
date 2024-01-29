import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="app-inner">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
