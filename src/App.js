import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Shared/Header";
import HeroPage from "./component/pages/HeroPage";
import Carousel from "./component/pages/Carousel";
import TodayDeals from "./component/pages/TodayDeals";
import Search from "./component/pages/SearchedItems";
import Furniture from "./component/pages/Furniture";
import Footer from "./component/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroPage></HeroPage>
      <Carousel></Carousel>
      <TodayDeals></TodayDeals>
      <Search></Search>
      <Carousel></Carousel>
      <Furniture></Furniture>
      <Footer></Footer>
    </div>
  );
}

export default App;
