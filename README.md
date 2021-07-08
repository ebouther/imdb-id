<div>
	<a href="https://www.npmjs.com/package/imdb-id"><img src="https://img.shields.io/npm/v/imdb-id" alt="Current Version"></a>
</div>

# imdb-id
Get IMDB ID from Movie Title  

## Installation:
Current stable release: `2.x`  
  
yarn:  ```yarn add imdb-id```  
npm:  ```npm install --save imdb-id```


## Loading the module:
```const imdbId = require('../index.js');```
  
  
## Usage:
The function takes a movie title as parameter:  
  
```await imdbId("H2G2")```
   
 
## Example:
```
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
```  
