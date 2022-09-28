import React from "react";
import {useState} from "react";
import Main from "../Main/Main.js";
import "../../css/Header/Header.css";

function Header(props){
  props.tt = var [cep, setCep] = useState("t");
  
  
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
        <input type="text" placeholder="Insira um cep" onChange={(e) => setCep(e.target.value)}></input>
        <button className="btn btn-light ms-4 text-black">Buscar</button>
      </div>
    </header>
  )
}

export default Header
