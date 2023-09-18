import React, { useState } from 'react'

import { 
  Main, 
  Contents,
  H1,
  ContentText,
  Form,
  Label,
  InputName,
  InputNumber,
  ContentForm,
  AddNew,
  ButtonAdd,
  ContentButtonNew,
  ButtonRemove,
  RemoveInput,
  InputSubmit
} from './styles'
import Header from '../../../components/header/header'

export function EditMap() {
  const [inputCount, setInputCount] = useState(1);

  const adicionarInput = () => {
    setInputCount(inputCount + 1);
  };

  const removerInput = () => {
    setInputCount(inputCount - 1);
  };

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < inputCount; i++) {
      inputs.push(<Item key={i}/>);
    }
    return inputs;
  };
  return (
    <div>
      <Header />
      <body>
        <Main>
          <Contents>
            <ContentText>
              <H1>Edite seu estacionamento</H1>
              <Form>
                {renderInputs()}
                <ContentButtonNew>
                  <ButtonAdd onClick={adicionarInput}>
                    <AddNew />
                  </ButtonAdd>
                  <ButtonRemove onClick={removerInput}>
                    <RemoveInput />
                  </ButtonRemove>
                </ContentButtonNew>
                <InputSubmit/>
              </Form>
            </ContentText>
          </Contents>
        </Main>
      </body>
    </div>
  )
}

function Item() {
  return(
    <ContentForm>
      <Label>Nome do Piso:</Label>
      <InputName />
      <Label>Número de Vagas:</Label>
      <InputNumber />
    </ContentForm>
  )
}