import React from 'react';
import DeveloperCard from '../components/DeveloperCard';
import './DevelopersPage.css';
import fotoMaria from "../assets/fotoMaria.jpg";
import fotoKelly from "../assets/fotoKelly.jpg";
import fotoRafa from "../assets/fotoRafa.jpg";
import fotoFer from "../assets/fotoFer.jpg";
import fotoDuda from "../assets/fotoDuda.jpg";


const developersData = [
  {
    id: 1,
    name: 'Maria Eduarda C° Souza',
    photoUrl: fotoMaria, 
    linkedinUrl: 'https://www.linkedin.com/in/maria-eduarda-concei%C3%A7%C3%A3o-souza-1b9366352/',
    githubUrl: 'https://github.com/EduardaMaria31', 
  },

  {
    id: 2,
    name: 'Maria Eduarda S° Oliveira',
    photoUrl: fotoDuda, 
    linkedinUrl: 'https://www.linkedin.com/feed/',
    githubUrl: 'https://github.com/maria-DX', 
  },

  {
    id: 3,
    name: 'Maria Fernanda S° Costa',
    photoUrl: fotoFer, 
    linkedinUrl: 'https://www.linkedin.com/in/maria-fernanda-4a1555273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    githubUrl: 'https://github.com/mfernanda-sc', 
  },

  {
    id: 4,
    name: 'Kelly Ferreira da Silva',
    photoUrl: fotoKelly, 
    linkedinUrl: 'https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kelly-silva-9aa298393',
    githubUrl: 'http://Github.com/kferreira888', 
  },

  {
    id: 5,
    name: 'Rafaela M° Cavalcanti',
    photoUrl: fotoRafa, 
    linkedinUrl: 'https://www.linkedin.com/in/rafaela-martins-8ab32b352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: 'https://share.google/hAYMGxdoI3gbt7AWz', 
  },

];

const DevelopersPage = () => {
  return (
    <div className="developers-container">
      <h1>Desenvolvedoras do Projeto</h1>
      
      <div className="cards-grid">
        {developersData.map(developer => (
          <DeveloperCard 
            key={developer.id} 
            developer={developer} 
          />
        ))}
      </div>
    </div>
  );
};

export default DevelopersPage;


