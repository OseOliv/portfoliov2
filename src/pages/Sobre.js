import React from "react";
import "../components/Sobre/Sobre.css";
import {
  AboutSection,
  AboutContainer,
  AboutTextTitle,
  AboutTextContent,
  AboutAvatar,
  AboutAvatarContainer,
  AboutTextTitleContainer,
  AboutSkillContainet,
} from "../components/Sobre/SobreStyles";

function Sobre() {
  return (
    <>
      <AboutSection>
        <AboutTextTitleContainer>
          <AboutTextTitle> Sobre mim </AboutTextTitle>
        </AboutTextTitleContainer>

        <AboutContainer>
          <AboutTextContent>
            <p>
              Eu sou Oseas Oliveira, desenvolvedor web de Salvador-BA. Como
              profissional eu me esforço para criar designs sucintos, elegantes
              e responsivos, que proporcionem a melhor experiência possível aos
              usuários.
              <br />
              <br />
              Minha primeira interação com tecnologia ocorreu por meio da minha
              família, que sempre trabalhou na área de TI. Em 2005, tive meu
              primeiro contato com "Web Designer" e fiquei fascinado com o que
              poderia criar e fazer visualmente com um computador.
              <br />
              <br />
              Trabalhei como designer gráfico de 2008 até 2012, quando decidi me
              dedicar à área de gastronomia e trabalhei como chef de cozinha por
              quase nove anos em navios de cruzeiro. No entanto, me mantive
              atento as novidades que surgiram na área de desenvolvimento web
              nos últimos anos.
              <br />
              <br />
              Em janeiro de 2023, decidi voltar para a área de TI. Desde então
              tenho me dedicado a estudar as principais linguagens de
              programação front-end, frameworks e bibliotecas mais recentes.
              <br />
              <br />
              Algumas linguagens, frameworks e bibliotecas com as quais tenho
              trabalhado recentemente:
              <br />
              <br />
            </p>
            <AboutSkillContainet>
              <div className="main-about-skills">
                <ul className="main-about-skills-list">
                  <li className="skill">HTML</li>
                  <li className="skill">CSS</li>
                  <li className="skill">Axios</li>
                </ul>
                <ul>
                  <li className="skill">JavaScript</li>
                  <li className="skill">TypeScript</li>
                  <li className="skill">Chakra UI</li>
                </ul>
                <ul>
                  <li className="skill">React</li>
                  <li className="skill">Node.js</li>
                  <li className="skill">styled-components</li>
                </ul>
              </div>
            </AboutSkillContainet>
          </AboutTextContent>
          <AboutAvatarContainer>
            <AboutAvatar />
          </AboutAvatarContainer>
        </AboutContainer>
      </AboutSection>
    </>
  );
}

export default Sobre;
