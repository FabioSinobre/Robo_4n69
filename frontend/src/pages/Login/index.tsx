import Login from "components/Login";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Cadastro from "components/Cadastro";

const page = () => {
  return (
    <>
      <div className="conteiner">
        <div>
          <NavBar />
        </div>
      </div>
      <div className="conteiner">
        <Login />
      </div>
      <div className="conteiner">
        <Cadastro />
      </div>
      <div className="conteiner">
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default page;