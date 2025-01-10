import {useState} from "react";

const UseStateComponent = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
        console.log(count)
    }

    return <div>
        <h2>Contador</h2>
        <p>Clicou {count} vezes</p>
        <button onClick={increment}>Adicionar 1 ao valor</button>
    </div>
}

export default UseStateComponent