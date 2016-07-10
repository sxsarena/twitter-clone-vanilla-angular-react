import GetTimeline from './components/getTimeline';
import GetUser from './components/getUser';
import GetTrends from './components/getTrends';
import makeRequestJson from './utils/request';

makeRequestJson({
  url:'/1.1/users/show.json?screen_name=americanascom'
}, (data) => {
  new GetUser(data);
});

// &max_id=
makeRequestJson({
  url:'/1.1/statuses/user_timeline.json?screen_name=americanascom&count=5'
}, (data) => {
  let $element = document.getElementById('js-tweets');
  new GetTimeline(data, $element);
});

makeRequestJson({
  url:'/1.1/trends/place.json?id=23424768'
}, (data) => {
  let $element = document.getElementById('js-trends');
  GetTrends(data, $element);
});
