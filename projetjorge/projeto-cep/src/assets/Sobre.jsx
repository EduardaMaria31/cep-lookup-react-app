import React from 'react';
import './Sobre.css'; // Importa o CSS específico para esta página
import { Link } from 'react-router-dom'; // Para criar o botão "Voltar"

// Array de dados dos desenvolvedores
const membros = [
    { nome: "Desenvolvedor 1", github: "https://github.com/seugithub1", foto: "https://via.placeholder.com/150/0000FF/FFFFFF?text=D1" },
    { nome: "Desenvolvedor 2", github: "https://github.com/seugithub2", foto: "https://via.placeholder.com/150/0000FF/FFFFFF?text=D2" },
    // DICA: Substitua os links e as URLs das fotos pelas suas informações reais.
];

const Sobre = () => {
    return (
        <div className="sobre-page">
            <header className="main-header">
                <h1>A BUSCA É SUA!</h1> 
                <Link to="/" className="link-sobre">Voltar</Link>
            </header>
            
            <div className="container-sobre">
                <h2>Desenvolvedores do Projeto</h2>
                <div className="membros-grid">
                    {membros.map((membro, index) => (
                        <div key={index} className="membro-card">
                            <img src={membro.foto} alt={`Foto de ${membro.nome}`} className="membro-foto" />
                            <h3>{membro.nome}</h3>
                            <a 
                                href={membro.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sobre;