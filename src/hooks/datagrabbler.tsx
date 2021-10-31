// lib de local storage
import localforage from 'localforage'


interface collection {
        field1: string,
        string: string,
        field3: string, 
    }

export async function useData(tipo?:string) {
          await localforage.getItem<collection[]>('Aulas').then((value)=>{
                 return value
         }) 
}
export async function getStorage(tipo?:string): Promise<any> {
        try {
            const result =  await localforage.getItem<collection[]>('Aulas');
            if(!tipo) return result
            if(result) return result.filter((item: { field1: string; }) => item.field1 === tipo) 
        }
        catch(e) { console.log(e) }
    }
    