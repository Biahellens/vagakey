import React from 'react'

import { 
  Main, 
  Contents,
  Text,
  h1,
  h2,
  ContentText,
  ContentMain
} from './styles'
import { Header } from '../../components/index'
import { Link } from 'react-router-dom'
import vk from '../../assets/icons/vkIcon.svg'
import cars from '../../assets/imgs/carsPurple.svg'

export function AboutApp() {
  return (
    <div>
      <Header />
      <body>
        <Main>
          <Contents>
            <ContentMain>
              <ContentText>
                <Text>oi</Text>
              </ContentText>
            </ContentMain>
          </Contents>
        </Main>
      </body>
    </div>
  )
}