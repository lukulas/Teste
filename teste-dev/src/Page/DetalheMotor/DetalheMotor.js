import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { index } from '../../Router/Coordinator'
import { GlobalContext } from '../../Global/GlobalContext'
import { Container, CardMotor } from './DetalheStyled'


function DetalheMotor() {
    const navigate = useNavigate()
    const { carroMotor, id } = useContext(GlobalContext)

    const render = carroMotor && carroMotor.filter(item => id === item.id).map((itens, index) => {
        return <CardMotor key={index}>
            <p>Posidiconamento dos cilindros: {itens.posicionamento_cilindros}</p>
            <p>cilindros: {itens.cilindros}</p>
            <p>litragem: {itens.litragem}</p>
        </CardMotor>
    })

    return (
        <Container>
            {render}
            <button onClick={() => index(navigate)}>Voltar</button>
        </Container>
    )
}

export default DetalheMotor