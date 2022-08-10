import React, {useState, useEffect} from 'react';
import './App.css';
import Repository from './Repository';
import Search from './Search';
import InfiniteScroll from  'react-infinite-scroller';


const API_URL_REPOSITORY = 'https://api.github.com/search/repositories';


function App() {
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage,setCurrentPage] = useState(1);
  const [url, setUrl] = useState(`${API_URL_REPOSITORY}?q=a&per_page=32&page=`);

  async function request() {
    try {
      let requestResult = await fetch(url+currentPage);
      if(!requestResult.ok) {
        throw new Error('Ошибка запроса')
      }
      let result = await requestResult.json();
      setCurrentPage(currentPage + 1);
      setTotalCount(result.total_count)
      setItems([...items, ...result.items]);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message)
      setIsLoading(false);
    }
  }

  useEffect( () => {
    request();
    
  }, []);
 
  function formatNumber() {
    return (Math.round(totalCount * 100) / 100).toLocaleString()
  }
  
  const loader = (<div id="loading"></div>)
  
  const hasMoreItems = !!currentPage;

  const searchReps = (e) => {
    setUrl(`${API_URL_REPOSITORY}?q=${e.target.value}&per_page=32&page=`);
    console.log(url)
  }
  
  return (
    <div key='search' className="App">
      <Search 
        key='search'
        // API_URL_REPOSITORY={API_URL_REPOSITORY}
        // setErrorMessage={setErrorMessage}
        // setItems={setItems}
        // setIsLoading={setIsLoading}
        // setTotalCount={setTotalCount}
        // currentPage={currentPage}
        searchReps={searchReps}
      />
      <div key='totalCount'>Найдено {formatNumber()} репозиториев</div>
      <InfiniteScroll 
        key='scroll'
        className='d-flex align-content-center flex-wrap'
        loadMore={request}
        initialLoad={false}
        hasMore={hasMoreItems}
        loader={loader}
      >
        <Repository key='repository'
          errorMessage={errorMessage}
          items={items}
        />
      </InfiniteScroll> 
    </div>
  );
}

export default App;
