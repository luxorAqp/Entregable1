import React, { useState } from 'react';
import quote from '../quotes.json'
const colors = ["#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#F9F871","#0081CF","#008F7A"]
const QuoteBox = () => {

   
   
   const random = ()=>Math.floor(Math.random()* quote.length)
   const [phrase,setPhrase] = useState(quote[random()])
   const changePhrase = ()=>{
         setPhrase(quote[random()])
   }
   
   const color =colors[Math.floor(Math.random()* 6)]
   document.body.style= `background: ${ color}`

   
   return (
      <div className='card' style={{color:color}}>
         <i className="fa-solid fa-quote-left"></i>
         <p>
            {phrase.quote}
         </p>
         <h2>{phrase.author}</h2>
         <button onClick={changePhrase} style={{color:color}} > <i className="fa-solid fa-angle-right"></i></button>
      </div>
   );
};

export default QuoteBox;