import React, { useState } from 'react';

import { 
  Main, 
  FormContent,
  Title,
  Text,
  FormLogin,
  InputArea,
  Button,
  ButtonContent,
  IconImage,
  Image,
  Contents,
  ContentBottom,
  Linkinho
} from './styles'
import vk from '../../assets/icons/vkIcon.svg'

export function Payment () {
  const [nome, setNome] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvv, setCvv] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem('Pagamento bem-sucedido!');
    setNome('');
    setNumeroCartao('');
    setDataValidade('');
    setCvv('');
  };
  
  return (
    <div>
      <body>
        <Main>
          <Contents>
            <FormContent>
              <IconImage>
                <Image $size src={vk}/>
              </IconImage>
              <IconImage>
                <div>
                  <Title>Pagamento</Title>
                  <FormLogin onSubmit={handleSubmit}>
                    <ContentBottom>
                      <Text>Nome no cartão:</Text>
                      <InputArea value={nome} onChange={(e) => setNome(e.target.value)} required />
                    </ContentBottom>
                    <ContentBottom>
                      <Text>Número do cartão:</Text>
                      <InputArea value={numeroCartao} onChange={(e) => setNumeroCartao(e.target.value)} required />
                    </ContentBottom>
                    <ContentBottom>
                      <Text>Data de validade:</Text>
                      <InputArea value={dataValidade} onChange={(e) => setDataValidade(e.target.value)} required />
                    </ContentBottom>
                    <ContentBottom>
                      <Text>CVV:</Text>
                      <InputArea value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                    </ContentBottom>
                    <ButtonContent>
                      <Button type="submit">Pagar</Button>
                    </ButtonContent>
                  </FormLogin>
                  {mensagem && <p>{mensagem}</p>}
                </div>
              </IconImage>
            </FormContent>
          </Contents>
        </Main>
      </body>
    </div>
    
  );
}

