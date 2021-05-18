import "./App.css";
import Banner from "./components/banner";
import Footer from "./components/footer";
import MiddleSec from "./components/middle-sec";
import Productus from "./components/products";
import { productData, productDataTwo } from "./data/data";

function App() {
  return (
    <div className="App">
      <Banner />
      <Productus heading="Choose your favorite" data={productData} />
      <MiddleSec />
      <Productus heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </div>
  );
}

export default App;
