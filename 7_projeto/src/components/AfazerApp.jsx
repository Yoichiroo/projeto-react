import { useState } from 'react'
import './AfazerApp.css'


const AfazerApp = () => {
    const [afazeres, setAFazeres] = useState([])

    const [inputValor, setInputValor] = useState("")

    const submit = (e) => {
        e.preventDefault()

        if(inputValor.trim() !== '') {
            const novoAFazer = {
                id: Date.now(),
                text: inputValor
            }
            setAFazeres((prevAFazeres) => [...prevAFazeres, novoAFazer])

            setInputValor("")
        }
    }

    return (
        <div className='container'>
            <h1 className='titulo'>Lista de Tarefas</h1>
            <form onSubmit={submit} className='formContainer'>
                <input type="text" className="inputCampo" name="" id="" placeholder='Adicione uma tarefa' value={inputValor} onChange={(e) => setInputValor(e.target.value)}/>
                <button type="submit" className='btn add'>
                    Adicionar
                </button>
            </form>
            {afazeres.length === 0 && <p className='vazio'>Não há tarefas.</p>}

            <ul className="listaAFaze">
                {AFazeres.map((afazer) => (
                    <li key={afazer.id} className='itemAFazer'>
                        {afazer.text}
                        <button className="btn excluir">Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AfazerApp