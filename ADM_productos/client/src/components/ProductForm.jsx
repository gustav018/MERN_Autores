import { useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import FormularioProduct from "./FormularioProduct"

const ProductForm = ({updateProducts}) => {

    const initialValues = {
        title:'',
        descripcion: '',
        price: 0
    }
    const {values: product, handleChange, clearData} = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                console.log(res.data.product)
                updateProducts(res.data.product)
                clearData()
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste una producta!!",
                });
                setError("")
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

ProductForm.propTypes = {
    updateProducts: PropTypes.func
}

export default ProductForm