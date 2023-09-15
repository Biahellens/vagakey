import React, { useState } from 'react'

import { 
  Main, 
  Contents,
  H1,
  ContentText,
  ContentPartners,
  BoxPlan,
  BoxPlanText,
  H3,
  H2,
  Text,
  CheckItem,
  Box,
  BottomContent,
  Button
} from './styles'
import Header from '../../components/header/header'

export function Plans() {
  return (
    <div>
      <Header />
      <body>
        <Main>
          <Contents>
            <ContentText>
              <H1>Planos Oferecidos</H1>
            </ContentText>
            <ContentPartners>
              <H2>Planos para Empresas</H2>
              <Box>
                <BoxPlan>
                  <BoxPlanText>
                    <H3> Plano Trimestral para Empresas </H3>
                    <Text>Preço: R$499,99 por trimestre. </Text>
                    <Text>Benefícios:</Text>
                    <Text><CheckItem /> Acesso ilimitado às vagas de estacionamento cadastradas no aplicativo.</Text>
                    <Text><CheckItem /> Reservas prioritárias para até 10 veículos da empresa em horários de pico.</Text>
                    <Text><CheckItem /> Relatórios de uso detalhados para fins de gestão de frota.</Text>
                    <Text><CheckItem /> Atendimento ao cliente dedicado para assistência rápida.</Text>
                    <BottomContent>
                      <Button>Adiquirir</Button>
                    </BottomContent>
                  </BoxPlanText>
                </BoxPlan>
                <BoxPlan>
                  <BoxPlanText>
                    <H3> Plano Semestral para Empresas </H3>
                    <Text>Preço: R$899,99 por semestre.</Text>
                    <Text>Benefícios:</Text>
                    <Text><CheckItem /> Acesso ilimitado às vagas de estacionamento cadastradas no aplicativo.</Text>
                    <Text><CheckItem /> Reservas prioritárias para até 20 veículos da empresa em horários de pico.</Text>
                    <Text><CheckItem /> Relatórios de uso detalhados para fins de gestão de frota.</Text>
                    <Text><CheckItem /> Desconto de 10% em todas as reservas adicionais durante o semestre.</Text>
                    <Text><CheckItem /> Atendimento ao cliente dedicado com suporte prioritário.</Text>
                    <BottomContent>
                      <Button>Adiquirir</Button>
                    </BottomContent>
                  </BoxPlanText>
                </BoxPlan>
                <BoxPlan>
                  <BoxPlanText>
                    <H3> Plano Anual para Empresas </H3>
                    <Text>Preço: R$1.599,99 por ano.</Text>
                    <Text>Benefícios:</Text>
                    <Text><CheckItem /> Acesso ilimitado às vagas de estacionamento cadastradas no aplicativo.</Text>
                    <Text><CheckItem /> Reservas prioritárias para até 30 veículos da empresa em horários de pico.</Text>
                    <Text><CheckItem /> Relatórios de uso detalhados para fins de gestão de frota.</Text>
                    <Text><CheckItem /> Desconto de 15% em todas as reservas adicionais durante o semestre.</Text>
                    <Text><CheckItem /> Atendimento ao cliente dedicado com suporte prioritário.</Text>
                    <Text><CheckItem /> Personalização da interface do aplicativo com a marca da empresa.</Text>
                    <BottomContent>
                      <Button>Adiquirir</Button>
                    </BottomContent>
                  </BoxPlanText>
                </BoxPlan>
              </Box>
            </ContentPartners>
            <ContentPartners>
              <H2>Planos para Usuários</H2>
              <Box>
                <BoxPlan>
                  <BoxPlanText>
                    <H3> Plano Trimestral para Usuários </H3>
                    <Text>Preço: R$29,99 por trimestre. </Text>
                    <Text>Benefícios:</Text>
                    <Text><CheckItem /> Acesso ilimitado às vagas de estacionamento cadastradas no aplicativo. </Text>
                    <Text><CheckItem /> Reservas prioritárias em horários de pico. </Text>
                    <Text><CheckItem /> Desconto de 10% em todas as reservas realizadas durante o trimestre. </Text>
                  </BoxPlanText>
                    <BottomContent>
                      <Button>Adiquirir</Button>
                    </BottomContent>
                </BoxPlan>
                <BoxPlan>
                  <BoxPlanText>
                    <H3> Plano Semestral para Usuários </H3>
                    <Text>Preço: R$49,99 por semestre.</Text>
                    <Text>Benefícios:</Text>
                    <Text><CheckItem /> Acesso ilimitado às vagas de estacionamento cadastradas no aplicativo. </Text>
                    <Text><CheckItem /> Reservas prioritárias em horários de pico. </Text>
                    <Text><CheckItem /> Desconto de 15% em todas as reservas realizadas durante o trimestre. </Text>
                    <Text><CheckItem /> Uma vaga de estacionamento gratuita por mês. </Text>
                    <BottomContent>
                      <Button>Adiquirir</Button>
                    </BottomContent>
                  </BoxPlanText>
                </BoxPlan>
                <BoxPlan>
                  <BoxPlanText>
                    <H3> Plano Anual para Usuários </H3>
                    <Text>Preço: R$79,99 por ano.</Text>
                    <Text>Benefícios:</Text>
                    <Text><CheckItem /> Acesso ilimitado às vagas de estacionamento cadastradas no aplicativo. </Text>
                    <Text><CheckItem /> Reservas prioritárias em horários de pico. </Text>
                    <Text><CheckItem /> Desconto de 20% em todas as reservas realizadas durante o trimestre. </Text>
                    <Text><CheckItem /> Duas vagas de estacionamento gratuitas por mês. </Text>
                    <Text><CheckItem /> Atendimento ao cliente premium com suporte prioritário. </Text>
                    <BottomContent>
                      <Button>Adiquirir</Button>
                    </BottomContent>
                  </BoxPlanText>
                </BoxPlan>
              </Box>
            </ContentPartners>
          </Contents>
        </Main>
      </body>
    </div>
  )
}
