import React from "react";
import {useState} from "react";
import "../../css/Header/Header.css";

function Header(){
  const [cep, setCept] = useState("tt");
  
  
  return(
    <header className="container header bg-secondary pt-3 pb-3">
      <h1>
        Buscador
        <br></br>
        de
        <br></br>
        cep
      </h1>
      
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <input type="text" placeholder="Insira um cep" value={cep}></input>
        <button className="btn btn-light ms-4 text-black">Buscar</button>
      </div>
    </header>
  )
}

export default Header
