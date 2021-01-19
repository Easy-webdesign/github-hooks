import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Card = p => {
    return(
        <div className='card'>
            <img src={p.user.avatar_url} alt={p.user.login} className='card-img-top'/>
            <div className="card-body">
                <h5 className="card-title">{p.user.login}</h5>
                <Link to={'/profile/' + p.user.login} className="btn btn-primary">Open</Link>
            </div>
        </div>
    );
};

export default Card;