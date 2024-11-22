import Navbar from "./components/navbar/navbar";
import HomeSlider from "./components/swiper/swiper";
import Populars from "./components/populars/populars";
import About from "./components/about/about";
import Countries from "./components/countries/countries";
import Excursion from "./components/excursion/excursion";
import ClientReviews from "./components/clientReviews/clientReviews";
import Priorities from "./components/priorities/priorities";
import Services from "./components/services/services";
import Travels from "./components/travels/travels";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Services />
      <Travels />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
