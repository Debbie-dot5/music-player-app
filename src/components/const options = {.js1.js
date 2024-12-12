const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '5d2c3d9542mshac7a9dfd7c6d9dap1dffdcjsn5318b703922f',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

fetch('https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));