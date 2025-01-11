import { useState } from 'react'

const EventRenderingExamples = () => {
    const handleClick = () => {
        alert("teste")
    } 

    const handleGreet = (name) => {
        alert(`Olá ${name}`)
    }

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Enviado! ${name}`)
    }

    return (
        <>
            <div>
                <button onClick = {()=> {alert("oi")}}>Clique aqui</button>
                <button onClick = {handleClick}>Clique aqui</button>
                <br /> <br />
                <button onClick = {() => handleGreet("Lídia")}>Dizer Olá Lídia</button>
                <button onClick = {() => handleGreet("Nathan")}>Dizer Olá Nathan</button>

                <form onSubmit={handleSubmit}>
                    <input type = "text" name = "" id = "" placeholder =' Digite seu nome' value = {name} onChange = {(e) => {setName(e.target.value)}}/>
                    <input type = "submit" value =  "Enviar" />
                </form>
            </div>
        </>
    )
}

export default EventRenderingExamples