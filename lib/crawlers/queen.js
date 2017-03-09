// const super agent, simulate your browser
const superagent = require('superagent');

// error
// ../util/logger
const { error } = require('../util/logger');

// define a class
// Crawler
class Crawler {
  // constructor
  constructor (url) {
    // 1. this.url ==== news/latest
    this.url = url;
  }

  // fetch
  //
  fetch () {
    // return
    // new promise
    // resolve => {}
    // return new Promise(function (resolve, reject) {
    // (resolve, reject) => {}
    return new Promise(resolve => {
      // use super agent
      // .get myurl
      // e.g. http://news-at.zhihu.com/api/4/news/latest, for latest news
      // e.g. http://news-at.zhihu.com/api/4/news/9273386, for individual news
      let myurl = this.url;
      //console.log(myurl);
      //test
      //debugger;

      superagent.get(myurl)
        // .end
        // (err, res) => {}
        .end((err, res) => {
          // if (err)
          // error(err)
          if (err) error(err);

          // resolve
          // JSON
          // .parse
          // res.text
          // test
          //debugger;
          resolve(JSON.parse(res.text)); // this a promise
        })
    })
  }
}

// module
// .exports
// = crawler
module.exports = Crawler;
