import Navbar from "./components/navbar/navbar";
import HomeSlider from "./components/swiper/swiper";
import Populars from "./components/populars/populars";
import About from "./components/about/about";
import Countries from "./components/countries/countries";
import Excursion from "./components/excursion/excursion";
import ClientReviews from "./components/clientReviews/clientReviews";
import Priorities from "./components/priorities/priorities";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSlider />
      <Populars />
      <About />
      <Countries />
      <Excursion />
      <ClientReviews />
      <Priorities />
    </div>
  );
}

export default App;
