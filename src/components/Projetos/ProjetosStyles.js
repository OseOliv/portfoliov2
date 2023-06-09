import styled from "styled-components";

export const ProjetosSection = styled.section`
  height: 100%;
  background: rgb(4, 9, 32);
  background-size: cover;
`;

export const ProjetosContainer = styled.div`
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem 3.125rem;

  display: flex;

  @media screen and (max-width: 600px){
    padding: 0;
  }

  @media screen and (max-width: 756px){
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  @media screen and (max-width: 900px){
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

`;

export const CardContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: auto;
  padding: 50px;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 0rem;
  }
`
export const CardContentItem = styled.div`
  display: flex;
`;

export const ProjetoTittleContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem 3.125rem;

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
export const ProjetoTittle = styled.h1`
  color: aqua;
  font-size: 2.225rem;
  font-weight: 400;
  font-family: "Source Code Pro", monospace;
  text-align: start;
  margin-top: 0rem;
  padding-top: 7rem;

  @media screen and (max-width: 600px) {
    padding-top: 3rem;
  }

`;

export const ProjetosCardContainer = styled.div`
  width: 350px;
  height: 450px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5;
  transition: 0.3s;
  animation: ease-in;
  background-color: #01010843;
  border-radius: 2%;
  border: 2px solid rgb(138, 43, 226);
  margin-top: 4rem;
  margin-bottom: 7rem;

  &:hover {
    transform: scale(1.5);
    box-shadow: 0px 0px 35px 0 rgb(138, 43, 226);
    cursor: pointer;

    @media screen and (max-width: 600px){
    transform: scale(1.1);
  }
  }
  @media screen and (max-width: 600px){
    margin-bottom: 1rem;
  }
 
`;
export const ProjetosTittleCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjetosCardImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  width: auto;
`;
export const ProjetosCardImg = styled.img`
  width: 20.875rem;
  height: 10.938rem;
  border: 2px solid #03e8f4;
  border-radius: 2%;
  margin: 7px auto;
`;

export const ProjetosCardTittle = styled.h2`
  color: aqua;
  text-align: center;
  font-family: "Source Code Pro", monospace;
  color: rgb(178, 224, 224);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjetosCardDescContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjetosCardDescText = styled.p`
  color: white;
  font-family: "Source Code Pro", monospace;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const ProjetosCardSkillContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const ProjetosCardSkillText = styled.span`
  color: #03e8f471;
  display: flex;
  text-align: center;
  font-size: 0.75rem;
  align-items: center;
  justify-content: center;
  font-family: "Source Code Pro", monospace;
`;
export const ProjetosCardButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjetosCardButton = styled.button`
  border-radius: 3%;
  background: none;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-weight: 600;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 1px solid #03e9f4;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  margin: 15px;
  padding: 5px;

  &:before {
    background: rgb(138, 43, 226);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 102%;
    height: 0%;
  }

  &:hover:before {
    height: 200%;
  }
  &:hover {
    z-index: 1;
    color: #03e9f4;
  }



`;
