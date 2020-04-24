import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Filter from './Filter';
import Modal from './Modal';
import getDataFromApi from '../services/getDataFromApi';
import logo from '../images/logo.png';
import '../stylesheets/App.scss';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  // console.log('name filter', nameFilter);

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (data) => {
    setNameFilter(data.value);
  };

  const filteredCharacters = characters.filter((character) => {
    // boolean
    console.log(character.name.toUpperCase().includes(nameFilter.toUpperCase()));

    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderModal = (props) => {
    console.log('recibo esto modal', props);
    return <Modal />;
  };

  return (
    <div className="App__container">
      <header className="header__container">
        <img src={logo} title="Rick y Morty" alt="Rick y Morty" className="header__logo"></img>
      </header>
      <main className="main__container">
        <Filter handleFilter={handleFilter} />
        <CharacterList characters={filteredCharacters} />
        <Switch>
          <Route path="/character/:id" render={renderModal} />
        </Switch>
      </main>
      <footer className="footer__container">
        <h4 className="footer__title">cristina pontijas</h4>
        <small className="footer__credits">Evaluación Final</small>
      </footer>
    </div>
  );
};

export default App;
