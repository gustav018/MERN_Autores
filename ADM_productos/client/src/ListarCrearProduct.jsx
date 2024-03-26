import { useState } from 'react';
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

function ListarCrearProduct() {

    const [products, setProducts] = useState(null);

    const updateProducts = (product) => {
        setProducts([...products, product])
    }

    return (

        <>
            <div className="container text-center">
                <div className="row">

                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <h3 className='mt-5'>Product Manager</h3>

                        <ProductForm updateProducts={updateProducts} />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <hr />
                <div className="row">

                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <h3 className='mt-5'>All Products</h3>
                    
                        <ProductList products={products} setProducts={setProducts} />
                    </div>
                    <div className="col-sm-3"></div>
                </div>

            </div>

            <div className='row'>
                <div className='col-8'>

                </div>

            </div>

        </>
    )
}

export default ListarCrearProduct

