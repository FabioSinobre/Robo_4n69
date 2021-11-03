import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Rotas from './Rotas';
import Header from "components/Header";
import Footer from "components/Footer";
function App() {
  return (
    <BrowserRouter>
     <Header/>

      <Rotas/> 

       <Footer/>

    </BrowserRouter>
    
  );
}
export default App;
