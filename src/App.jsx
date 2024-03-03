import "./App.css";
import CardCarousel from "./components/CardCarousel";
import Card from "./components/Cards";
import Carousel from "./components/Carousel_images";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousel></Carousel>
      <CardCarousel></CardCarousel>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
