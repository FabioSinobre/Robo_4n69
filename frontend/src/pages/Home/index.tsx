import NavBar from "components/NavBar";
import Carousel from "components/Carousel";
import Article from "components/Article";
import Footer from "components/Footer";


function Page()  {
    return (
        <>
            <div className="conteiner">
                 <NavBar />
            </div>
            <div className="conteiner">
                <Carousel />
            </div>
            <div className="conteiner">
                <Article />
            </div>
            <div className="conteiner">
                 <Footer />
            </div>
        </>
    );
}
export default Page;