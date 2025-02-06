import React, { useState } from 'react';

const ValentinePage = () => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesSize, setYesSize] = useState(16);
  const [accepted, setAccepted] = useState(false);

  const noMessages = [
    "¿Por qué me dices que no?",
    "Piénsalo bien",
     "¿Es por que soy negro verdad?",
    "Responde de nuevo",
    "¿Segura que no?",
    "Dame otra oportunidad 💔",
    "Como me vas a decir que no 💔",
    "No me hagas esto 😭",
    "Vamos, di que sí!",
    "Soy tu osito! 🧸",
    "Piensalo una vez más, por favor?",
    "Tu corazón dice sí ❤️",
    "¡No seas cruel! 😢",
    "Te extraño",
  ];

  const handleNoClick = () => {
    setYesSize(yesSize * 2);
    setNoClickCount(noClickCount + 1);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {accepted ? (
        <div>
          <h1>¡Gracias Pookie por decir que sí! ❤️</h1>
          <p>Sabía que dirías que sí. ¡Te amo mucho! 😍</p>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Cute Love Bear" style={{ width: '300px' }} />
        </div>
      ) : (
        <div>
          <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="Cute Love Bear" style={{ width: '250px' }} />
          <h2>Will you be my valentine?</h2>
          <div>
            <button 
              style={{ fontSize: `${yesSize}px`, padding: '10px 20px', margin: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button 
              style={{ padding: '10px 20px', margin: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
              onClick={handleNoClick}
            >
              {noClickCount === 0 ? "No" : noMessages[(noClickCount - 1) % noMessages.length]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentinePage;
