// fs
const fs = require('fs');
// path
const path = require('path');

// crawler
// what queen
const Crawler = require('./queen');
// so it need logger.error.... not logger
// util
const { logger: { error } } = require('../util');

//
const config = require('../../config');

// cache
// ../../cache/latest.json
const cachePath = '../../cache/latest.json';

// is cache the newest
let isLatestCached = false;

// module
// .export
// = () => {}
module.exports = () => {
  // store
  // .from
  // latest
  Store.from = 'latest';

  // if is latest cached
  // so show cache result
  if (isLatestCached) {
    // return
    // new
    // promise
    // resolve, no reject at all....
    return new Promise(resolve => {
      // If the file is here, so grab it.
      // get cache json file
      const cachedLatest = require(cachePath);
      // resolve, promise
      // resolve latest.json
      resolve(cachedLatest);
    })
      // .then
      // res => {}
      .then(res => {
        // return
        // Printer news
        // res.
        // print the news from cache
        return Printers.news(res);
      })
  } else {
    let url = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=' + config.apiKey;
    return new Crawler(url)
      // .fetch
      .fetch()
      // .then
      // res => {}
      .then(res => {
        // fs
        // write file... just write to fache
        // path.resolve
        // __dirname, cachePath -------> ../../cache/latest.json
        // JSON string i fy
        // res
        // err
        fs.writeFile(path.resolve(__dirname, cachePath), JSON.stringify(res), err => {
          // error
          if (err) error(err);
          // is latest cached === true
          // it is like global
          // program killed will reset
          isLatestCached = true;

          /*
            { author: 'Sarah Perez',
            title: 'Spotify acquires audio detection startup Sonalytic',
            description: 'Streaming music service Spotify announced this morning it has acquired a company called Sonalytic, makers of an audio detection technology that can identify..',
            url: 'https://techcrunch.com/2017/03/07/spotify-acquires-audio-detection-startup-sonalytic/',
            urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2017/03/gettyimages-506028296.jpg?w=764&h=400&crop=1',
            publishedAt: '2017-03-07T06:40:25Z' },

          */
          //test
          //console.log(res);

          // printers
          // .news
          // res, as arg
          return Printers.news(res);
        })
      })
  }
}
