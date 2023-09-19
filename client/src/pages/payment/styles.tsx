import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Linkinho= styled(Link)`
  text-decoration: none;
  color: rgba(79, 10, 143, 1);
`

export const Main = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`

export const Contents = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`

export const IconImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`

export const Image = styled.img<{ $size?: boolean; }>`
  width: ${props => props.$size ? '120px' : '500px'};
  margin-top: ${props => props.$size ? '0' : '16%'};
`


export const FormContent = styled.div`
  width: 50%;
  background-image: linear-gradient(#CCCCCC, #6AFEE5, #4F0A8F);
`

export const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

export const Title = styled.h1`
  color: #2B0152;
  font-size: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Text = styled.p`
  color: #717171;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`

export const InputArea = styled.input.attrs(props => ({
  type: 'text',
}))<{ $padding?: string; $primary?: boolean;}>`
  margin: 0.5rem;
  width: '227px';
  height: 54px;
  padding: 0px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: #FFFFFF;
  color: #282828;
  outline: none;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out; -webkit-appearance: none;
  
  &:hover{
    box-shadow: 0px 4px 20px 0px #8400FF;
  }
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`

export const Button = styled.button`
  width: 140px;
  height: 40px;

  margin-top: 2.6rem;

  border-radius: 40px;
  background-color: #8400FF;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;

  cursor: pointer;

`
