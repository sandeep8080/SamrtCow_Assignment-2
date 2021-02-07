import "./App.css";
import Carousel from "./Components/carousel";
import { CarouselData } from "./Components/silderImageData";

function App() {
  return <Carousel imageData={CarouselData} />;
}

export default App;
