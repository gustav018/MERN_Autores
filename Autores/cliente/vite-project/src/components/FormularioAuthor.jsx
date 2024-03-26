import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FormularioAuthor = ({ handleSubmit, error, author, handleChange }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="text-danger">{error}</div>
                <div className="mb-3 row">
                    
                    <Link to={`/`} className="">Home</Link>
                    </div>
                <div className="mb-3 row">Add a new author</div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={author.nombre} onChange={handleChange} placeholder="Leslie Jones" />
                </div>
                <Link to={`/`} className="btn btn-danger mt-4">Cancel</Link>
                <button type="submit" className="btn btn-primary mt-4">Enviar</button>
            </form>
        </>

    )
}

FormularioAuthor.propTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
    author: PropTypes.shape({
        nombre: PropTypes.string

    }),
    handleChange: PropTypes.func
}

export default FormularioAuthor
