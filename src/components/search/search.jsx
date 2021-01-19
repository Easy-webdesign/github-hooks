import React, { useContext, useState } from 'react';
import { AlertContext } from '../alert/alert-context';
import { GitHubContext } from '../github-context/github-context';
import './index.scss';

const Search = p => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GitHubContext);

    
    const onSubmit = e => {
        if(e.key !== 'Enter') return;

        github.clearUsers()
        if(value.trim()) {
            alert.hide();
            github.search(value.trim());
        } else {
            alert.show('Введите данные пользователя')
        }

    }
    return(
        <div className='search form-group'>
            <input 
                type="text" 
                className='form-control' 
                placeholder='Enter to username...' 
                onKeyPress={onSubmit}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
};

export default Search