import { useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import FormularioAuthor from "./FormularioAuthor"
import { useNavigate } from "react-router-dom";

const AuthorForm = ({ updateAuthors }) => {

    const initialValues = {
        nombre: ''

    }
    const { values: author, handleChange, clearData } = useForm(initialValues)
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author', author)
            .then(res => {
                console.log(res.data.author)
                updateAuthors(res.data.author)
                clearData()
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste un author!!",
                }).then(() => navigate("/"));
                setError("")
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

AuthorForm.propTypes = {
    updateAuthors: PropTypes.func
}

export default AuthorForm