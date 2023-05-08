import React from "react";
import {
  ProjetosSection,
  ProjetoTittleContainer,
  ProjetoTittle,
  CardContentContainer,
} from "./ProjetosStyles";
import CardContent from "./Card";

import ProImg0 from "../../assets/img/teste-projetos.png";
import ProImg1 from "../../assets/img/teste-projetos1.png";
import ProImg2 from "../../assets/img/teste-projetos2.png";
import ProImg3 from "../../assets/img/teste-projetos3.png";

export default function ProjetosCard(props) {
  return (
    <ProjetosSection>
      <ProjetoTittleContainer>
        <ProjetoTittle>Projetos</ProjetoTittle>
      </ProjetoTittleContainer>
      <CardContentContainer>
        <CardContent
          img={ProImg0}
          title="Portfolio v1.0"
          description="Meu primeiro projeto de portfólio usando apenas HTML, CSS e JavaScript, sem o uso de nenhuma biblioteca ou framework."
          skill="▹HTML ▹CSS ▹JavaScript"
          buttonlink="https://github.com/OseOliv/portfolio-v1"
        />

        <CardContent
          img={ProImg1}
          title="CoffeShop Website"
          description="Modelo de website para uma cafeteria, feito com alguns frameworks e utilizando algumas bibliotecas."
          skill="▹HTML ▹CSS ▹Bootstrap ▹JavaScript"
          buttonlink="https://github.com/OseOliv/Exemple-Coffee-Shop-WebSite-BootStrap"
        />

        <CardContent
          img={ProImg2}
          title="Dio.me Clone"
          description="Desafio para clonar uma página usando CSS e HTML e seus estilos feito no curso Formação CSS Developer na DIO.me."
          skill="▹HTML ▹CSS ▹JavaScript"
          buttonlink="https://github.com/OseOliv/Exercicio-1-CSS-DIO"
        />

        <CardContent
          img={ProImg3}
          title="Pokedex Pokemon"
          description="Modelo simples de uma Pokedex Pokémon, utilizando a PokeAPI e estilizando apenas com puro CSS e JavaScript."
          skill="▹HTML ▹CSS ▹JavaScript ▹PokeAPI"
          buttonlink="https://github.com/OseOliv/Modelo-Simples-PokeDex-Dio"
        />
      </CardContentContainer>
    </ProjetosSection>
  );
}
