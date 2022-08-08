import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import carros from '../Components/Carro'
import { motor } from '../Components/Motor'

export default function GlobalState(props) {

    const [carro, setCarro] = useState([])
    const [carroMotor, setCarroMotor] = useState()
    const [tela, setTela] = useState(true)
    const [id, setId] = useState()

    useEffect(() => {
        const teste = () => {
            if (carro.length === 0) {
                setCarro(carros)
                setCarroMotor(motor)
            }
        }
        teste()
    }, [tela])

    const values = {
        carro,
        setCarro,
        carroMotor,
        setCarroMotor,
        tela,
        setTela,
        id, 
        setId
    }

    const Provider = GlobalContext.Provider

    return <Provider value={values}>{props.children}</Provider>
}