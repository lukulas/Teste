import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCarro, detMotor } from '../../Router/Coordinator'
import { GlobalContext } from '../../Global/GlobalContext'
import { CardCarro, Container } from './PrincipalStyled'

function Principal() {

    const { carro, setCarro, carroMotor, setCarroMotor, setTela, tela, setId } = useContext(GlobalContext)
    const navigate = useNavigate()

    const removerCarro = (idCarro) => {
        if (window.confirm("Tem certeza que deseja apagar este veiculo?")) {
            setCarro(carro.filter((id) => {
                return idCarro !== id.motor_id
            }))

            setCarroMotor(carroMotor.filter((id) => {
                return idCarro !== id.id
            }))

            setTela(!tela)

        } else {
            alert("Ação cancelada com sucesso!")
            setTela(!tela)
        }
    }

    const pegaId = (idMotor) => {
        setId(idMotor)
    }

    const render = carro && carro.map((itens, index) => {
        return <CardCarro key={index}>
            <p>Marca: {itens.marca}</p>
            <p>Cor: {itens.cor}</p>
            <p>Modelo: {itens.modelo}</p>
            <button onClick={() => { detMotor(navigate); pegaId(itens.motor_id) }}>Detalhe</button>
            <button onClick={() => removerCarro(itens.motor_id)}>Remover Carro</button>
        </CardCarro>
    })


    return (
        <Container>
            {render}
            <button onClick={() => addCarro(navigate)}>Adicionar Carro</button>
        </Container>
    )
}

export default Principal