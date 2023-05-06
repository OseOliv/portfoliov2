import styled from "styled-components";
import Avatar from "../../assets/img/avatar.jpg";

export const AboutSection = styled.section`
  height: 100%;
  background: rgb(4, 9, 32);
  background-size: cover;
  
`;
export const AboutContainer = styled.div`
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem 3.125rem;
  
  display: flex;

  @media screen and (max-width: 600px){
    padding: 0rem;
  }
`;

export const AboutTextTitleContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem 3.125rem;

  @media screen and (max-width: 600px){
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`
export const AboutTextTitle = styled.h1`
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

export const AboutTextContent = styled.p`
  font-size: 1rem;
  line-height: 24px;
  text-align: start;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  color: #ffffff;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 0rem;
  padding-bottom: 7rem;

  @media screen and (max-width: 600px) {
    max-width: 350px;
    text-align: center;
    margin: 0rem auto;
  }
`;

export const AboutSkillContainet = styled.div`
  display: flex;
  width: 100%;
  max-width: 68.75rem;
  margin: 0rem auto;
  padding: 0rem 3.125rem;

  @media screen and (max-width:600px ){

    padding: 0rem;
    margin: 0rem;
    
  }

`

export const AboutAvatarContainer = styled.div`
  display: flex;
  margin-top: 6rem;

  @media screen and (max-width: 800px){
    display: none;
  }
`
export const AboutAvatar = styled.img`
  background-image: url(${Avatar});
  background-size: contain;
  border: 0.1875rem solid rgba(137, 43, 226, 0.656);
  border-radius: 10%;
  width: 16.75rem;
  height: 16.75rem;
  margin-left: 25px;

  &:hover {
    border: 0.1875rem solid aqua;
  }
`;
