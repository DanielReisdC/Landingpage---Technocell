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
import Imagem51 from '../../assets/Imagem51.jpg';
import Imagem52 from '../../assets/Imagem52.jpg';
import Imagem6 from '../../assets/Imagem6.jpg';
import Imagem7 from '../../assets/Imagem7.jpg';
import Imagem8 from '../../assets/Imagem8.jpg';

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
  PSobre,
  ContainerProdutos,
  ContainerLink,
  ContainerImagemSobre
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
              <ImagemLogo src={LogoTechnocell} />
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
            <H1>EVOLUINDO O SEU MUNDO</H1>
            <PDescricao>CELULARES - ACESSÓRIOS - ASSISTÊNCIA TÉCNICA</PDescricao>
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
            <H2Titulo>NOSSOS SERVIÇOS</H2Titulo>
            <ContainerImagemSobre>
              <Imagens src={Imagem4} />
              <Imagens src={Imagem5} />
            </ContainerImagemSobre>
            <ContainerSobre>
              <PSobre>
                AQUI CONSERTAMOS O SEU APARELHO SEJA QUAL FOR A MARCA DEIXANDO ELE NOVO EM FOLHA. FAZEMOS A TROCA DO DISPLAY, BATERIA E TAMBÉM DE OUTROS COMPONENTES.
              </PSobre>
            </ContainerSobre>
            <ContainerImagemSobre>
              <Imagens src={Imagem52} />
              <Imagens src={Imagem51} />
            </ContainerImagemSobre>
            <ContainerSobre>
              <PSobre>TAMBÉM COLOCAMOS PELÍCULA E FAZEMOS LIMPEZA EM SEU APARELHO.</PSobre>
            </ContainerSobre>
          </ContainerNossosServicos>
          <ContainerProdutos>
            <H2Titulo>VARIEDADE DE PRODUTOS</H2Titulo>
            <ContainerImagemSobre>
              <Imagens src={Imagem6} />
              <Imagens src={Imagem7} />
              <Imagens src={Imagem8} />
            </ContainerImagemSobre>
            <ContainerSobre>
              <PSobre></PSobre>
            </ContainerSobre>
          </ContainerProdutos>
        </ContainerPrincipal>
      </Main>
    </AppBody>
  );
}

export default LandingPage;
