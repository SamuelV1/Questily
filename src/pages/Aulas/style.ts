import styled from 'styled-components'

export const Header = styled.header`
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1,52px;
img{
    height: 50px;
}
`
export const Crumbler = styled.div`
    font-family: 'Lato', sans-serif;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    font-weight: bold;
a{
    color: #7496da;
    ::visited{
        color: #7496da;
    }
    text-decoration: none;
    font-family: 'Lato', sans-serif;
}

`
interface TextProp  {
    name: string;
}
export const Headeee = styled.h1<TextProp>`
background: ${props => props.name === '<->' ? '#3b5998' : 'white'};

`
export const DeleteButton = styled.button`
    background: red;
    border: none;
    color: white;
    padding: 8px 15px;
    width: 8px;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
`