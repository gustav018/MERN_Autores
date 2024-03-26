
import './App.css'
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import ListarCrearAuthor from './ListarCrearAuthor'
import AuthorFormUpdate from './components/AuthorFormUpdate'
import DetalleAuthor from './DetalleAuthor'
import AuthorForm from './components/AuthorForm';
function App() {
  const [authors, setAuthors] = useState(null);

    const updateAuthors = (author) => {
        setAuthors([...authors, author])
    }

  return (
    <>
            <div className='container mt-3'>
              <h1>Favorite Authors</h1>
                <Routes>
                    <Route path="/" element={<ListarCrearAuthor />} />
                    <Route path="/new" element={<AuthorForm updateAuthors={updateAuthors}/>} />
                    
                    <Route path="/author/:id" element={<DetalleAuthor />} />
                    <Route path="/edit/:id/" element={<AuthorFormUpdate />} />
                </Routes>
                
            </div>
        </>
  )
}

export default App
