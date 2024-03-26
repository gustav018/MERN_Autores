import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import DeleteAuthor from "./DeleteAuthor";

const AuthorList = ({ authors, setAuthors }) => {

    const successDelete = (authorId) => {
        Swal.fire({
            icon: "success",
            title: "Autor eliminado!",
            text: "Eliminaste un author!!",
        });
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/author")
            .then((response) => {
                console.log(response.data.authors)
                setAuthors(response.data.authors);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);
            });
    }, [setAuthors]);

    if (isLoading) {
        return <h1>Cargando...</h1>
    }

    return (
        <>
        
         <table className="table table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th>Author</th>
                    
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map(author => (
                        <tr key={author._id}>
                            <td>{author.nombre}</td>
                            
                            <td>
                                
                                <Link to={`/edit/${author._id}`} className="btn btn-outline-warning btn-sm me-1">Edit</Link>
                                <DeleteAuthor authorId={author._id} successCallback={successDelete} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
       
    )
}

AuthorList.propTypes = {
    authors: PropTypes.array,
    setAuthors: PropTypes.func.isRequired
}

export default AuthorList
