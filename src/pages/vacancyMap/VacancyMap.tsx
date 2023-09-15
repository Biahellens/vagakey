import React from 'react'

import { 
  Main, 
  Contents,
  Text,
  H1,
  H2,
  H3,
  ContentText,
  SelectPartner,
  Button,
  EditContent,
  BottomContent,
  LinkHeader
} from './styles'
import { Header } from '../../components/index'

import { Map } from './map/Map'

export function VacancyMapCustomer() {
  const options = [
    { value: "multiPark", label: "MultiPark" },
    { value: "estapar", label: "Estapar" },
    { value: "filePark", label: "FilePark" }
  ];

  const Select = () => (
    <SelectPartner
      classNamePrefix="Select"
      options={options}
      value={{ value: "selectPartner", label: "Selecione o estacionamento" }}
    />
  );
  return (
    <div>
      <Header />
      <body>
        <Main>
          <Contents>
            <ContentText>
              <H1>Olá Cliente, selecione uma empresa para vizualizar o estacionamento.</H1>
              <Select />
            </ContentText>
            <Map />
          </Contents>
        </Main>
      </body>
    </div>
  )
}

export function VacancyMapPartner() {
  return (
    <div>
      <Header />
      <body>
        <Main>
          <Contents>
            <ContentText>
              <H1>Olá Empresa, esse é seu mapa de vagas atualmente</H1>
              <Button><LinkHeader to='/editMap'><p>Editar Mapa</p></LinkHeader></Button>
            </ContentText>
            <Map />
            <BottomContent>
              <EditContent>
                <H2>Dados</H2>
                <Text>Total ganho no dia: <Text>R$27.80</Text></Text>
                <H3>Piso 1</H3>
                <Text>Vagas Ocupadas: <Text>5</Text></Text>
                <Text>Vagas Livres: <Text>5</Text></Text>
              </EditContent>
            </BottomContent>
          </Contents>
        </Main>
      </body>
    </div>
  )
}