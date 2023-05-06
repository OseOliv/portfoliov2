import React from "react";
import {
  ContatoContainer,
  ContatoSection,
  ContatoTittle,
  ContatoButton,
  ContatoEmail,
  ContatoForm,
  ContatoName,
  ContatoText,
  ContatoTittleContainer,
} from "../components/Contato/ContatoStyles";

function Contato() {
  return (
    <>
      <ContatoSection>
      <ContatoTittleContainer>
      <ContatoTittle>Contato</ContatoTittle>
      </ContatoTittleContainer>
      
        <ContatoContainer>
          
          <ContatoForm>
            <ContatoName type="name" placeholder="Digite seu nome"/>
            <ContatoEmail type="email" placeholder="Digite seu email" />
            <ContatoText type="text" placeholder="Digite sua mensagem"/>
            <ContatoButton>ENVIAR</ContatoButton>
          </ContatoForm>

        </ContatoContainer>
      </ContatoSection>
    </>
  );
}

export default Contato;
