var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector('#quote');


// XHR
var xhrBtn = document.querySelector('#xhr');

xhrBtn.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if(xhr.status == 200 && xhr.readyState == 4) {
      quote.textContent = JSON.parse(xhr.responseText);
    }
  };
  xhr.open('GET', url);
  xhr.send();
});


// Fetch
var fetchBtn = document.querySelector('#fetch');

fetchBtn.addEventListener('click', function() {
  fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    quote.textContent = data[0];
  });
});


// jQuery
$('#jquery').click(function() {
  $.getJSON(url)
  .done(function(data) {
    $('#quote').text(data[0]);
  });
});


// Axios
var axiosBtn = document.querySelector('#axios');

axiosBtn.addEventListener('click', function() {
  axios.get(url)
  .then(function(res) {
    quote.textContent = res.data[0];
  });
});
