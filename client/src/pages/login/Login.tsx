import React, { useState } from 'react'

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
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem('Login feito com sucesso');
    setCnpj('');
    setPassword('');
  };
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
                  <FormLogin onSubmit={handleSubmit}>
                    <InputArea $primary placeholder='CNPJ' required value={cnpj} onChange={(e) => setCnpj(e.target.value)}/> 
                    <InputArea $primary placeholder='Senha' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <ButtonContent>
                      <Button><Linkinho to='/'>Entrar</Linkinho></Button>
                    </ButtonContent>
                  </FormLogin>
                  <BottomContent>
                    <p>Esqueci minha senha</p>
                    <p>Problemas para entrar? Fale conosco</p>
                    {mensagem && <p>{mensagem}</p>}
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
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem('Login feito com sucesso');
    setCpf('');
    setPassword('');
  };

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
                  <FormLogin onSubmit={handleSubmit}>
                    <InputArea $primary placeholder='CPF' required value={cpf} onChange={(e) => setCpf(e.target.value)}/> 
                    <InputArea $primary placeholder='Senha' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <ButtonContent>
                      <Button><Linkinho to='/'>Entrar</Linkinho></Button>
                    </ButtonContent>
                  </FormLogin>
                  <BottomContent>
                    <p>Esqueci minha senha</p>
                    <p>Problemas para entrar? Fale conosco</p>
                    {mensagem && <p>{mensagem}</p>}
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