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

display: flex;
justify-content: space-between;
align-items:center;
  
`;
export const ContainerImagem = styled.div`
width: 100%;
height:100%;
margin-top: 2.5em;
display: flex;
justify-content: center;
gap:10px;
`;
export const ContainerImagemSobre = styled.div`
width: 100%;
height:100%;
margin-top: 2.5em;
display: flex;
justify-content: center;
gap:10px;
@media (max-width: 720px)
{
  flex-direction: column;
  align-items:center;
}
`;
export const ContainerLogo = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`;
export const Logo = styled.div`

    max-width: 20px;
    min-width: 80px;
    margin-left: 0px;
    @media (max-width: 330px)
    {
        min-width: 55px;
        max-width: 30px;
    }
`;
export const ImagemLogo = styled.img`
width:70px;
@media (max-width: 330px)
 {
    min-width: 50px;
    max-width: 30px;
}
`;
export const LogoName = styled.div`


`;
export const ContainerBemVindo = styled.div`


`;
export const PBemVindo = styled.p `
font-weight: bold;

font-size: 16px;
    font-weight: 300;
    margin: 0.2em 0.5em;
`;

export const ContainerLink = styled.div`

display: flex;
align-items: center;

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
  width:100px;
  margin: 5px;
  font-size: 90%;
  text-align:center;
}
@media (max-width: 380px) {
  width: 100px;
    margin: 5px;
    font-size: 90%;
    text-align:center;
}
`;
export const LinkDescricao = styled.a`
color: inherit;
text-decoration: none;
font-size: 16px;
  font-weight: 300;
  margin: 0.2em 0.5em;
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
  width: 100px;
    margin: 5px;
    font-size: 15px;
}
@media (max-width: 380px) {
  width: 85px;
  margin: 5px;
  font-size: 14px;
}
`;
export const H2 = styled.h2`
font-size: 26px;
font-weight: 600;
color:#EFC700;
@media (max-width: 330px)
 {
  font-size: 18px;
}
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
@media(max-width:720px){
  height:306px;

}
`;
export const Videos = styled.video`
width:230px;
@media(max-width:720px){
  height:306px;

}
`;
export const ContainerSobre = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 0.5em;
margin-top:8px;
`;
export const ContainerNossosServicos = styled.div`
background-color: #18307b;

box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px inset;
width: 100%;
padding-bottom: 50px;
`;
export const ContainerProdutos = styled.div`
background-color: #EFC700;
box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px inset;
width: 100%;
padding-bottom: 50px;
`;
export const H2Titulo = styled.h2`
color: rgb(255, 255, 255);
    text-align: center;
    font-size: 27px;
    margin: 15px;
`;
export const PSobre = styled.p`
color: rgb(255, 255, 255);
    font-weight: 600;
    font-size: 12px;
    max-width: 39em;
    text-align: justify;
`;
export const Footer = styled.footer`
  background-color: #ffffff;
  padding: 10px 0;
  box-shadow: inset 0px 4px 4px #00000040;
`;

export const ContainerFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterLogo = styled.div`
  width: 44px;
  display:flex;
  align-items:center
`;

export const ImageLogoFooter = styled.img`
  min-width: 44px;
  width: 100%;
  height: 100%;
  margin: 11px 0 0 11px;
 
`;

export const FooterLinks = styled.div``;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
  text-decoration: none;
  color: #242424;
  font-size: 15px;
  transition: color 0.3s ease;
  font-weight: bold;

  @media (max-width: 471px) {
    margin-left: 11px;
  }

  &:hover {
    color: #21325a;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
`;

export const PFooter = styled.p`
  font-size: 12px;
  color: #242424;
  margin: 0;
`;
export const H2Footer = styled.h2`
font-size: 18px;
font-weight: 600;
margin-top: 16px;
margin-left:5px;
@media (max-width: 330px)
 {
  font-size: 18px;
}

`;
export const LogoNameFooter = styled.div`


`;


 


