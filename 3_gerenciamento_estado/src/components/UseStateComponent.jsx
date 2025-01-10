import { use } from "react";
import {useState} from "react";

const UseStateComponent = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((previousCount) => previousCount + 1)
        console.log(count)
    }

    const [user, setUser] = useState({
        name: "Lídia",
        age: 18, 
        hobbies: ["Videogames", "Programação"]
    })

    const updateUserAge = () => {
        setUser((previousUser) => (
            {
                ...previousUser,
                age: previousUser.age + 1
            }
        ))
    }

    return <div>
        <h2>Contador</h2>
        <p>Clicou {count} vezes</p>
        <button onClick={increment}>Adicionar 1 ao valor</button>

        <p>Nome: {user.name} e idade: {user.age}</p>

        <button onClick={updateUserAge}>Incrementar idade</button>
    </div>
}

export default UseStateComponent