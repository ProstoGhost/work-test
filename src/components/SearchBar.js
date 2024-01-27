import React, { useState } from "react";
import "./SearchBar.css"; // Import the CSS file for styling

const SearchBar = () => {

  const countries = [

    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent:"Asia" },
  
  ];
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //понижаем регистр текста
    var lowerCase = e.target.value;
    setInputText(lowerCase);
  };

  const filteredData = countries.filter((el) => {
    //если у нас пустая строка поиска то просто выводим всё что есть
    if (inputText.length === 0) {
        return el;
    }
    //если пользхователь ввел хотя бы один символ то наичнаем поиск
    if(inputText.length >= 1) {
      //поиск по стране или по части света
      if (el.name.includes(inputText)) {
        return el.name.includes(inputText);
      }
      else{
        return el.continent.includes(inputText);
      }
    }
  })



  return (
    <div className="search-bar">
      <p>Search employee</p>
      <input
        className="bar-test"
        type="text"
        onChange={inputHandler}
        // тут у нас идет текст который мы ввели он уходит в функцию
        placeholder="Поиск..."
      />
      <ul>
        {filteredData.map((item) =>(
          <li key={item.name}>{item.continent}: {item.name}</li>
          //простой геник таблички
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;