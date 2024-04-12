import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Bootstrap.css';
import LogoTechnocell from '../../assets/logo.png';
import Imagem1 from '../../assets/Imagem1.jpg';
import Imagem2 from '../../assets/Imagem2.jpg';
import Imagem3 from '../../assets/Imagem3.jpg';
import Imagem4 from '../../assets/Imagem4.jpg';
import Imagem5 from '../../assets/Imagem5.jpg';
import Video1 from '../../assets/video1.mp4';
import Video2 from '../../assets/video2.mp4';
import Imagem6 from '../../assets/Imagem6.jpg';
import Imagem7 from '../../assets/Imagem7.jpg';
import Imagem8 from '../../assets/Imagem8.jpg';
import Imagem9 from '../../assets/imagem9.jpg';
import Imagem10 from '../../assets/imagem10.jpg';
import Imagem11 from '../../assets/imagem11.jpg';

import {
  AppBody,
  Header,
  Nav,
  Logo,
  Link,
  ImagemLogo,
  LogoName,
  H2,
  ContainerLogo,
  Main,
  ContainerSlogan,
  H1,
  ContainerPrincipal,
  PDescricao,
  ContainerImagem,
  Imagens,
  ContainerNossosServicos,
  ContainerSobre,
  H2Titulo,
  H2Titulo1,
  PSobre,
  ContainerProdutos,
  ContainerLink,
  ContainerImagemSobre,
  LinkDescricao,
  Footer,
  ContainerFooter,
  FooterTop,
  FooterLogo,
  FooterLinks,
  StyledUl,
  StyledLi,
  FooterBottom,
  PFooter,
  ImageLogoFooter,
  LogoNameFooter,
  H2Footer,
  ContainerBemVindo,
  PBemVindo,
  Videos,
} from './styles';

function LandingPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpe o listener de resize ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showCarousel = windowWidth <= 720;

  return (
    <AppBody>
      <Header>
        <Nav>
          <ContainerLogo>
            <Logo>
              <ImagemLogo src={LogoTechnocell} alt="Logo TechnoCell"/>
            </Logo>
            <LogoName>
              <H2>TechnoCell</H2>
            </LogoName>
          </ContainerLogo>
          <ContainerLink>
            <Link>SOBRE NÓS</Link>
          </ContainerLink>
        </Nav>
      </Header>
      <Main>
        <ContainerPrincipal>
          <ContainerSlogan>
            <H1>EVOLUINDO SEU MUNDO</H1>
             <PDescricao>
              <LinkDescricao>CELULARES</LinkDescricao> -{' '}
              <LinkDescricao>ACESSÓRIOS</LinkDescricao> -{' '}
              <LinkDescricao>{windowWidth < 720 ? 'ASSIST.TÉCNICA' : 'ASSISTÊNCIA TÉCNICA'}</LinkDescricao>
            </PDescricao>
          </ContainerSlogan>
          {showCarousel ? (
            <ContainerImagem>
              <Carousel>
                <Carousel.Item className="carousel-item">
                  <Imagens src={Imagem1} alt="Primeira Imagem" />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <Imagens src={Imagem2} alt="Segunda Imagem" />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <Imagens src={Imagem3} alt="Terceira Imagem" />
                </Carousel.Item>
              </Carousel>
            </ContainerImagem>
          ) : (
            <ContainerImagem>
              <Imagens src={Imagem1} alt="Primeira Imagem" />
              <Imagens src={Imagem2} alt="Segunda Imagem" />
              <Imagens src={Imagem3} alt="Terceira Imagem" />
            </ContainerImagem>
          )}
          
          <ContainerNossosServicos>
            <H2Titulo1>NOSSOS SERVIÇOS</H2Titulo1>
            <ContainerImagemSobre>
              <Imagens src={Imagem4} alt="Quarta Imagem" />
              <Imagens src={Imagem5} alt="Quinta Imagem"/>
            </ContainerImagemSobre>
            <ContainerSobre>
              <PSobre>
                AQUI CONSERTAMOS O SEU APARELHO SEJA QUAL FOR A MARCA, DEIXANDO ELE NOVO EM FOLHA. FAZEMOS A TROCA DO DISPLAY, BATERIA E TAMBÉM DE OUTROS COMPONENTES.
              </PSobre>
            </ContainerSobre>
            <ContainerImagemSobre>
              <Videos controls src={Video1} />
              <Videos controls src={Video2} />
            </ContainerImagemSobre>
            <ContainerSobre>
              <PSobre>TAMBÉM COLOCAMOS PELÍCULA E FAZEMOS LIMPEZA EM SEU APARELHO.</PSobre>
            </ContainerSobre>
          </ContainerNossosServicos>
          <ContainerProdutos>
            <H2Titulo>VARIEDADE DE PRODUTOS</H2Titulo>
            <ContainerImagemSobre>
              <Imagens src={Imagem6} alt="SextaImagem"/>
              <Imagens src={Imagem7} alt="Sétima Imagem"/>
              <Imagens src={Imagem8} alt="Oitava Imagem"/>
            </ContainerImagemSobre>
               <ContainerImagemSobre>
              <Imagens src={Imagem9}alt="Nona Imagem" />
              <Imagens src={Imagem10}alt="Décima Imagem"/>
              <Imagens src={Imagem11} alt="Décima primeira Imagem"/>
            </ContainerImagemSobre>
            <ContainerSobre>
              <PSobre></PSobre>
            </ContainerSobre>
          </ContainerProdutos>
        </ContainerPrincipal>
      </Main>
      <Footer>
        <ContainerFooter>
          <FooterTop>
            <FooterLogo>
              
                <ImageLogoFooter src={LogoTechnocell} alt="Logo TechnoCell"/>
                <LogoNameFooter>
              <H2Footer>TechnoCell</H2Footer>
            </LogoNameFooter>
              
            </FooterLogo>
            <FooterLinks>
              <StyledUl>
                <StyledLi>
                  Página Inicial
                </StyledLi>
                
                <StyledLi >
                  Sobre Nós
                </StyledLi>
              </StyledUl>
            </FooterLinks>
          </FooterTop>
          <FooterBottom>
            <PFooter>Todos os direitos reservados &copy; 2024 TechnoCell</PFooter>
          </FooterBottom>
        </ContainerFooter>
      </Footer>
    </AppBody>
  );
}

export default LandingPage;
