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


import ProjetoImg3 from "../../assets/img/teste-projetos3.png";

export default function CardContent3(props) {
  return (
    <>
      <ProjetosContainer>
        <ProjetosCardContainer>
          <ProjetosCardImgContainer>
            <ProjetosCardImg src={ProjetoImg3} />
          </ProjetosCardImgContainer>

          <ProjetosTittleCardContainer>
            <ProjetosCardTittle>Pokedex Pokemon</ProjetosCardTittle>
          </ProjetosTittleCardContainer>

          <ProjetosCardDescContainer>
            <ProjetosCardDescText>
              Modelo simples de uma Pokedex Pokémon, utilizando a PokeAPI e
              estilizando apenas com puro CSS e JavaScript.
            </ProjetosCardDescText>
          </ProjetosCardDescContainer>

          <ProjetosCardSkillContainer>
            <ProjetosCardSkillText>
            ▹HTML ▹CSS ▹JavaScript ▹PokeAPI
            </ProjetosCardSkillText>
          </ProjetosCardSkillContainer>

          <ProjetosCardButtonContainer>
            <Link to="https://github.com/OseOliv/Modelo-Simples-PokeDex-Dio" target="_blanc">
              <ProjetosCardButton>Github</ProjetosCardButton>
            </Link>
          </ProjetosCardButtonContainer>
        </ProjetosCardContainer>
      </ProjetosContainer>
    </>
  );
}
