import React, {useState, useEffect} from 'react';
import './App.css';
import Repository from './Repository';
import Search from './Search';

const API_URL_REPOSITORY = 'https://api.github.com/search/repositories?q=';


function App() {
  


  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  // const [url, setUrl] = useState('');

  
  useEffect( () => {
    async function request() {
      try {
        let requestResult = await fetch(API_URL_REPOSITORY + 'test');
        console.log(requestResult);
        if(!requestResult.ok) {
          throw new Error('Ошибка запроса')
        }
        let result = await requestResult.json();
        let arrResult = await result.items;
        setTotalCount(result.total_count)
        setItems(arrResult);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message)
        setIsLoading(false);
      }
      
    }
    request();
    
  }, []);

  function formatNumber() {
    return (Math.round(totalCount * 100) / 100).toLocaleString()
  }
  // const users = items.map(item => users.item = item.owner);
  // console.log();
  
  // const searchReps = items.filter((item) => {
  //   return item.name.toLowerCase().includes(searchInput.trim().toLowerCase());
  // });

  
  if(isLoading) return <div id="loading"></div>
  return (
    <div className="App">
      <Search 
        API_URL_REPOSITORY={API_URL_REPOSITORY}
        setErrorMessage={setErrorMessage}
        setItems={setItems}
        setIsLoading={setIsLoading}
        setTotalCount={setTotalCount}
      />
      <div>Найдено {formatNumber()} репозиториев</div>
      <div className='d-flex align-content-center flex-wrap'>
        <Repository
          // searchReps={searchReps}
          errorMessage={errorMessage}
          items={items}
        />      
      </div>  
    </div>
  );
}

export default App;
