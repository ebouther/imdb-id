var request = require("request");
var cheerio = require('cheerio');

function imdbId(title, cb) {
  var url = "http://www.imdb.com/find?s=all&q=" + encodeURIComponent(title);
  request(url, function (error, response, body) {
      if (error) {
        return cb (error, null);
      }
      if (response.statusCode !== 200) {
        return cb("Imdb: HTTP bad response (Status Code: " + response.statusCode + ")");
      }

      let $ = cheerio.load(body);
      let movie_link = $("#main > .article >  .findSection > .findList > tbody").find("td").find("a").attr('href');

      if (movie_link) {
        let regex = /\/title\/(t{2}\d+)\/?/;
        let id = regex.exec(movie_link);
        if (id) {
          return cb(null, id[1]);
        }
      }

      return cb("Movie not found", null);
    });
}

module.exports = imdbId;
