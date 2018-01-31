const url = 'https://randomuser.me/api/';
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  update();
});

const update = () => {
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError)
};
