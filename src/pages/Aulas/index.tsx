import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getStorage } from '../../hooks/datagrabbler';
import * as S from './style'
import localforage from 'localforage'


type RoomParams = {
    category: string;
}
interface collection {
    field1: string,
    question: string,
    field3: string, 
}
const Initialfiles: collection =
{
field1: "placeholder",
question: " ",
field3: " ",
}

export default  function Aulas() {
   
    const [state, setState] = useState<collection[]>([Initialfiles])
    const { category } = useParams<RoomParams>();   
    
    useEffect(() => {
        getStorage(category).then(data => setState(data))
     }, [])
     
      function onRemoveFile(name : any){
           
        
            localforage.getItem<collection[]>('Aulas').then(function (item) {
                if(item){
                   
                    // muda o valor no banco de dados
                    let a = item.findIndex((x: { question: string; }) => x.question === name)
                    item[a].field3 = 'Done'
                    
                    localforage.setItem('Aulas', item );

                    
                }
                // muda o state localmente 
                let b = state.findIndex((x: { question: string; }) => x.question === name)
                    let StateArray = [...state]
                    let single = {...StateArray[b]}
                    single.field3 = 'Done'
                    StateArray[b] = single
                    setState(StateArray)
                console.log(state)
              });
     }

    return (
        <div>
            <S.Header> <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sparkles_2728.png" alt="" /> <h1>Desafios de {category}</h1></S.Header>
                <S.Crumbler><a href="/">Topicos</a><span>/</span>{category}</S.Crumbler>
            { state.map((file: collection, idx) => (
              
                <S.Headeee name={file.field3} key={idx}>{file.field1}
                {file.field3}
                <S.DeleteButton
               
                onClick={() => onRemoveFile(file.question)}
              >AAAAA</S.DeleteButton>
                </S.Headeee>
                
         
            )) } 
        </div>
    )
}

