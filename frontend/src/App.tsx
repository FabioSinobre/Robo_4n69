import Article from "components/Article";
import Carousel from "components/Carousel";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Section from "components/Section";


function App() {
  return (
    <>
      <div className="conteiner">
        <div className="conteiner">
          <div>
            <NavBar />
          </div>
        </div>
        <div className="conteiner">
          <Carousel />
        </div>
        <div className="conteiner">
          <Article />
        </div>
        <div className="conteiner">
          <Section />
        </div>
        <div className="conteiner">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
