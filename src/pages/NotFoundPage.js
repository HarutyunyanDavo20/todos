import './NotFoundPage.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Notfoundpage = () => {
    return (
        <div>
            <h4 className='NotFound_title'>Not Found page</h4>
            <Link to='/'>Go Home</Link>
        </div>
    );
}

export default Notfoundpage;
