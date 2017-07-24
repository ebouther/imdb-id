# imdb-id
Get IMDB ID from Movie Title

# Usage:
` npm install --save imdb-id `
```
var imdbId = require('imdb-id');

var title = "H2G2";
imdbId(title, function(err, imdb_id) {
  if (!err) {
    console.log(title + "  ID : " + imdb_id);
  }
});
```
