import React from 'react';
import './Card.css';

//This component is the card that contains the content of each page.
const Card = (props) => {
  {/* props is used to display the content passed as children  */ }
  return (
    <div className='card'>{props.children}</div>
  )

}

export default Card;