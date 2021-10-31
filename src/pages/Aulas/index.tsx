import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getStorage } from '../../hooks/datagrabbler';
import * as S from './style'

type RoomParams = {
    category: string;
}
interface collection {
    field1: string,
    string: string,
    field3: string, 
}
const Initialfiles: collection =
{
field1: "placeholder",
string: " ",
field3: " ",
}

export default  function Aulas() {
   
    const [state, setState] = useState<collection[]>([Initialfiles])
    const { category } = useParams<RoomParams>();   
    
    useEffect(() => {
        getStorage(category).then(data => setState(data))
     }, [])
    
    return (
        <div>
            <S.Header> <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sparkles_2728.png" alt="" /> <h1>Desafios de {category}</h1></S.Header>
                <S.Crumbler><a href="/">Topicos</a><span>/</span>{category}</S.Crumbler>
            {/* state.map((file: collection, idx) => (
                <h1 key={idx}>{file.field1}</h1>
            )) */} 
        </div>
    )
}
