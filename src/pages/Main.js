import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ButtonWrapper,
  MainSection,
  MainText,
  MainTextDescription,
  MainTextHello,
  MainTextName,
  Button,
  MainQuoteText,
} from "../components/Main/MainStyles";

function Main() {
  return (
    <>
      <MainSection>
        <Container>
          <MainTextHello>Olá, meu nome é</MainTextHello>
          <MainTextName>Oseas Oliveira.</MainTextName>
          <MainTextDescription>
            Tenho uma paixão insaciável em desenvolvimento web.
          </MainTextDescription>
          <MainText>
            Transformar minha criatividade, conhecimento e paixão pela beleza em
            um site é meu fascínio há mais de 18 anos.
          </MainText>
          <ButtonWrapper>
            <Link to="https://www.linkedin.com/in/oseoliveira/" target="_blank">
              <Button big>RESUME</Button>
            </Link>
          </ButtonWrapper>
          <MainQuoteText>
            “<i>Experience is the name everyone gives to their mistakes.</i>”{" "}
            <br></br>- Oscar Wilde
          </MainQuoteText>
        </Container>
      </MainSection>
    </>
  );
}

export default Main;
