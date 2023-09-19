import styled from 'styled-components'
import { Check } from "@styled-icons/material"

import { Link } from 'react-router-dom'

export const Linkinho= styled(Link)`
  text-decoration: none;
  color: rgba(79, 10, 143, 1);
`

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
  padding-top: 2rem;
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

export const ContentPartners = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`

export const BoxPlan = styled.div`
  width: 260px;
  min-height: 620px;
  border-width: 3px;
  border-color: #E51F85;
  border-radius: 20px;
  border-style: solid;

  display: flex;
  align-content: flex-start;
`
export const Box = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`

export const BoxPlanText = styled.div`
 padding: 1.2rem;
 width: 100%;
 display: flex;
 flex-wrap: wrap;
 align-content: space-between
`
export const Texts = styled.div`
 width: 100%;
 text-align: flex-start;
 align-content: flex-start;
 display: flex;
 flex-wrap: wrap;
`

export const H2 = styled.h2`
  font-size: 34px;
  color: #E51F85
  padding: 0.4rem;
  font-weight: bolder;
  width: 100%;
  text-align: center;
`

export const H3 = styled.h2`
  font-size: 22px;
  color: #3F0774;
  padding-bottom: 1rem;
  font-weight: bolder;
`
export const Text = styled.text`
  font-size: 18px;
  text-align: flex-start;
  font-weight: 500;
  width: 100%;
  padding: 0.5rem;
`

export const CheckItem = styled(Check)`
  color: rgba(229, 31, 133, 0.65);
  width: 30px;
  height: 30px;
`

export const Button = styled.button.attrs({ type: 'submit'})`
  width: 200px;
  height: 40px;

  font-size: 22px;
  color: #FFFFFF;

  background-color: rgba(229, 31, 133, 0.65);
  border-radius: 40px;
`

export const BottomContent = styled.div`
  margin: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: flex-end;
`