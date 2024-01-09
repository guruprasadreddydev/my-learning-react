import "./App.css";
import ImageSlider from "./ImageSlider";
import Accordian from "./components/accordian";
import LoadMoreData from "./components/load-more-products";
import RandomColorGenerator from "./components/random-color-generator";

function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandomColorGenerator /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
