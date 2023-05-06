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

import ProjetoImg1 from "../../assets/img/teste-projetos1.png";

export default function CardContent1(props) {
  return (
    <>
      <ProjetosContainer>
        <ProjetosCardContainer>
          <ProjetosCardImgContainer>
            <ProjetosCardImg src={ProjetoImg1} />
          </ProjetosCardImgContainer>

          <ProjetosTittleCardContainer>
            <ProjetosCardTittle>CoffeShop Website</ProjetosCardTittle>
          </ProjetosTittleCardContainer>

          <ProjetosCardDescContainer>
            <ProjetosCardDescText>
              Modelo de website para uma cafeteria, feito com alguns frameworks
              e utilizando algumas bibliotecas.
            </ProjetosCardDescText>
          </ProjetosCardDescContainer>

          <ProjetosCardSkillContainer>
            <ProjetosCardSkillText>
            ▹HTML ▹CSS ▹Bootstrap ▹JavaScript
            </ProjetosCardSkillText>
          </ProjetosCardSkillContainer>

          <ProjetosCardButtonContainer>
            <Link to="https://github.com/OseOliv/Exemple-Coffee-Shop-WebSite-BootStrap" target="_blanc">
              <ProjetosCardButton>Github</ProjetosCardButton>
            </Link>
          </ProjetosCardButtonContainer>
        </ProjetosCardContainer>
      </ProjetosContainer>
    </>
  );
}
