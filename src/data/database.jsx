import Localbase from 'localbase'
import { useData } from '../hooks/datagrabbler'

// o package n ta typado me forçadno a usar javascript
export let db = new Localbase('db')

export function DataInitializer(){
    const info = useData()
db.collection('Aulas').set(info)

}