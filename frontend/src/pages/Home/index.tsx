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

        
  );
}
export default page;
