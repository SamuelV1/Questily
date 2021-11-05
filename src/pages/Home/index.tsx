import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
// lib de local storage
import localforage from 'localforage'

import { DataInitializer } from '../../data/database'
import { getStorage } from '../../hooks/datagrabbler'
// estilo
import * as S from './style'
import * as icon from '../../ui/index'
interface collection {
    field1: string,
    string: string,
    field3: string, 
}


export default function Home() {
    

     // checka o local base e se não tiver aulas cadastradas seta as aulas
    useEffect(() => {
        async function start(){
            const StoreData = await localforage.getItem<collection[]>('Aulas')
          if (!StoreData) return  DataInitializer()
        
        }
        
        start()
       
      }, [])
      
   
    return (
        <S.Wrapper>
            <Card tittle='Sorting'>Sorting</Card>
            <Card tittle='String'>String</Card>
            <Card tittle='LinkedList'>LinkedList</Card>
            <Card tittle='BinaryTrees'>BinaryTrees</Card>
            
            <Card tittle='Greedy'>Greedy</Card>
            <Card tittle='BackTracking'>BackTracking</Card>
            <Card tittle='Stacks'>Stacks</Card>

            <Card tittle='Heap'>Heap</Card>
            <Card tittle='Graph'>Graph</Card>

           <Card tittle='Matrix'>Matrix</Card>
           <Card tittle='Array'>Array</Card>
        </S.Wrapper>
    )
}


const Card = (props: any) => {
    const history = useHistory();
   const [amount, setAmount] = useState(0)
   const [started, setStarted] = useState(false)
    
    function percentage(data: [collection]){
        for (var i = 0; i < data.length; i++) {
            let vehicle = data[i];
            // mudar para condicionamento de iniciado
            if ( vehicle.field3 === 'Done' ){
                setStarted(true)  
            }
        }   
       
    }


   useEffect(() => {
        function number(){
        getStorage(props.tittle).then(data => {setAmount(data.length); percentage(data) })

        }
        number()
    })

    function clickHandler(){
        history.push(`/${props.tittle}`)
    }

    return (
        <S.MenuButton onClick={clickHandler}>
            <S.SvgBox><icon.code></icon.code></S.SvgBox>
            <S.TextBox>
                <S.ButtonText>{props.tittle}</S.ButtonText>
                <S.TotalQuestion>questoes: <span>{amount}</span></S.TotalQuestion>
                {started === true ? <S.Started>Iniciado</S.Started> : <S.NotStarted>Não iniciado</S.NotStarted> }
            </S.TextBox>
            
        </S.MenuButton>
    )
}
