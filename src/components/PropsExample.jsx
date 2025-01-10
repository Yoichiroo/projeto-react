import React from 'react'

const PropsExample = ({nome, idade}) => {
    return (
        <div>
            <h3>Olá, {nome}!</h3>
            <p>Você tem {idade} anos, certo?</p>
        </div>
    )
}

export default PropsExample