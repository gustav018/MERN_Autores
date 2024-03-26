import { useEffect, useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom"
import FormularioProduct from "./FormularioProduct"


const ProductFormUpdate = () => {

    const { id } = useParams();
    const navegate = useNavigate()

    const initialValues = {
        firstName:'Cargando...',
        lastName: 'Cargando...',
        age: 0
    }

    const {values: product, handleChange, setValues} = useForm(initialValues)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res.data.product)
                setValues({
                    title: res.data.product.title,
                    price: res.data.product.price,
                    descripcion: res.data.product.descripcion,
                })
            })
            .catch(err => console.log(err))
    }, []);


    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, product)
            .then(res => {
                console.log(res.data.product)
                Swal.fire({
                    icon: "success",
                    title: "Actualizado!",
                    text: "Actualizaste una producta!!",
                });
                navegate("/")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <FormularioProduct handleSubmit={handleSubmit} error={error} product={product} handleChange={handleChange} />
    )
}

export default ProductFormUpdate