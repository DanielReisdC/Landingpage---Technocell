import React from 'react';
import LogoTechnocell from '../../assets/logo.png'
import Imagem1 from '../../assets/Imagem1.jpg'
import Imagem2 from '../../assets/Imagem2.jpg'
import Imagem3 from '../../assets/Imagem3.jpg'
import{
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
    ContainerSobre,
    H2Sobre,
    PSobre
} from './styles';

function LandingPage(){
    return(
        <AppBody>
            <Header>
                <Nav>
                    <ContainerLogo>
                    <Logo ><ImagemLogo src={LogoTechnocell}></ImagemLogo></Logo>
                    <LogoName><H2>TechnoCell</H2></LogoName>
                    </ContainerLogo>
                    <Link>SOBRE NÓS</Link>
                </Nav>
            </Header>
            <Main>
            <ContainerPrincipal>
             <ContainerSlogan>
                <H1>EVOLUINDO O SEU MUNDO</H1>
                <PDescricao>CELULARES - ACESSÓRIOS - ASSISTÊNCIA TÉCNICA</PDescricao>
             </ContainerSlogan>  
             <ContainerImagem>
                <Imagens src={Imagem1}></Imagens>
                <Imagens src={Imagem2}></Imagens>
                <Imagens src={Imagem3}></Imagens>
             </ContainerImagem> 
             <ContainerSobre>
                <H2Sobre>SOBRE A GENTE</H2Sobre>
                <PSobre> </PSobre>
             </ContainerSobre>
             </ContainerPrincipal>
            </Main>
        </AppBody>

    );


}
export default LandingPage;