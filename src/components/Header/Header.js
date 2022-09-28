import React from "react";

function Header(){
  return(
    <header className="container bg-primary">
      <h1>
        Buscador
        <br></br>
        de
        <br></br>
        cep
      </h1>
      
      <div className="mt-5 d-flex align-items-center justify-content-center">
        <input type="text" placeholder="Insira um cep">
        <button className="btn ms-3">Buscar</button>
      </div>
    </header>
  )
}

export default Header
