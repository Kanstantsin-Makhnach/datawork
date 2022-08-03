import React from 'react';
import './Repository.css';

function Repository({items}) {
    
    function renderReps() {
        console.log(items)
        if (!items.length){
          return <div>У нас нет данных для отображения</div>
        }
        const rep = items.map((item) => {
          return (
            <div key={item.id} className='userBox'>
                <div>Имя репозитория: {item.name}</div>
                <div> Количество форков: {item.forks}</div>
                <div>Язык: {item.language}</div>
                <a href={item.owner.html_url}><img src={item.owner.avatar_url}  alt='тут должна  быть картинка'></img></a>
                <a href={item.owner.html_url}>Владелец репозитория: {item.owner.login}</a>
            </div>
          )
            
        });
        return rep;
    }

    return (
        <div >
            {renderReps()}       
        </div>
    );
}

export default Repository;