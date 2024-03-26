

import { useEffect, useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom"
import FormularioAuthor from "./FormularioAuthor"


const AuthorFormUpdate = () => {

    const { id } = useParams();
    const navegate = useNavigate()

    const initialValues = {
        nombre:'Cargando...'
    }

    const {values: author, handleChange, setValues} = useForm(initialValues)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res.data.author)
                setValues({
                    nombre: res.data.author.nombre,
                    
                })
            })
            .catch(err => console.log(err))
    }, [id, setValues]);


    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`, author)
            .then(res => {
                console.log(res.data.author)
                Swal.fire({
                    icon: "success",
                    title: "Actualizado!",
                    text: "Actualizaste un author!!",
                });
                navegate("/")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <FormularioAuthor handleSubmit={handleSubmit} error={error} author={author} handleChange={handleChange} />
    )
}

export default AuthorFormUpdate