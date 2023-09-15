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

export const ImageContent = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap
`

export const IconImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%
`

export const Image = styled.img<{ $size?: boolean; }>`
  width: ${props => props.$size ? '120px' : '500px'};
  margin-top: ${props => props.$size ? '0' : '16%'};
`


export const FormContent = styled.div`
  width: 50%;
  background-image: linear-gradient(#CCCCCC, #6AFEE5, #4F0A8F);
`

export const Top = styled.div`
  display: flex;
  justify-content: end;
`

export const Textop = styled.text<{ $primary?: boolean; }>`
  padding: 0.5rem;
  color: ${props => props.$primary ? '#2B0152' : '#8400FF'};
  font-weight: 600;
`

export const Content = styled.div`
  height: 96%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  flex-direction: column;
`

export const ContentBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  flex-direction: column;
`

export const Title = styled.h1`
  color: rgba(229, 31, 133, 0.53);
  font-size: 36px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const Text = styled.p`
  color: #2B0152;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 3rem;
  width: 75%;
`

export const InputContent = styled.form`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const InputArea = styled.input.attrs(props => ({
  type: 'text',
}))<{ $padding?: string; $primary?: boolean; $email?: boolean}>`
  margin: 0.5rem;
  width: ${props => props.$primary ? '320px' : props.$email ? "400px" : '260px'};
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
export const InputAreaPassword = styled.input.attrs(props => ({
  type: 'password',
}))`
  margin: 0.5rem;
  width: 320px;
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

export const Button = styled.input.attrs(props => ({
  type: 'submit',
}))`
  width: 160px;
  height: 50px;

  margin-top: 2.6rem;

  border-radius: 40px;
  background-color: #8400FF;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;

  cursor: pointer;

`

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  text-align: center;
  color: #717171;
  font-weight: bold;
`
