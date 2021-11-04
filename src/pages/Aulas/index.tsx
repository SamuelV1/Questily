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
     })
     
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
        <S.Container>
            <S.TABLE>
            <S.THEAD>
                <tr>
                    <S.TH>Questões</S.TH>
                    <S.TH>Status</S.TH>
                    <S.TH>end</S.TH>
                </tr>
            </S.THEAD>
            <tbody>
            { state.map((file: collection, idx) => (
               <S.TR key={idx}>
                   <td> <S.Headeee name={file.field3} key={idx}>{file.question}
              </S.Headeee></td>
              <td> {file.field3 === 'Done' ?  <S.Done> <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/check-mark_2714-fe0f.png" alt="Done Simbol" /> Concluido</S.Done> :<S.NotDone><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/cross-mark_274c.png" alt="X" /> Incompleto</S.NotDone> }</td>
              <td><S.DeleteButton
             
             onClick={() => onRemoveFile(file.question)}
           ><img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/check-mark_2714-fe0f.png" alt="Done Simbol" /></S.DeleteButton></td>
              </S.TR>
       
          )) } 
              
             
            </tbody>
            </S.TABLE>
            </S.Container>
           
        </div>
    )
}

