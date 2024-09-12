'use strict';

const CLIENT_ID = '3dcdbff77130bce6c014';
const CLIENT_SECRET = '771c54be1633409dae2dbd6b4451fd50b40558d9';

class UI {
  constructor(
    searchUserInputElement,
    formElement,
    profileElement,
    alertsElement,
    loadingElement,
    reposElement
  ) {
    this.searchUserInputElement = searchUserInputElement;
    this.formElement = formElement;
    this.profileElement = profileElement;
    this.alertsElement = alertsElement;
    this.loadingElement = loadingElement;
    this.searchUserInput = '';
    this.reposElement = reposElement;

    this.hideLoading();
    this.hideRepos();
  }

  onInputChange(callback) {
    this.searchUserInputElement.addEventListener('keyup', (event) => {
      this.searchUserInput = event.target.value.trim();
      if (callback) {
        callback(this.searchUserInput);
      }
    });
  }

  onFormSubmit(callback) {
    this.formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      callback(this.searchUserInput);
    });
  }

  removeUserData() {
    this.profileElement.innerHTML = '';
  }

  renderUserData(user) {
    this.profileElement.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div class="repos"></div>
    `;
  }

  renderUserRepos(repos) {
    repos.forEach((element) => {
      const repository = document.createElement('tr');
      const created_at = new Date(element.created_at);

      const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      const date = created_at.toLocaleString('en-US', dateOptions);
      const time = created_at.toLocaleString('en-US', timeOptions);

      repository.innerHTML = ` 
      <td scope="col" >${element.name}</td>
      <td scope="col" >${date} ${time}</td>
      <td scope="col" ><a href='element.html_url'>${element.html_url}</a></td>
      `;
      this.reposElement.appendChild(repository);
    });
  }

  removeRepos() {
    this.reposElement.innerHTML = `
    <thead>
    <tr>
      <th scope="col">Repository name</th>
      <th scope="col">Created</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
    `;
  }

  renderError(error) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-danger';
    alert.innerHTML = `<h4 class="alert-heading">${error.name}</h4><p>${error.message}</p>`;
    this.alertsElement.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 2000);
  }

  showLoading() {
    this.loadingElement.style.display = 'block';
  }

  hideLoading() {
    this.loadingElement.style.display = 'none';
  }

  showRepos() {
    this.reposElement.style.display = 'block';
  }

  hideRepos() {
    this.reposElement.style.display = 'none';
  }
}

class API {
  async getUserData(input) {
    if (!input) {
      throw new Error('Please enter a username');
    }
    const response = await fetch(
      `https://api.github.com/users/${input}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const data = await response.json();
    if (data.message === 'Not Found') {
      throw new Error(`User "${input}" not found`);
    }
    return data;
  }

  async getUserRepos(input) {
    const response = await fetch(`https://api.github.com/users/${input}/repos`);
    const userRepos = await response.json();
    const lastRepos = userRepos.slice(-5);
    return lastRepos;
  }
}

const ui = new UI(
  document.querySelector('.searchUser'),
  document.getElementById('form'),
  document.getElementById('profile'),
  document.getElementById('alerts'),
  document.getElementById('loading'),
  document.getElementById('last-repos')
);
const api = new API();

const run = () => {
  console.log('start');

  const searchUser = async (input) => {
    try {
      ui.removeRepos();
      ui.removeUserData();
      ui.showLoading();
      const userData = await api.getUserData(input);
      console.log('userData', userData);
      ui.renderUserData(userData);

      const userRepos = await api.getUserRepos(input);
      console.log('user repos ->', userRepos);
      ui.renderUserRepos(userRepos);
      ui.showRepos();
    } catch (error) {
      console.log('error', error);
      ui.renderError(error);
    } finally {
      ui.hideLoading();
    }
  };

  ui.onInputChange();
  ui.onFormSubmit(searchUser);
};

run();
