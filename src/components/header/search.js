import React from 'react';

function Search() {
  return (
    <div className="search">
        <form className="form-search">
            <input className="form-control form-control-sm" type="search" placeholder="Rechercher" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    </div>
  );
}

export default Search;
