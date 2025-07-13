Here's a `README.md` file for your GitHub repository, incorporating the details of your HTML, CSS, and JavaScript code for the GitHub profile search application:

-----

# GitHub Profile Search

A simple web application built with HTML, CSS, and JavaScript that allows you to search for GitHub profiles using a username. It fetches user data from the GitHub API and displays key information like their name, username, avatar, bio, followers, following, and public repositories.

## 🚀 Live Demo

[https://mayureshwartawade.github.io/Github-Profile-Search/]

## ✨ Features

  * **Search GitHub Profiles:** Easily search for any GitHub user by their username.
  * **User Information Display:** View essential profile details including:
      * Profile Picture
      * Name
      * Username
      * Bio
      * Number of Followers
      * Number of Following
      * Number of Public Repositories
  * **Direct Profile Link:** A button to navigate directly to the user's GitHub profile.
  * **Responsive Design:** The layout adjusts for different screen sizes.
  * **Loading Indicator:** Provides feedback while fetching data.
  * **Error Handling:** Displays a message if a profile is not found.

## 🛠️ Technologies Used

  * **HTML5:** For the basic structure of the web page.
  * **CSS3:** For styling and layout.
  * **JavaScript (ES6+):** For fetching data from the GitHub API and dynamically updating the UI.

## 💻 How to Run Locally

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mayureshwartawade/Github-Profile-Search
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Github-Profile-Search
    ```

3.  **Open `index.html` in your browser:**
    Simply double-click the `index.html` file, or open it with your preferred web browser.

## 📂 Project Structure

```
├── index.html
├── style.css
└── script.js
```

  * `index.html`: The main HTML file containing the structure of the application.
  * `style.css`: Contains all the CSS rules for styling the application.
  * `script.js`: Handles the logic for fetching data from the GitHub API and dynamically rendering the profile information.

## 📄 Code Overview

### HTML (`index.html`)

The HTML sets up the basic layout with an input field for the GitHub username, a search button, and dedicated areas to display the loading status and the fetched profile information.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Search Github Profile</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Search Github Profile</h1>
      <div class="search">
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Enter Your Github Username"
        />
        <button class="primary-btn" id="searchBtn">Search</button>
      </div>
      <div id="profileContainer"></div>
      <div id="loading"></div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

### CSS (`style.css`)

The CSS provides a clean and modern design for the search interface and the profile display cards. It uses Flexbox for layout and includes basic styling for inputs, buttons, and profile sections.

```css
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* ... (rest of your CSS code) ... */

.profile-box {
  margin: auto;
  padding: 4rem 2rem;
  width: 90%;
  max-width: 78rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  transition: 0.5s ease-in;
}

```

### JavaScript (`script.js`)

The JavaScript code handles the core functionality:

1.  **Fetching Data:** It uses the `fetch` API to make requests to the GitHub API (`https://api.github.com/users/{username}`).
2.  **Dynamic UI Updates:** It dynamically generates the HTML for the profile card based on the fetched data and updates the `profileContainerEl`.
3.  **Event Handling:** It listens for clicks on the search button to trigger the `fetchProfile` function.
4.  **Loading and Error States:** Manages loading messages and displays error messages for invalid usernames.

<!-- end list -->

```javascript
const url = "https://api.github.com/users";
const searchInputEl = document.getElementById("searchInput");
const searchButtonEl = document.getElementById("searchBtn");
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");

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
```

## 🤝 Contributing

Contributions are always welcome\! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----
