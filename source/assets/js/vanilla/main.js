import MakeRequest from './utils/request';

MakeRequest({
  url:'/1.1/users/show.json?screen_name=americanascom'
}, (data) => {
  console.warn(data);
});

MakeRequest({
  url:'/1.1/statuses/user_timeline.json?screen_name=americanascom'
}, (data) => {
  console.warn(data);
});

MakeRequest({
  url:'/1.1/trends/place.json?id=1'
}, (data) => {
  console.warn(data);
});
