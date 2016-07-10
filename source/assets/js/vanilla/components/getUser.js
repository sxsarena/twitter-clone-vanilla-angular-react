import thousandsFormatter from '../utils/miscellaneous';

/**
 *
 *
 *
 *
 */
export default class GetUser {

  constructor(data) {
    this.infoUser = this.getData(data);

    this.insertProfileNumbers();
  }

  getData(data) {
    const infoUser = {
      name : data.name,
      username : data.screen_name,
      location: data.location,
      description: data.description,
      url: data.url,
      created: data.created_at,
      followersCount: thousandsFormatter(data.followers_count),
      followingCount: thousandsFormatter(data.friends_count),
      likesCount: thousandsFormatter(data.favourites_count),
      tweetsCount: thousandsFormatter(data.statuses_count)

    }

    return infoUser;
  }

  insertProfileNumbers(){
    let $container = document.getElementById('js-profileNumbers');
    let html = `
    <ul class="profileNumbers-list">
      <li class="profileNumbers-item">
        <a class="profileNumbers-link on" href="">
          <span class="profileNumbers-title">Tweets</span>
          <em class="profileNumbers-amount">${this.infoUser.tweetsCount}</em>
        </a>
      </li>
      <li class="profileNumbers-item">
        <a class="profileNumbers-link" href="">
          <span class="profileNumbers-title">Following</span>
          <em class="profileNumbers-amount">${this.infoUser.followingCount}</em>
        </a>
      </li>
      <li class="profileNumbers-item">
        <a class="profileNumbers-link" href="">
          <span class="profileNumbers-title">Followers</span>
          <em class="profileNumbers-amount">${this.infoUser.followersCount}</em>
        </a>
      </li>
      <li class="profileNumbers-item">
        <a class="profileNumbers-link" href="">
          <span class="profileNumbers-title">Likes</span>
          <em class="profileNumbers-amount">${this.infoUser.likesCount}</em>
        </a>
      </li>
    </ul>`;

    $container.innerHTML = html;
  }
}
