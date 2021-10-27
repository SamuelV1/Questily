import React from 'react'
import { useData } from '../../hooks/datagrabbler'
import { db } from '../../data/database'


export default function Home() {
const info = useData()

    function dataHandler(){
        console.log(info.length)   
    }
    db.collection('users').get().then((users: any) => {
        if(!users)
      })
    

    return (
        <div>
            <button onClick={dataHandler}>DataPrinter</button>
        </div>
    )
}
