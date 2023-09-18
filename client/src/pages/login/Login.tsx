import React from 'react'

import { 
  Main, 
  ImageContent, 
  FormContent,
  Textop,
  Top,
  Content,
  Title,
  Text,
  FormLogin,
  InputArea,
  Button,
  BottomContent,
  ButtonContent,
  IconImage,
  Image,
  Contents,
  ContentBottom,
  Linkinho
} from './styles'
import vk from '../../assets/icons/vkIcon.svg'
import cars from '../../assets/imgs/carsPurple.svg'

export function LoginPartner() {
  return (
    <div>
      <body>
        <Main>
          <Contents>
            <ImageContent>
              <IconImage>
                <Image $size src={vk}/>
              </IconImage>
              <IconImage>
                <Image src={cars}/>
              </IconImage>
            </ImageContent>
            <FormContent>
              <Top>
                <Textop $primary>Empresa</Textop>
                <Textop><Linkinho to='/loginCustomer'>Cliente</Linkinho></Textop>
              </Top>
              <Content>
                <Title>Iniciar Sessão</Title>
                <Text><Linkinho to="/createAccountPartner">Não possuo cadastro</Linkinho></Text>
                <ContentBottom>
                  <FormLogin>
                    <InputArea $primary placeholder='CNPJ' required/> 
                    <InputArea $primary placeholder='Senha' required/>
                    <ButtonContent>
                      <Button><Linkinho to='/'>Entrar</Linkinho></Button>
                    </ButtonContent>
                  </FormLogin>
                  <BottomContent>
                    <p>Esqueci minha senha</p>
                    <p>Problemas para entrar? Fale conosco</p>
                  </BottomContent>
                </ContentBottom>
              </Content>
            </FormContent>
          </Contents>
        </Main>
      </body>
    </div>
  )
}

export function LoginCustomer() {
  return (
    <div>
      <body>
        <Main>
          <Contents>
            <ImageContent>
              <IconImage>
                <Image $size src={vk}/>
              </IconImage>
              <IconImage>
                <Image src={cars}/>
              </IconImage>
            </ImageContent>
            <FormContent>
              <Top>
                <Textop><Linkinho to='/loginPartner'>Empresa</Linkinho></Textop>
                <Textop $primary>Cliente</Textop>
              </Top>
              <Content>
                <Title>Iniciar Sessão</Title>
                <Text><Linkinho to="/createAccountPartner">Não possuo cadastro</Linkinho></Text>
                <ContentBottom>
                  <FormLogin>
                    <InputArea $primary placeholder='CPF' required/> 
                    <InputArea $primary placeholder='Senha' required/>
                    <ButtonContent>
                      <Button><Linkinho to='/'>Entrar</Linkinho></Button>
                    </ButtonContent>
                  </FormLogin>
                  <BottomContent>
                    <p>Esqueci minha senha</p>
                    <p>Problemas para entrar? Fale conosco</p>
                  </BottomContent>
                </ContentBottom>
              </Content>
            </FormContent>
          </Contents>
        </Main>
      </body>
    </div>
  )
}