import React from 'react';
import './CSS//Home.css';

function Home() {

  const [user, setUser] = React.useState('Astrogildo');

  return (
    <>
      <h1 onClick={() => {
        user=='Astrogildo'
        ?
        setUser('Ursula')
        :
        setUser('Astrogildo')
        }}>Olá {user}</h1>
    </>
  );
};

export default Home;