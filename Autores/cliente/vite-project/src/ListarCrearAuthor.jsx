import { useState } from 'react';
import { Link } from 'react-router-dom';


import AuthorList from './components/AuthorList'

const ListarCrearAuthor = () => {
    const [authors, setAuthors] = useState(null);

   

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <Link to={`/new`} className="">Add an Author</Link>
                       
                    </div>
                    
                </div>
                <div className="row">
                    <h3>We have quotes by:</h3>
                    <AuthorList authors={authors} setAuthors={setAuthors} />
                </div>
            </div>
        </>
    )
}

export default ListarCrearAuthor