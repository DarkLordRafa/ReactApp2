import React from "react";
import "../../css/Header/Header.css";

function Header(){
  return(
    <header className="container header bg-secondary pt-3 pb-3">
      <h1>
        Buscador
        <br></br>
        de
        <br></br>
        cep
      </h1>
      
      <div className="mt-3 d-flex align-items-center justify-content-center ps-3 pe-3">
        <input type="text" placeholder="Insira um cep"></input>
        <button className="btn btn-light ms-3 text-black">Buscar</button>
      </div>
    </header>
  )
}

export default Header
