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
                <input onChange={setSearchKey} type="text" placeholder="Search By Category" value={value} />
            </form>
            {value && <span onClick={clearSearch}>X</span>}
            <button>Go</button>
        </div>
    )
}

export default SearchBar;