import styled from "styled-components";
export const AppBody = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
  height: 100vh;
`;
export const Header = styled.div`
margin:2em;
`;
export const Nav= styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items:center;
  
`;
export const ContainerImagem = styled.div`
width: 100%;
margin-top: 2.5em;
display: flex;
justify-content: center;
`;
export const ContainerLogo = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`;
export const Logo = styled.div`

width:50px;
`;
export const ImagemLogo = styled.img`
width:80px;
`;
export const LogoName = styled.div`
width: 57%;

`;
export const Link = styled.a`

text-decoration: none;
color: #000000;
font-size: 17px;
font-weight: 600;
margin-left: 2em;
position: relative;
display: inline-block;
cursor: pointer;
transition: color 0.3s ease-in-out;

@media (max-width: 450px) {
  display: ${(props) => (props.$remove ? "none" : "display: inline-block")};
}

&::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #000000;
  transition: width 0.3s ease-in-out;
}

&:hover {
  color: #18307b;

  &::after {
    width: 100%;
  }
}

@media (max-width: 768px) {
  margin: 5px;
  font-size: 80%;
}
 
`;
export const H2 = styled.h2`
font-size: 30px;
font-weight: 600;
color:#FFD200;
`;

export const Main = styled.div`

`;
export const ContainerPrincipal = styled.div`
display: flex;
    width: 100%;
    flex-direction: column;
`;
export const ContainerSlogan = styled.div`
width: 100%;
text-align: center;
`;

export const H1 = styled.h1`
margin: 1em 0.2em 1px;   
`;
export const PDescricao = styled.p `
font-size: 16px;
    font-weight: 300;
    margin: 0.2em 0.5em;
`;

export const Imagens = styled.img`
width:230px;
margin-left:15px;
`;
export const ContainerSobre = styled.div`
background-color: #18307b;
box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px inset;
width: 100%;
padding-bottom: 50px;
`;
export const H2Sobre = styled.h2`
color: rgb(255, 255, 255);
    text-align: center;
    font-size: 27px;
    margin: 15px;
`;
export const PSobre = styled.p`
color: rgb(255, 255, 255);
    font-weight: 600;
    font-size: 12px;
    max-width: 31em;
`;


 

