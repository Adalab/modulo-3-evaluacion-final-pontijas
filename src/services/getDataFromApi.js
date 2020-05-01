const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          species: character.species,
          origin: character.origin.name,
          status: character.status,
          location: character.location.name,
          episodes: character.episode.length,
        };
      });
    });
};

export default getDataFromApi;
