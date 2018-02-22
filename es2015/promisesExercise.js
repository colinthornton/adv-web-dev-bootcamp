function getMostFollowers(...usernames) {
  const url = 'https://api.github.com/users/';
  const promises = [];
  let promise;

  usernames.forEach(user => {
    promises.push(fetch(url + user))
  });

  return Promise.all(promises)
    .then(responses => responses.map(res => res.json()))
    .then(users => {
      return users.reduce((max, next) => {
        return max.followers > next.followers ? max : next;
      });
    })
    .then(user => `${user.login} has the most followers with ${user.followers}`);
}

getMostFollowers('elie', 'tigarcia', 'colt').then(function(data){
  console.log(data);
});

// *****************************************************************************

function starWarsString(num) {
  const url = `https://swapi.co/api/people/${num}`;

  return fetch(url)
          .then(res => res.json())
          .then(character => {
            let result = `${character.name}`;
            return fetch(character.films[0])
              .then(res => res.json())
              .then(film => {
                result += ` is featured in ${film.title}, directed by ${film.director}`;
                return fetch(film.planets[0])
                  .then(res => res.json())
                  .then(planet => {
                    result += ` and it takes place on ${planet.name}`;
                    return result;
                  });
              });
          });
}

starWarsString(1).then(function(data){
    console.log(data)
});
