import React , {useState} from 'react';

function Search(props){

    const[searchTerms , setSearchTerms] = useState("")

    const onChangeSearch = (event) =>{
        setSearchTerms(event.currentTarget.value);

        props.refreshFunction(event.currentTarget.value);
    }

    return<div>
        <form class="d-flex">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search Products"
                    aria-label="Search"
                    onChange = {onChangeSearch}
                    value = {searchTerms}
                />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
    </div>
}

export default Search;