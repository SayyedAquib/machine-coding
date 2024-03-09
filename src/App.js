import "./App.css";
import Carousel from "./components/Carousel";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <div className="h-svh bg-slate-600 text-white">
        <Carousel />
      </div>
      <div className="h-svh bg-slate-600 text-white">
        <Timer />
      </div>
    </>
  );
}

export default App;
