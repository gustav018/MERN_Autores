import PropTypes from 'prop-types';

const FormularioProduct = ({handleSubmit, error, product, handleChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="text-danger">{error}</div>
            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-4 col-form-label">Title: </label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="title" name="title" value={product.title} onChange={handleChange} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="price" className="col-sm-4 col-form-label">Price: </label>
                <div className="col-sm-5">
                    <input type="number" className="form-control" id="price" name="price" value={product.price} onChange={handleChange} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="descripcion" className="col-sm-4 col-form-label">Description: </label>
                <div className="col-sm-5">
                    <input className="form-control" id="descripcion" name="descripcion" value={product.descripcion} onChange={handleChange}/>
                </div>
            </div>
            <button type="submit" className="btn btn-secondary mt-4">Create</button>
        </form>
    )
}

FormularioProduct.propTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
    product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
       descripcion: PropTypes.string
    }),
    handleChange: PropTypes.func
}

export default FormularioProduct
