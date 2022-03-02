import { FunctionComponent } from 'react';
import { Card } from '../interfaces';
import './SingleCard.css';

interface SingleCardProps {
  card: Card;
}

const SingleCard: FunctionComponent<SingleCardProps> = ({ card }) => {
  return (
    <div className='card'>
      <img className='front' src={card.src} alt='card front' />
      <img className='back' src='/img/cover.png' alt='card back' />
    </div>
  );
};

export default SingleCard;
