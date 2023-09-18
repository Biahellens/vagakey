import styled from 'styled-components'
import Select from "react-select"
import { Add } from "@styled-icons/material"
import { Remove } from "@styled-icons/material"

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 20px;
`

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ContentText = styled.div`
  padding-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
`

export const H1 = styled.h1`
  font-size: 36px;
  color: rgba(113, 113, 113, 0.72);
  padding: 2rem;
  font-weight: bolder;
  width: 100%;
`

export const ContentForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
`
export const Form = styled.form`
  width: 100%;
  padding: 2rem;
`

export const Label = styled.label`
  font-size: 24px;
  color: black;
  padding: 0.4rem;
  font-weight: bolder;
`

export const InputName = styled.input.attrs({ type: 'text' })`
  color: black;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 40%;
  height: 35px;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(229, 31, 133, 0.65);
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
`

export const InputNumber = styled.input.attrs({ type: 'number' })`
  color: black;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 10%;
  height: 35px;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(229, 31, 133, 0.65);
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
`

export const ContentButtonNew = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const ButtonAdd = styled.button.attrs({type: 'button'})`
  background-color: rgba(203, 158, 244, 0.38);
  border-radius: 60%;
  margin: 0.5rem;
`
export const AddNew = styled(Add)`
  color: rgba(229, 31, 133, 0.65);
  width: 40px;
  height: 40px
`

export const ButtonRemove = styled.button.attrs({type: 'button'})`
  margin: 0.5rem;
  background-color: rgba(229, 31, 133, 0.65);
  border-radius: 60%;
`
export const RemoveInput = styled(Remove)`
  color: rgba(203, 158, 244, 0.38); 
  width: 40px;
  height: 40px
`

export const InputSubmit = styled.input.attrs({ type: 'submit' })`
  color: white;
  background-color: rgba(229, 31, 133, 0.65);
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 25%;
  height: 35px;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  font-size: 20px;
`