import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { VscOrganization } from "react-icons/vsc";
import { FaEnvelope, FaHome, FaCity, FaFlag } from "react-icons/fa";
import DevelopersPage from './pages/DevelopersPage'; 

function CepPageContent() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => setDados(data))
        .catch((err) => console.error("Erro na API:", err));
    }
  }, [cep]);

  return (
    <div className="container"> 
      <h2 className="titulo-busca">
        BUSCAR CEP
      <FaLocationDot
          size={40}
          color="#0909f4"
          style={{ marginLeft: "10px" }}
        />
      </h2>

      <div className="search-box">
        <input
          type="text"
          className="cep-input"
          placeholder="Digite seu cep"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
        />
        <button className="btn-busca">
          <FaSearch size={22} />
          Buscar
        </button>
      </div>

      {dados && !dados.erro && (
        <div className="resultado">

          <p>
            <FaEnvelope size={18} color="#127fecff"/>
            <strong>CEP:</strong> {dados.cep}
          </p>

          <p>
            <FaLocationDot size={18} color="#a20e27ff"/>
            <strong>Logradouro:</strong> {dados.logradouro}
          </p>

          <p>
            <FaHome size={18} color="#e7f166ff"/>
            <strong>Bairro:</strong> {dados.bairro}
          </p>

          <p>
            <FaCity size={18} color="#1d6daaff"/>
            <strong>Cidade:</strong> {dados.localidade}
          </p>

          <p>
            <FaFlag size={18} color="#1b7009ff"/>
            <strong>Estado:</strong> {dados.uf}
          </p>

        </div>
      )}

      {dados && dados.erro && (
        <div className="resultado" style={{ color: "red", fontWeight: "bold" }}>
          Ops! Não conseguimos encontrar esse endereço.
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <>
        <header className="main-header">
          <h1>A BUSCA É SUA!</h1>
          <nav className="main-nav">
            <Link to="/" className="nav-link">Buscar CEP</Link> |
            <Link to="/developers" className="nav-link" ><VscOrganization /> Nossa Equipe</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<CepPageContent />} />
          <Route path="/developers" element={<DevelopersPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

