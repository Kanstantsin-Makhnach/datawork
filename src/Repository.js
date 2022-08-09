import React from 'react';
import './Repository.css';


function Repository({items, errorMessage, searchReps}) {
        

    function renderReps() {
        console.log(items)
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
                <h1 className='card-title p-1'>Имя репозитория: {item.name}</h1>
                <div className='card-text p-1'> <i className="bi bi-star"></i>{item.stargazers_count} <i className="bi bi-git"></i>{item.forks}</div>
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