import axios from "axios";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const DeleteProduct = ({ productId, successCallback }) => {

    const deleteProduct = (productId) => {
        Swal.fire({
            title: "¿Estas seguro de eliminar este producto?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/product/${productId}`)
                    .then(res => {
                        console.log(res);
                        successCallback(productId);
                    });
            }
        });
    };

    return (
        <button onClick={() => deleteProduct(productId)} className="btn btn-outline-danger btn-sm">Eliminar</button>
    );
};

DeleteProduct.propTypes = {
    productId: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
};

export default DeleteProduct;
