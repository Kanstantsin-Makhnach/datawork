import React, {useState, useEffect} from 'react';
import './App.css';
import Repository from './Repository';
import RepSearch from './RepSearch';

function App() {
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const url = 'https://api.github.com/search/repositories?q=w';

  useEffect( () => {
    async function request() {
      try {
        let requestResult = await fetch(url);
        console.log(requestResult);
        if(!requestResult.ok) {
          throw new Error('Превышен допустимый лимит запросов')
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
  
  if(isLoading) return <div id="loading"></div>
  return (
    <div className="App">
      <RepSearch />
      <div>Найдено {formatNumber()} репозиториев</div>
      <div className='d-flex align-content-center flex-wrap'>
        <Repository
          errorMessage={errorMessage}
          items={items}
        />      
      </div>  
    </div>
  );
}

export default App;
