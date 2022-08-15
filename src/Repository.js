import React from 'react';
import './Repository.css';
import {Star, Git} from 'react-bootstrap-icons';


function Repository({items, errorMessage, searchReps}) {

  function renderReps() {
      if (errorMessage){
        return <div>{errorMessage}</div>
      }
      if (!items.length){
        return <div>У нас нет данных для отображения</div>
      }
      const rep = items.map((item) => {
        return (
          <div key={item.id} className='userBox card'>
            <a href={item.owner.html_url}><img src={item.owner.avatar_url} className='userImg card-img-top' alt='тут должна  быть картинка'></img></a>
            <div className='card-body d-flex align-items-center flex-column mb-3'>
              <h1 className='card-title p-1 wrap'>Имя репозитория: {item.name}</h1>
              <div className='card-text p-1'> 
                <Star />{item.stargazers_count}
                <Git /> {item.forks}
              </div>
              {item.language && <div className='card-text p-1'>Язык: {item.language}</div>}
              <a className='btn btn-primary mt-auto p-1' href={item.owner.html_url}>Владелец репозитория: {item.owner.login}</a>
            </div>
          </div>
        )
          
      });
      return rep;
  }

  return (
    renderReps()      
  );
}

export default Repository;