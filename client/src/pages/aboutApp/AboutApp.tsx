import React from 'react'

import { 
  Main, 
  Contents,
  Text,
  H1,
  H2,
  ContentText,
  ContentMain,
  Image,
  AlignMain
} from './styles'
import { Header } from '../../components/index'
import phoneVaga from '../../assets/imgs/phoneVaga.svg'

export function AboutApp() {
  return (
    <div>
      <Header />
      <body>
        <Main>
          <Contents>
            <AlignMain>
                <ContentMain>
                  <ContentText>
                    <H1>Aplicativo para os clientes</H1>
                    <H2>A VagaKey surgiu no mercado para facilitar a vida dos motoristas.</H2>
                    <Text>
                      Nosso aplicativo de estacionamento pode ser uma ferramenta muito útil para qualquer pessoa que precise encontrar um espaço de estacionamento em uma área urbana movimentada. 
                      Ele pode economizar tempo e dinheiro, além de tornar a experiência de estacionar muito mais conveniente e fácil.
                    </Text>
                    <Text>
                      O VagaKey funciona de forma simples. O usuário acessa o aplicativo e seleciona a cidade ou bairro onde deseja estacionar. 
                      O aplicativo então mostra uma lista de opções de estacionamento disponíveis naquela área, juntamente com informações sobre a localização, o preço e a disponibilidade.
                    </Text>
                  </ContentText>
                </ContentMain>
            </AlignMain>
            <AlignMain>
              <Image src={phoneVaga} />
            </AlignMain>
          </Contents>
        </Main>
      </body>
    </div>
  )
}