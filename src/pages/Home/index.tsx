import React, {useEffect} from 'react'
import { useData } from '../../hooks/datagrabbler'
import { DataInitializer, db } from '../../data/database'

interface collection {
    field1: string,
    string: string,
    field3: string, 
}
interface question{
    topicName: string, 
    questions: string,
    isStarted: boolean,
    doneQuestions: number,
}

export default function Home() {

     // checka o local base e se não tiver aulas cadastradas seta as aulas
    useEffect(() => {
        db.collection('Aulas').get().then((users: [collection]) => {
            users.length <= 1 ? DataInitializer():console.log('possui items')
          })
    
      }, [])
   
   

    function dataHandler(){
        console.log("massa")   
    }
    
    
    return (
        <div>
            <button onClick={dataHandler}>DataPrinter</button>
        </div>
    )
}
