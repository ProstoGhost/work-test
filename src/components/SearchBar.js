import React, { useState } from "react";
import "./SearchBar.css";
 // Import the CSS file for styling

const SearchBar = () => {

  const [value, setValue] = useState('');
  const [integer, setInteger] = useState('');
  const [count, setCount] = useState('')

  const handleChange = (event) => {
    fetch(`https://swapi.dev/api/people/?search=${event.target.value}`).then(d => d.json()).then(people => {
      //береам апиху и работаем с ее результатом
      let answer = people.results[0]
      //для упрощения берем первый результат
      setCount(people.count)
      if(people.count > 1){
        setInteger(false)
      }
      if (people.count === 1) {
        setValue(answer)
        setInteger(true)
      }
      else{
        setInteger(false)
      }
      //тут проверяем на условие что у нас нашёлся именно один челик
      //и кидаем пару хуков в след функцию
    })
  }
  function CreateData(data, checktable){
    if(checktable){
      //проверяем что чел только один через checktable и если
      //один то возвращяем карточку с его данными
      return <div className="card">
      <ul>
        <li>Name: {data.name}</li>
        <li>Gender: {data.gender}</li>
        <li>Birth: {data.birth_year}</li>
        <li>Mass: {data.mass}</li>
        <li>Height: {data.height}</li>
      </ul>
      </div>
    }
    if(!checktable){
      if(count === 82){
        return <p>Please Enter Name</p>
      }
      if(count > 1){
        return <p>too many answer</p>
      }
      if(count === 0){
        return <p>No match found</p>
      }
      //если находит несколько делаем разные ответы либо нет никого либо их много
      //если пустая строка то пишем что нужно ввести имя всего персов 82 поэтому проверяем условие таким образом
    }
  }

  



  return (
    <div className="main">
      <h1>Star Wars character search</h1>
      <div className="search-string">
        <input
          className="search-bar"
          type="text"
          onChange={handleChange}
        // тут у нас идет текст который мы ввели он уходит в функцию
          placeholder="Поиск..."
        />
        {CreateData(value, integer)}
        {/* тут выводим табличку с результатом */}
      </div>
    </div>
  );
};

export default SearchBar;