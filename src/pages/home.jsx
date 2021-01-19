import React, { useContext } from 'react';
import { Card, Search } from '../components';
import { GitHubContext } from '../components/github-context/github-context';

const Home = p => {
    const {loading, users} = useContext(GitHubContext);

    return(
        <>
            <Search/>
            <div className="row">
                {loading 
                    ? <p className='text-center'>Loading...</p> 
                    : users.map((el, i) => {
                        return <div className="col-sm-4 mb-4" key={el.id}>
                                    <Card user={el}/>
                                </div>
                    })
                }

                
            </div>
            
        </>
    );
};

export default Home