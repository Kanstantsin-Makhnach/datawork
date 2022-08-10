import React, {useState} from 'react';
// import React, {useState, useEffect} from 'react';
// import useDebounce from './hooks/useDebounce';

// function Search({API_URL_REPOSITORY, setIsLoading, setItems, setTotalCount, setErrorMessage, currentPage}) //для использования динамического поиска с использованием декоратора debounce
function Search ({searchReps}) {

    const [searchInput, setSearchInput] = useState('');

    // const debouncedSearchInput = useDebounce(searchInput, 1000);

    // useEffect(() => {
    //     if(!searchInput.trim() && !debouncedSearchInput) return        
    //     async function searchReps() {
    //         try{
    //             let searchResult = await fetch(`${API_URL_REPOSITORY}?q=${searchInput}&per_page=32&${currentPage}`);
    //             console.log(1, searchResult);
    //             if(!searchResult.ok) {
    //                 throw new Error('Ошибка поиска')
    //                 }
    //             let result = await searchResult.json();
    //             let searchedItems = await result.items;
    //             setTotalCount(result.total_count);
    //             setItems(searchedItems);
    //             setIsLoading(false);
    //         }
    //         catch (error) {
    //             setErrorMessage(error.message);
    //             setIsLoading(false);
    //         }
    //     }
    //     searchReps();
    // }, [debouncedSearchInput]);

    
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <input placeholder='Введите запрос для поиска' value={searchInput} onChange={handleInputChange}></input>
            <button onClick={searchReps} value={searchInput}>Найти</button>
        </div>
    );
};

export default Search;