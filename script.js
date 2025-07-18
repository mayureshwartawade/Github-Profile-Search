const url = "https://api.github.com/users";
const searchInputEl = document.getElementById("searchInput");
const searchButtonEl = document.getElementById("searchBtn");
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");

// example of data fetched from url

// {
//     "login": "mojombo",                                             ----->>>> username
//     "name": mojambo tua,                                            ------>>>> name 
//     "id": 1,
//     "node_id": "MDQ6VXNlcjE=",
//     "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",        ------>>>profile img
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/mojombo",
//     "html_url": "https://github.com/mojombo",                             ------->>> profile Url
//     "followers_url": "https://api.github.com/users/mojombo/followers",
//     "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
//     "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
//     "organizations_url": "https://api.github.com/users/mojombo/orgs",
//     "repos_url": "https://api.github.com/users/mojombo/repos",
//     "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/mojombo/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false
//   },

const generateProfile = (profile) => {
  return `
   <div class="profile-box">
   <div class="top-section">
     <div class="left">
       <div class="avatar">
         <img alt="avatar" src="${profile.avatar_url}" />
       </div>
       <div class="self">
         <h1>${profile.name}</h1>
         <h1>@${profile.login}</h1>
       </div>
     </div>
     <a href="${profile.html_url}" target="_black">
     <button class="primary-btn">Check Profile</button>
     </a>
   </div>

   <div class="about">
     <h2>About</h2>
     <p>
     ${profile.bio}
     </p>
   </div>
   <div class="status">
     <div class="status-item">
       <h3>Followers</h3>
       <p>${profile.followers}</p>
     </div>
     <div class="status-item">
       <h3>Followings</h3>
       <p>${profile.following}</p>
     </div>
     <div class="status-item">
       <h3>Repos</h3>
       <p>${profile.public_repos}</p>
     </div>
   </div>
 </div>
   `;
};

const fetchProfile = async () => {
  const username = searchInputEl.value;

  loadingEl.innerText = "loading.....";
  loadingEl.style.color = "black";

  try {
    // fetching data from api
    const res = await fetch(`${url}/${username}`);
    const data = await res.json();
    if (data.bio) {
      loadingEl.innerText = "";
      profileContainerEl.innerHTML = generateProfile(data);
    } else {
      loadingEl.innerHTML = data.message;
      loadingEl.style.color = "red";
      profileContainerEl.innerText = "";
    }
  } catch (error) {
    console.log({ error });
    loadingEl.innerText = "";
  }
};

searchButtonEl.addEventListener("click", fetchProfile);
