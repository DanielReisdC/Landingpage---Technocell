import React from 'react';
import LogoTechnocell from '../../assets/logo.png'
import Imagem1 from '../../assets/Imagem1.jpg'
import Imagem2 from '../../assets/Imagem2.jpg'
import Imagem3 from '../../assets/Imagem3.jpg'
import Imagem4 from '../../assets/Imagem4.jpg'
import Imagem5 from '../../assets/Imagem5.jpg'
import Imagem51 from '../../assets/Imagem51.jpg'
import Imagem52 from '../../assets/Imagem52.jpg'
import Imagem6 from '../../assets/Imagem6.jpg'
import Imagem7 from '../../assets/Imagem7.jpg'
import Imagem8 from '../../assets/Imagem8.jpg'

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
    ContainerNossosServicos,
    ContainerSobre,
    H2Titulo,
    PSobre,
    ContainerProdutos,
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
             <ContainerNossosServicos>
                <H2Titulo>NOSSOS SERVIÇOS</H2Titulo>
                
                <ContainerImagem>
                    <Imagens src={Imagem4}></Imagens>
                    <Imagens src={Imagem5}></Imagens>
                    
                </ContainerImagem>
                <ContainerSobre><PSobre> AQUI CONSERTAMOS O SEU APARELHO SEJA QUAL FOR A MARCA DEIXANDO ELE NOVO EM FOLHA. FAZEMOS A TROCA DO DISPLAY, BATERIA E TAMBEM DE OUTROS COMPONENTES.</PSobre></ContainerSobre>
                <ContainerImagem>
                    <Imagens src={Imagem52}></Imagens>
                    <Imagens src={Imagem51}></Imagens>
                    
                </ContainerImagem>
                <ContainerSobre><PSobre> TAMBEM COLOCAMOS PELÍCULA E FAZEMOS LIMPEZA EM SEU APARELHO.</PSobre></ContainerSobre>
               
             </ContainerNossosServicos>
             <ContainerProdutos>
                <H2Titulo>VARIEDADE DE PRODUTOS</H2Titulo>
                <ContainerImagem>
                    <Imagens src={Imagem6}></Imagens>
                    <Imagens src={Imagem7}></Imagens>
                    <Imagens src={Imagem8}></Imagens>
                </ContainerImagem>
                <ContainerSobre><PSobre></PSobre></ContainerSobre>
             </ContainerProdutos>
             </ContainerPrincipal>
            </Main>
        </AppBody>

    );


}
export default LandingPage;