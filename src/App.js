import React from "react";
import {useState} from "react";
import api from "./services/api.js";
import "./app.css";
import "./css/Header/Header.css";
import "./css/Main/Main.css";

export default function App() {

  const [cepInput, setCepInput] = useState("");
  const [cepInfo, setCepInfo] = useState({});
  
  async function searchCep() {
    
    if (cepInput === "") {
    alert("Insira um CEP");
    return;
  }
  
    try{
      
      const response = await api.get(`${cepInput}/json`);
      setCepInfo(response.data);
      console.log(cepInfo);
      setCepInput("");
      
    } catch{
      alert("Houve um erro ao buscar o CEP. Certifique-se de colocar um CEP válido.");
      setCepInput("");
    }
  }


  return (
    <div>
      <header className="container header bg-secondary pt-3 pb-3">
	      <h1>Buscador de cep</h1>
	      <h2>Ceps para teste:</h2>
	      <span>55470000</span>
	      <span>01153000</span>
	      
      
	      <div className="mt-5 d-flex align-items-center justify-content-center">
		       <input value={cepInput} type="number" placeholder="Insira um cep" onChange={(e) => setCepInput(e.target.value)}></input>
		       <button className="btn btn-light ms-4 text-black" onClick={searchCep}>Buscar</button>
	      </div>
      </header>
    
      <main className="container d-flex flex-column align-items-center pt-4">
		     <section className="cep-content d-flex flex-column align-items-center bg-white text-black p-3 rounded">
		       <h3 className="mb-4">Cep: {cepInfo.cep}</h3>
		      
		       <span>Cidade: <b>{cepInfo.localidade}</b></span>
		       <span>Logradouro: <b>{cepInfo.logradouro}</b></span>
		       <span>Estado: <b>{cepInfo.uf}</b></span>
		       <span>DDD: <b>{cepInfo.ddd}</b></span>
		     </section>
      </main>
    </div>
  );
}
