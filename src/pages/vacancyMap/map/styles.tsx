import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 20px;
`

export const Contents = styled.div`
  width: 900px;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: rgba(255, 104, 195, 0.61);
  padding: 10px;
`

export const Grid = styled.div`
  background-color: rgba(255, 104, 195, 0.61);
  border: solid #FFFFFF;
  border-width: 2px 0px 2px 3px;
  padding: 20px;
  font-size: 30px;
  text-align: center;
  width: 180px;
  height: 80px
`

export const Image = styled.img`
  width: 100%;
  height: 80px;
  padding: 0px;
  margin: 0px;
`