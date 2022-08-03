import React, {useState, useEffect} from 'react';
import './App.css';
import Repository from './Repository';

function App() {
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.github.com/search/repositories?q=w';

  useEffect( () => {
    async function request() {
      let requestResult = await fetch(url);
      let result = await requestResult.json();
      let arrResult = await result.items;
      setItems(arrResult);
      setIsLoading(false);
    }
    request();
    
  }, []);

  console.log(items);
  // const users = items.map(item => users.item = item.owner);
  // console.log();
  
  if(isLoading) return <div id="loading"></div>
  return (
    <div className="App">
      <Repository
        items={items}
      />      
    </div>
  );
}

export default App;
