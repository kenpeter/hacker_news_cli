const chalk = require('chalk');

// const
// filter: {add_date_line}
// logger: { pirnt }
// pusher
// table
// require ../util
const { logger: { print }, pusher, table } = require('../util');

// module
// .exports
// newsText => {}
module.exports = newsText => {

  //test
  //console.log(newsText);

  // const news array
  // it is const because we can still push
  // newsArray is not changed.
  // this use it as a ref, ref, ref, ref, ref
  const newsArray = [];
  // const
  // pushNews =
  // pusher, push newsArray
  // because we pass array down there.
  // pusher is a func definition, like closure.
  // we pass down array, so it persists.
  const pushNews = pusher(newsArray);

  // push news(), now call.
  // pushNews(msg = '', preSpaces = 2, sufNewline = 2)
  // so this print empty things.
  pushNews();

  //test
  newsText.articles.map(
    (story, index) => {
      // have to return here.

      if(story.author == null) {
        story.author = "unknown";
      }
      else {

      }

      if(story.description == null) {
        story.description = "unknown";
      }
      else {
      }

      if(story.url == null) {
        story.url = "unknown";
      }
      else {
      }

      if(story.publishedAt == null) {
        story.publishedAt = "unknown";
      }
      else {
      }


      //
      pushNews(chalk.bold(story.title));
      pushNews('by ' + story.author);
      pushNews(story.description);
      pushNews(story.url);
      pushNews(story.publishedAt);
      pushNews('---------------------------------------------------------');
    }

  );
  //console.log(myStories);

  // actually print
  print(newsArray);

}
