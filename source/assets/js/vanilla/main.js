import GetUser from './components/getUser';
import GetTrends from './components/getTrends';
import MakeRequestJson from './utils/request';

MakeRequestJson({
  url:'/1.1/users/show.json?screen_name=americanascom'
}, (data) => {
  new GetUser(data);
});

MakeRequestJson({
  url:'/1.1/statuses/user_timeline.json?screen_name=americanascom'
}, (data) => {

});

MakeRequestJson({
  url:'/1.1/trends/place.json?id=23424768'
}, (data) => {
  let $element = document.getElementById('js-trends');
  GetTrends(data, $element);
});
