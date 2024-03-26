import { useParams, Link, useNavigate } from "react-router-dom";
import useAxios from "./hooks/useAxios";

import Swal from 'sweetalert2'
import DeleteAuthor from "./components/DeleteAuthor";


const DetalleAuthor = () => {
    const { id } = useParams();
    const navegate = useNavigate();
    const { data, isLoading, error } = useAxios(`http://localhost:8000/api/author/${id}`)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    const {author} = data

    const successDelete = (authorId) => {
        console.log(authorId)
        Swal.fire({
            icon: "success",
            title: "Eliminado!",
            text: "Eliminaste una authora!!",
        });
        navegate("/")
    }

    return (
        <div className="row">
            <div className="col-4"></div>
            <div className="col-3"> 
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> </h5>
                        
                        <ul>
                        <li><h3>{author.nombre}</h3></li>
                            
                           
                        </ul>
                        <Link to="/" className="btn btn-outline-dark btn-sm me-1">Volver</Link>
                        <Link to={`/author/${author._id}/edit`} className="btn btn-outline-warning btn-sm me-1">Actualizar</Link>
                        <DeleteAuthor authorId={author._id} successCallback={successDelete} />
                    </div>
                </div>
            </div>
            <div className="col-4"></div>
        </div>
    )
}

export default DetalleAuthor