const imdbId = require('../index.js');

(async () =>  {
  const movieTitle = 'H2G2'
  try {
    const id = await imdbId(movieTitle);
    console.log(`The IMDB Id of ${movieTitle} is ${id}`)
  } catch (e) {
    console.error('Error :', e)
  }
})();
