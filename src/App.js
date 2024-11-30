import './App.css';
import like from './heart.png'
import { useState, useEffect } from 'react';
import { getCat } from './ApiCats.js';

export const App = () => {
  const [count, setCount] = useState(0);
  const [imageSrc, setImageSrc] = useState('');
  const [count2, setCount2] = useState(true);

  const handleClick = () => {
    setCount(count + 1);
  }

 useEffect(() => {
    if (count2) {
    getCat().then((obj) => {
      setImageSrc(obj[0].url);
      setCount2(false)
    },
   [])}});

  return (
    <>
    <div className="MyFirstApp">
      <header className="App-header">
        <img className="imageCat" src = {imageSrc} alt="cat" />
        <div className="Buttons">
          <button className="ButtonLike" onClick={handleClick}><img src={like} alt='like'></img></button>
          <button className="Next" onClick={() => setCount2(true)}>Далее</button>
        </div>
        <p>Вы поставили {count} &#x2764;&#xfe0f;</p>
      </header>
    </div>
    </>
  );
}

export default App