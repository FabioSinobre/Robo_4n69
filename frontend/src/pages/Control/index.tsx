import NavBar from "components/NavBar";
import Footer from "components/Footer";

const page = () => {
    return (
        <>
            <div className="conteiner">
                <NavBar />
            </div>
            <div><h2> Controle</h2></div>
            <div className="conteiner">
                <Footer />
            </div>
        </>
    );
}
export default page;