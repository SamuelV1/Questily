import styled from 'styled-components'

export const MenuButton = styled.button`
margin: 15px;
border: 1px;
border-color: #835afd;
border-radius: 10px;
border-style: solid;
background: none;
cursor: pointer;
display: flex;
align-items: center;

` 
export const SvgBox = styled.div`
background-color: #e9f8ff;
border-radius: 5px;
padding: 10px;
`

export const ButtonText = styled.h3`
font-weight: bold;
font-size: 1.4em;
`
export const TotalQuestion = styled.p`
font-weight: bold;
font-size: 1em;

span{
    color: #835afd;
}
`
export const TextBox = styled.div`
margin: 10px 50px;
`

export const NotStarted = styled.p`
color: red;
font-weight: bold;
`

export const Started = styled(NotStarted)`
color: green;
`

// main menu 
export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: center;
`