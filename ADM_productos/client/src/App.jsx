import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import ListarCrearProduct from './ListarCrearProduct'
import DetalleProduct from './DetalleProduct'
import ProductFormUpdate from './components/ProductFormUpdate'
import ProductForm from './components/ProductForm'

const App = () => {
    const [products, setProducts] = useState(null);

    const updateProducts = (product) => {
        setProducts([...products, product])
    }
    return (
        <>
            <div className='container mt-3'>
                <Routes>
                    <Route path="/" element={<ListarCrearProduct />} />
                    <Route path="/new" element={<ProductForm updateProducts={updateProducts} />} />
                    <Route path="/product/:id" element={<DetalleProduct />} />
                    <Route path="/product/:id/edit" element={<ProductFormUpdate />} />
                </Routes>
            </div>
        </>
    )

}

export default App

