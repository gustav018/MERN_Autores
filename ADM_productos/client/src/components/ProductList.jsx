import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import DeleteProduct from "./DeleteProduct";

const ProductList = ({ products, setProducts }) => {

    const successDelete = (productId) => {
        Swal.fire({
            icon: "success",
            title: "Producto eliminado!",
            text: "Eliminaste un producto!!",
        });
        setProducts(products.filter(product => product._id !== productId));
    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product")
            .then((response) => {
                console.log(response.data.products)
                setProducts(response.data.products);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);
            });
    }, [setProducts]);

    if (isLoading) {
        return <h1>Cargando...</h1>
    }

    return (
        <>
        
         <table className="table table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>{product.descripcion}</td>
                            <td>${product.price}</td>
                            <td>
                               
                                <Link to={`/product/${product._id}/update`} className="btn btn-outline-warning btn-sm me-1">Actualizar</Link>
                                <DeleteProduct productId={product._id} successCallback={successDelete} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
       
    )
}

ProductList.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func.isRequired
}

export default ProductList
