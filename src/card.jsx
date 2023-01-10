import {useState} from 'react';

const Card = ({title, info}) => {
  const [toggle, setToggle] = useState(true);

  const showInfo = () => setToggle(!toggle);
  
  return(
    <div className= 'card'>
      <div>
        <h4>{title}</h4>
        <span onClick={showInfo}>{toggle ? '+' : '-'}</span>
      </div>
      <p>{toggle ? '' : info}</p>
    </div>
  )
}

export default Card;