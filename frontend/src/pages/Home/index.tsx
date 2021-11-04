import Article from "components/Article";
import Carousel from "components/Carousel";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";
const page = () => {
  return(

    <><div className="conteiner">
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
      <div>
        <Footer />
      </div>
    </div></>

<<<<<<< HEAD
function Page()  {
    return (
        <>
        <div className="conteiner">
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
        </div>
        </>
    );
=======
        
  );
>>>>>>> 2bf534e9b1dbab64bab19681d35c672fd65519a8
}
export default page;
