import {useState} from 'react';
import Card from './card.jsx';
import data from './data.js';

const Modal = () => {
const[questions, setQuestions] = useState(data);
  
  return(
    <div className= 'container'>
      <div className='left'>
        <h3>Questions And Answers About Login</h3>
      </div>
      <div className='right'>
        {questions.map(item => (
        <Card key= {item.id} {...item} />
        ))}
      </div> 
    </div>
  )
}

export default Modal;