import React from 'react'
const QuestionDataContext  = React.createContext("");
/// provider pra dar os dados consumer pra consumir os dados
export function App() {
    return (
        <QuestionDataContext.Provider value={""}>
            <h1>A</h1>            
        </QuestionDataContext.Provider>
    )
}
