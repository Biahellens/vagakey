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
  ContentBottom
} from './styles'
import { Link } from 'react-router-dom'
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
                <Textop><Link to='/loginCustomer'>Cliente</Link></Textop>
              </Top>
              <Content>
                <Title>Iniciar Sessão</Title>
                <Text>Não possuo cadastro</Text>
                <ContentBottom>
                  <FormLogin>
                    <InputArea $primary placeholder='CNPJ' required/> 
                    <InputArea $primary placeholder='Senha' required/>
                    <ButtonContent>
                      <Button><Link to='/'>Entrar</Link></Button>
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
                <Textop><Link to='/loginPartner'>Empresa</Link></Textop>
                <Textop $primary>Cliente</Textop>
              </Top>
              <Content>
                <Title>Iniciar Sessão</Title>
                <Text>Não possuo cadastro</Text>
                <ContentBottom>
                  <FormLogin>
                    <InputArea $primary placeholder='CPF' required/> 
                    <InputArea $primary placeholder='Senha' required/>
                    <ButtonContent>
                      <Button><Link to='/'>Entrar</Link></Button>
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