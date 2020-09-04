import React from 'react' ;

const Search = ({searchfield,searchChange}) => {
    return (
        <div className="container mt-5 col-md-4">
            <div className="input-group mb-3">
                <input 
                    type="search" 
                    className="form-control" 
                    placeholder="Search ..."
                    value={searchfield} 
                    aria-label="Username" 
                    aria-describedby="basic-addon1" 
                    onChange={searchChange} />
            </div>
        </div>
    ) ;
}

export default Search;