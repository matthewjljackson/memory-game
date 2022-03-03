import { FunctionComponent } from 'react';
import { Card } from '../interfaces';
import './SingleCard.css';

interface SingleCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard: FunctionComponent<SingleCardProps> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card front' />
        <img className='back' src='/img/cover.png' onClick={handleClick} alt='card back' />
      </div>
    </div>
  );
};

export default SingleCard;
