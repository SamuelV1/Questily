import data from './Questions.json'
// lib de local storage
import localforage from 'localforage'

export function DataInitializer(){

    localforage.setItem('Aulas', data)
    window.location.reload();

}