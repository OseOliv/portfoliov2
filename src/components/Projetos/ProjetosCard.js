import React from "react";
import {
  ProjetosSection,
  ProjetoTittleContainer,
  ProjetoTittle,
  CardContentContainer,
  
} from "./ProjetosStyles";
import CardContent from "./Card";
import CardContent1 from "./Card-1";
import CardContent2 from "./Card-2";
import CardContent3 from "./Card-3";

export default function ProjetosCard() {
  return (
    <ProjetosSection>
      <ProjetoTittleContainer>
        <ProjetoTittle>Projetos</ProjetoTittle>
      </ProjetoTittleContainer>
      <CardContentContainer>
        
        <CardContent />
        <CardContent1 />
        <CardContent2 />
        <CardContent3 />
        
      </CardContentContainer>
    </ProjetosSection>
  );
}
