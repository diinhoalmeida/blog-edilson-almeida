import React, { FormEventHandler } from 'react';
import './style.css';

interface ISearchbar {
    value: any;
    setSearchKey: (e: any) => void;
    clearSearch: () => void;
    handleSearchSubmit: FormEventHandler;
}

const SearchBar = ({ value, setSearchKey, clearSearch, handleSearchSubmit }: ISearchbar) => {
    return (
        <div className="searchBar-wrap">
            <form onSubmit={handleSearchSubmit}>
                <input onChange={setSearchKey} type="text" placeholder="Buscar por Categoria" value={value} />
            </form>
            {value && <span onClick={clearSearch}>X</span>}
            <button>Buscar</button>
        </div>
    )
}

export default SearchBar;