import React from "react";
import { Link } from "react-router-dom";
import {
  ProjetosContainer,
  ProjetosCardDescText,
  ProjetosCardButton,
  ProjetosCardButtonContainer,
  ProjetosCardContainer,
  ProjetosCardDescContainer,
  ProjetosCardSkillContainer,
  ProjetosCardSkillText,
  ProjetosCardTittle,
  ProjetosCardImgContainer,
  ProjetosCardImg,
  ProjetosTittleCardContainer,
} from "./ProjetosStyles";

import ProjetoImg0 from "../../assets/img/teste-projetos.png";


export default function CardContent(props) {
  return (
    <>
      <ProjetosContainer>
        <ProjetosCardContainer>
          <ProjetosCardImgContainer>
            <ProjetosCardImg src={ProjetoImg0} />
          </ProjetosCardImgContainer>

          <ProjetosTittleCardContainer>
            <ProjetosCardTittle>Portfolio v1.0</ProjetosCardTittle>
          </ProjetosTittleCardContainer>

          <ProjetosCardDescContainer>
            <ProjetosCardDescText>
              Meu primeiro projeto de portfólio usando apenas HTML, CSS e
              JavaScript, sem o uso de nenhuma biblioteca ou framework.
            </ProjetosCardDescText>
          </ProjetosCardDescContainer>

          <ProjetosCardSkillContainer>
            <ProjetosCardSkillText>
              ▹HTML ▹CSS ▹JavaScript
            </ProjetosCardSkillText>
          </ProjetosCardSkillContainer>

          <ProjetosCardButtonContainer>
            <Link to="https://github.com/OseOliv/portfolio-v1" target="_blanc">
              <ProjetosCardButton>Github</ProjetosCardButton>
            </Link>
          </ProjetosCardButtonContainer>
        </ProjetosCardContainer>
      </ProjetosContainer>
    </>
  );
}
