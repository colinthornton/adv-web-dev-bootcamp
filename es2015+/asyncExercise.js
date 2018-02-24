async function hasMostFollowers(...usernames) {
  const url = 'https://api.github.com/users/';

  const requests = usernames.map(username => {
    return fetch(url + username).then(res => res.json());
  });
  const users = await Promise.all(requests);
  const popularUser = users.reduce((max, next) => {
    return max.followers > next.followers ? max : next;
  });
  return `${popularUser.login} has the most followers with ${popularUser.followers}`
}

hasMostFollowers('elie', 'tigarcia', 'colt').then(function(data){
  console.log(data);
});

// *****************************************************************************

async function starWarsString(index) {
  const url = `https://swapi.co/api/people/${index}`;

  const character = await fetch(url).then(res => res.json());
  const film = await fetch(character.films[0]).then(res => res.json());
  const planet = await fetch(film.planets[0]).then(res => res.json());
  return `${character.name} is featured in  ${film.title}, directed by ${film.director} and it takes place on ${planet.name}`
}

starWarsString(1).then(function(data){
    console.log(data)
});
