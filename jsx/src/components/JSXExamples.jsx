import React from "react";

const JSXExamples = () => {
    const nomeUsuario = 'Lídia'

    const user = {
        name: "Lídia",
        lastName: "Torres"
    }

    function Ola(nome) {
        return `Olá, ${nome}!`
    }

    const userIsLoggedIn = false

    const userRole = "admin"

    const users = [
        {id: 1, name: "Nathan"},
        {id: 2, name: "Amanda"},
        {id: 3, name: "Lídia"}
    ]

    return <div>
        
        <h2>Conteúdo que o usuário vai ver</h2>
        
        <p>O nome de usuário é {nomeUsuario}</p>
        
        <p>Usuário: {user.name} {user.lastName}</p>
        
        <p>{2 + 2}</p>    
    
        <p>{Ola(nomeUsuario)}</p>
        
        <p>{Ola("Nathan")}</p>

        <button onClick={()=> alert(nomeUsuario)}>Botao</button>

        <input type="text" placeholder="Joaozin da silva!" />
        
        
        {/* CONDIÇÃO */}
        
        {userIsLoggedIn ? (
            <div>
                <p>Caso: está logado</p>
            </div>
        ) : 
        (
            <div>
                <p>Caso: não está logado</p>
            </div>
        )}

        {userRole === "admin" && <p>Você é um admin</p>}

        {/* LISTAS */}
        
        <div>
            <ul>
                {users.map(user => (
                    <li>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>

        
    </div>

}

export default JSXExamples