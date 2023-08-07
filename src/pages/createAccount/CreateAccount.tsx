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
  InputContent
} from './styles'
import { Link } from 'react-router-dom'
import vk from '../../assets/icons/vkIcon.svg'
import cars from '../../assets/imgs/carsPurple.svg'

export function CreateAccountPartner() {
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
                <Textop><Link to='/createAccountCustomer'>Cliente</Link></Textop>
              </Top>
              <Content>
                <Title>Cadastre-se</Title>
                <Text>É rápido e fácil</Text>
                <ContentBottom>
                  <FormLogin>
                    <InputContent>
                      <InputArea $primary placeholder='Razão Social' required/>
                      <InputArea $primary placeholder='CNPJ' required/> 
                    </InputContent>
                    <InputContent>
                      <InputArea $email placeholder='E-mail' required/> 
                      <InputArea placeholder='Telefone' required/>
                    </InputContent>
                    <InputContent>
                      <InputArea $primary placeholder='Senha' required/>
                      <InputArea $primary placeholder='Confirmação de Senha' required/> 
                    </InputContent>
                    <ButtonContent>
                      <Button><Link to='/'>Criar Conta</Link></Button>
                    </ButtonContent>
                  </FormLogin>
                  <BottomContent>
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

export function CreateAccountCustomer() {
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
                <Textop><Link to='/createAccountPartner'>Empresa</Link></Textop>
                <Textop $primary>Cliente</Textop>
              </Top>
              <Content>
                <Title>Cadastre-se</Title>
                <Text>É rápido e fácil</Text>
                <ContentBottom>
                  <FormLogin>
                    <InputContent>
                      <InputArea $primary placeholder='Nome' required/>
                      <InputArea $primary placeholder='CPF' required/> 
                    </InputContent>
                    <InputContent>
                      <InputArea $email placeholder='E-mail' required/> 
                      <InputArea placeholder='Telefone' required/>
                    </InputContent>
                    <InputContent>
                      <InputArea $primary placeholder='Senha' required/>
                      <InputArea $primary placeholder='Confirmação de Senha' required/> 
                    </InputContent>
                    <ButtonContent>
                      <Button><Link to='/'>Criar Conta</Link></Button>
                    </ButtonContent>
                  </FormLogin>
                  <BottomContent>
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