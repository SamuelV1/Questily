
import data from '../data/Questions.json'


export function useData(tipo? :string) {
    if(!tipo){
        return data
    }
    return data.filter(item => item.field1 === tipo) 
}