import React, {useState} from "react";

function RepSearch() {

    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const searchResult = (e) => {
        
    }

    return(
        <div>
            <input placeholder='Введите запрос для поиска' value={searchInput} onChange={handleInputChange}></input>
            <button onClick={searchResult} value={searchInput}>Найти</button>
        </div>
        
    )
}

export default RepSearch;