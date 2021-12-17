import React, { useEffect, useRef } from 'react';
import './Popup.style.scss';
import { CardName, cards } from '../Controls/Controls';
import Card from '../Card/Card';
import { HandProps } from '../Game/Game';

type AppProps = {
  onClick: () => void
  hand: HandProps
}

const Popup = ({ onClick, hand } : AppProps) => {
  const playerCard = cards.find((item) => item.name === hand.pCard);
  const opponentCard = cards.find((item) => item.name === hand.oCard);

  return (
    <div className="popup" onClick={onClick}>
      {
       playerCard ? <Card name={playerCard.name} id={playerCard.id} img={playerCard.img} /> : null
      }
      {
        opponentCard ? <Card name={opponentCard.name} id={opponentCard.id} img={opponentCard.img} /> : null
      }
    </div>
  );
};

export default Popup;