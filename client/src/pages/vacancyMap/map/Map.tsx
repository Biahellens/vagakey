import React from 'react'

import { 
  Main, 
  Contents,
  Grid,
  Image
} from './styles'

import car from '../../../assets/imgs/sportCar.svg'

export function Map() {
  return (
    <div>
      <body>
        <Main>
          <Contents>
            <Grid><Image src={car} /></Grid>
            <Grid>2</Grid>
            <Grid>3</Grid>
            <Grid>4</Grid>
            <Grid><Image src={car} /></Grid>
            <Grid>6</Grid>
            <Grid>7</Grid>
            <Grid><Image src={car} /></Grid>
            <Grid><Image src={car} /></Grid>
            <Grid><Image src={car} /></Grid>
          </Contents>
        </Main>
      </body>
    </div>
  )
}