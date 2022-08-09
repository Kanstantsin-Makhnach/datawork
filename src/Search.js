import React from 'react';

function Search({searchInput, handleInputChange}) {
    return (
        <div>
            <input placeholder='Введите запрос для поиска' value={searchInput} onChange={handleInputChange}></input>
            {/* <button onClick={searchReps}>Найти</button> */}
        </div>
    );
};

export default Search;