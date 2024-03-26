import axios from "axios";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const DeleteAuthor = ({ authorId, successCallback }) => {

    const deleteAuthor = (authorId) => {
        Swal.fire({
            title: "¿Estas seguro de eliminar este autor?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/author/${authorId}`)
                    .then(res => {
                        console.log(res);
                        successCallback(authorId);
                    });
            }
        });
    };

    return (
        <button onClick={() => deleteAuthor(authorId)} className="btn btn-outline-danger btn-sm">Delete</button>
    );
};

DeleteAuthor.propTypes = {
    authorId: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
};

export default DeleteAuthor;