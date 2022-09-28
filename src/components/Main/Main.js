import React from "react";
import "../../css/Main/Main.css"

function Main(){
  return(
  <main className="container d-flex flex-column align-items-center pt-4">
    <section className="cep-content d-flex flex-column align-items-center bg-white text-black p-3 rounded">
      <h2 className="mb-4">Cep: 555</h2>
      
      <span>Rua Tenório</span>
      <span>Complemento: bla bla</span>
      <span>Panelas</span>
      <span>Paneles - PE</span>
    </section>
  </main>
  )
}

export default Main
