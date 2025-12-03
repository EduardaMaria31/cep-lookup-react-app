import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './DevelopersCard.css'; 

const DeveloperCard = ({ developer }) => {
  return (
    <div className="developer-card">
      <img src={developer.photoUrl} alt={`Foto de ${developer.name}`} className="developer-photo" />
      <h3>{developer.name}</h3>
      <div className="links">
        <a href={developer.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <FaLinkedin size={28} color="#0077B5" /> {/* Ícone com a cor da marca */}
        </a>
        <a href={developer.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithub size={28} color="#333" /> {/* Ícone com a cor da marca */}
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;

