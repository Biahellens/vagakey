import styled from 'styled-components'
import Select from "react-select"

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

export const SelectPartner = styled(Select)`
  .Select__control {
    width: 330px;
    border: 1px solid rgba(229, 31, 133, 0.65);
    border-radius: 0;
    cursor: pointer;
  }

  .Select__control:hover {
    border-color: rgba(229, 31, 133, 0.65);
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px rgba(229, 31, 133, 0.65);
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: rgba(229, 31, 133, 0.65);
  }
`

export const Button = styled.button`
  width: 200px;
  height: 40px;

  font-size: 22px;
  color: #FFFFFF;

  background-color: rgba(229, 31, 133, 0.65);
  border-radius: 40px;
`

export const BottomContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const EditContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  height: 300px;

  border-radius: 20px;
  padding: 10px;

  background-color:rgba(203, 158, 244, 0.38);

  margin-top: 6rem;
  margin-bottom: 6rem;

  font-size: 20px;
  color: rgba(113, 113, 113, 0.72);

  text-align: justify;
  align-content: baseline;
`
export const Text = styled.text`
  font-size: 24px;
  text-align: justify;
  font-weight: 500;
  width: 100%;
  margin-left: 1rem;
`
export const H2 = styled.h2`
  font-size: 34px;
  color: #3F0774;
  padding: 0.4rem;
  font-weight: bolder;
`

export const H3 = styled.h2`
  font-size: 28px;
  color: #E51F85;
  padding: 0.4rem;
  font-weight: bolder;
`