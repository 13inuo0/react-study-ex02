import Footer from "./components/Footer";
import HeaderW from "./components/Header-w";
import Tabs from "./components/Tabs";
import Visual from "./components/Visual";

function App() {
  return (
    <div className="app-container">
      <HeaderW />
      <Visual/>
      <Tabs/>
      <Footer/>
    </div>
  );
}

export default App;
