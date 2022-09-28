import React from "react";
import {useState} from "react";
import api from "./services/api.js";
import "./app.css";
import "./css/Header/Header.css";
import "./css/Main/Main.css";

export default function App() {

  const [cep, setCep] = useState("");
  
  if (cep === "") {
    alert("Insira um CEP");
    return;
  }
  
  async function searchCep() {
    try{
      
      const response = await api.get(`${cep}/json`);
      console.log(response);
      
    } catch() {
      alert("Houve um erro ao buscar o CEP. Certifique-se de colocar um CEP válido.")
    }
  }


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
		       <button className="btn btn-light ms-4 text-black" onClick={searchCep}>Buscar</button>
	      </div>
      </header>
    
      <main className="container d-flex flex-column align-items-center pt-4">
		     <section className="cep-content d-flex flex-column align-items-center bg-white text-black p-3 rounded">
		       <h2 className="mb-4">Cep: </h2>
		      
		       <span>Rua Tenório</span>
		       <span>Complemento: bla bla</span>
		       <span>Panelas</span>
		       <span>Paneles - PE</span>
		     </section>
      </main>
    </div>
  );
}
