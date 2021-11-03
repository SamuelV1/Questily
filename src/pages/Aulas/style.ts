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
export const Headeee = styled.p<TextProp>`
color: #835afd;
font-weight: bold;
font-family: 'Lato', sans-serif;
margin: 0;
`
export const DeleteButton = styled.button`
    padding: 8px 15px;
    width: 8px;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
`
export const TABLE = styled.table`
width: 100%;
tr:nth-child(even){background-color: #fff3fb;}
td{
  border: 1px solid #efebf4;
  padding: 8px;
}
border-collapse: collapse;
`

export const TR = styled.tr`
text-align: center;

`
export const THEAD = styled.thead`
 border-collapse: collapse;
  width: 100%;
  background-color: #835afd;
color: white;
`
export const TH = styled.th`
 padding: 8px;
`
export const Done = styled.p`
 img {height: 16px;}
 color: green;
`
export const NotDone = styled(Done)`
color: red;
`