import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Shared/Header";
import HeroPage from "./component/pages/HeroPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroPage></HeroPage>
    </div>
  );
}

export default App;
