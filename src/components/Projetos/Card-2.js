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

import ProjetoImg2 from "../../assets/img/teste-projetos2.png";

export default function CardContent2(props) {
  return (
    <>
      <ProjetosContainer>
        <ProjetosCardContainer>
          <ProjetosCardImgContainer>
            <ProjetosCardImg src={ProjetoImg2} />
          </ProjetosCardImgContainer>

          <ProjetosTittleCardContainer>
            <ProjetosCardTittle>Dio.me Clone</ProjetosCardTittle>
          </ProjetosTittleCardContainer>

          <ProjetosCardDescContainer>
            <ProjetosCardDescText>
              Desafio para clonar uma página usando CSS e HTML e seus estilos feito no curso
              Formação CSS Developer na DIO.me.
            </ProjetosCardDescText>
          </ProjetosCardDescContainer>

          <ProjetosCardSkillContainer>
            <ProjetosCardSkillText>
              ▹HTML ▹CSS ▹JavaScript
            </ProjetosCardSkillText>
          </ProjetosCardSkillContainer>

          <ProjetosCardButtonContainer>
            <Link
              to="https://github.com/OseOliv/Exercicio-1-CSS-DIO"
              target="_blanc"
            >
              <ProjetosCardButton>Github</ProjetosCardButton>
            </Link>
          </ProjetosCardButtonContainer>
        </ProjetosCardContainer>
      </ProjetosContainer>
    </>
  );
}
