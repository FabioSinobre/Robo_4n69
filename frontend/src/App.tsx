import Article from "components/Article";
import Carousel from "components/Carousel";
import Footer from "components/Footer";
import Header from "components/Header";
import Login from "components/Login";
import NavBar from "components/NavBar";
import Section from "components/Section";

function App() {
  return (
    <>
      <div className="conteiner">
        <div>
          <NavBar />
          <Login />
        </div>
        <div>
          <Header />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <Article />
        </div>
        <div>
          <Section />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
