import React from "react";
import {useState} from "react";
import "./app.css";
import "./css/Header/Header.css";
import "./css/Main/Main.css";

export default function App() {

  const [cep, setCep] = useState("t");

  return (
    <div>
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
    
      <main className="container d-flex flex-column align-items-center pt-4">
		     <section className="cep-content d-flex flex-column align-items-center bg-white text-black p-3 rounded">
		       <h2 className="mb-4">{cep}</h2>
		      
		       <span>Rua Tenório</span>
		       <span>Complemento: bla bla</span>
		       <span>Panelas</span>
		       <span>Paneles - PE</span>
		     </section> 
      </main>
    </div>
  );
}
