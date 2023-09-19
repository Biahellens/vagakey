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
  InputContent,
  InputAreaPassword,
  Linkinho
} from './styles'
import vk from '../../assets/icons/vkIcon.svg'
import cars from '../../assets/imgs/carsPurple.svg'

export function CreateAccountPartner() {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem('Conta Criada com sucesso');
    setCnpj('');
    setPassword('');
    setPasswordConfirm('');
    setFantasyName('');
    setEmail('');
    setPhone('');
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
                <Textop><Linkinho to='/createAccountCustomer'>Cliente</Linkinho></Textop>
              </Top>
              <Content>
                <Title>Cadastre-se</Title>
                <Text>É rápido e fácil</Text>
                <ContentBottom>
                  <FormLogin onSubmit={handleSubmit}>
                    <InputContent>
                      <InputArea $primary placeholder='Razão Social' required value={fantasyName} onChange={(e) => setFantasyName(e.target.value)}/>
                      <InputArea $primary placeholder='CNPJ' required value={cnpj} onChange={(e) => setCnpj(e.target.value)}/> 
                    </InputContent>
                    <InputContent>
                      <InputArea $email placeholder='E-mail' required value={email} onChange={(e) => setEmail(e.target.value)}/> 
                      <InputArea placeholder='Telefone' required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </InputContent>
                    <InputContent>
                      <InputAreaPassword placeholder='Senha' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                      <InputAreaPassword placeholder='Confirmação de Senha' required value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/> 
                    </InputContent>
                    <ButtonContent>
                      <Linkinho to='/'>
                        <Button placeholder="Criar Conta"/>
                      </Linkinho>
                    </ButtonContent>
                  </FormLogin>
                  <BottomContent>
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

export function CreateAccountCustomer() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem('Conta Criada com sucesso');
    setCpf('');
    setPassword('');
    setPasswordConfirm('');
    setFantasyName('');
    setEmail('');
    setPhone('');
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
                <Textop><Linkinho to='/createAccountPartner'>Empresa</Linkinho></Textop>
                <Textop $primary>Cliente</Textop>
              </Top>
              <Content>
                <Title>Cadastre-se</Title>
                <Text>É rápido e fácil</Text>
                <ContentBottom>
                  <FormLogin onSubmit={handleSubmit}>
                    <InputContent>
                      <InputArea $primary placeholder='Nome' required value={fantasyName} onChange={(e) => setFantasyName(e.target.value)}/>
                      <InputArea $primary placeholder='CPF' required value={cpf} onChange={(e) => setCpf(e.target.value)}/> 
                    </InputContent>
                    <InputContent>
                      <InputArea $email placeholder='E-mail' required value={email} onChange={(e) => setEmail(e.target.value)}/> 
                      <InputArea placeholder='Telefone' required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </InputContent>
                    <InputContent>
                      <InputAreaPassword placeholder='Senha' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                      <InputAreaPassword placeholder='Confirmação de Senha' required value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/> 
                    </InputContent>
                    <ButtonContent>
                      <Linkinho to='/'>
                        <Button placeholder="Criar Conta"/>
                      </Linkinho>
                    </ButtonContent>
                  </FormLogin>
                  <BottomContent>
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