import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { index } from '../../Router/Coordinator'
import useForm from '../../Hook/useForm'
import { GlobalContext } from '../../Global/GlobalContext'
import { Container, Botao } from './AdicionaStyled'

function AdicionaCarro() {

    const navigate = useNavigate()
    const { carro, setCarro, carroMotor, setCarroMotor } = useContext(GlobalContext)
    const { form, pegaDados, limpaCampos } = useForm({
        marca: '',
        modelo: '',
        cor: '',
        posicionamento_cilindros: '',
        cilindros: '',
        litragem: ''
    })

    const addCarro = () => {
        const id = Math.random()
        const novoCarro = {
            "id": id,
            "marca": form.marca,
            "modelo": form.modelo,
            "cor": form.cor,
            "motor_id": id,
        }
        const pegaCarro = [...carro, novoCarro]
        setCarro(pegaCarro)

        const novoMotor = {
            "id": id,
            "posicionamento_cilindros": form.posicionamento_cilindros,
            "cilindros": form.cilindros,
            "litragem": form.litragem,
            "observacao": null,
        }
        const pegaMotor = [...carroMotor, novoMotor]
        setCarroMotor(pegaMotor)

        alert('Carro adicionado com sucesso!')

    }

    const limpaForm = (e) => {
        e.preventDefault()
        limpaCampos()
    }

    return (
        <Container>
            <form onSubmit={limpaForm}>
                <input value={form.marca} type='text' name='marca' onChange={pegaDados} placeholder='Marca' required />
                <input value={form.modelo} type='text' name='modelo' onChange={pegaDados} placeholder='Modelo' required />
                <input value={form.cor} type='text' onChange={pegaDados} name='cor' placeholder='Cor' required />
                <input value={form.posicionamento_cilindros} type='text' name='posicionamento_cilindros' onChange={pegaDados} placeholder='Posicionamento cilindros' required />
                <input value={form.cilindros} type='number' name='cilindros' onChange={pegaDados} placeholder='Cilindros' required />
                <input value={form.litragem} type='number' onChange={pegaDados} name='litragem' placeholder='Litragem' required />
                <button onClick={addCarro}>Adicionar</button>
            </form>
            <Botao onClick={() => index(navigate)}>Voltar</Botao>
        </Container>
    )
}

export default AdicionaCarro