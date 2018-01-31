const price = document.querySelector('#price');
const button = document.getElementsByTagName('button')[0];
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

function updatePrice() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);
      price.textContent = `${data.bpi.USD.rate} ${data.bpi.USD.code}`;
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

button.addEventListener('click', () => {
  updatePrice();
});

window.onload = updatePrice();
