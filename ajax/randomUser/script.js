const url = 'https://randomuser.me/api/';
const btn = document.querySelector('#btn');
const user = {
  avatar: document.querySelector('#avatar'),
  fullname: document.querySelector('#fullname'),
  username: document.querySelector('#username'),
  email: document.querySelector('#email'),
  city: document.querySelector('#city'),
}

btn.addEventListener('click', () => {
  update();
});

function update() {
  fetch(url)
  .then(res => {
    return handleErrors(res);
  })
  .then(data => {
    return data.results[0];
  })
  .then(data => {
    user.avatar.src = data.picture.medium;
    user.fullname.textContent = `${capitalize(data.name.first)} ${capitalize(data.name.last)}`;
    user.username.textContent = data.login.username;
    user.email.textContent = data.email;
    user.city.textContent = capitalize(data.location.city);
  })
  .catch(err => {
    console.log('There was an error. Status code:', err.message);
  });
}

function handleErrors(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.status);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
