import React from "react";

function Header(){
  return(
    <header className="container bg-primary header">
      <h1 className="mt-4">
        Buscador
        <br></br>
        de
        <br></br>
        cep
      </h1>
      
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <input type="text" placeholder="Insira um cep"></input>
        <button className="btn ms-3 bg-white text-color-black">Buscar</button>
      </div>
    </header>
  )
}

export default Header
