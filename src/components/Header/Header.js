import React from "react";
import "../../css/Header.css";

function Header(){
  return(
    <header className="container header bg-secondary m-0 p-0">
      <h1 className="mt-4">
        Buscador
        <br></br>
        de
        <br></br>
        cep
      </h1>
      
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <input type="text" placeholder="Insira um cep" className="form-control"></input>
        <button className="btn btn-light ms-3 text-color-black">Buscar</button>
      </div>
    </header>
  )
}

export default Header
