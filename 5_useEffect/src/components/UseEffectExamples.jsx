import { useState, useEffect } from 'react'

const UseEffectExamples = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect 1")
    })

    // dependencia vazia ou array vazio 

    useEffect(() => {
        console.log("useEffect 2")
    }, [])

    // com dependencia

    useEffect(() => {
        console.log("useEffect 3")
    }, [count])

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
        </>
    )
}

export default UseEffectExamples