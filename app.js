const express = require('express')
const app = express()


app.set('view engine', 'ejs')

const movies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    rating: 87,
    genre: 'Sci-Fi',
    language: 'English',
    poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    duration: '148 min',
    synopsis: 'A skilled thief enters peoples dreams to steal secrets and attempts an impossible mission involving dream manipulation.',
    reviewCount: 250000

  },
  {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    rating: 85,
    genre: 'Sci-Fi',
    language: 'English',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',

    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    duration: '169 min',
    synopsis: 'A team of explorers travels through a wormhole in space in search of a new home for humanity.',
    reviewCount: 250000

  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    rating: 90,
    genre: 'Action',
    language: 'English',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',

    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    duration: '152 min',
    synopsis: 'Batman faces the Joker, a criminal mastermind who brings chaos to Gotham City.',
    reviewCount: 300000

  },

  {
    id: 4,
    title: 'Manjummel Boys',
    year: 2024,
    rating: 85,
    genre: 'Drama',
    language: 'Malayalam',
    poster: 'https://www.themoviedb.org/t/p/w1280/bswrtewwthpsh6nABiqKevU4UBI.jpg',

    director: 'Chidambaram',
    cast: ['Soubin Shahir', 'Sreenath Bhasi', 'Balu Varghese', 'Ganapathi'],
    duration: '135 min',
    synopsis: 'A group of friends from Manjummel go on a trip to Kodaikanal, where an unexpected accident turns their journey into a desperate rescue mission.',
    reviewCount: 50000

  },
  {
    id: 5,
    title: 'Premalu',
    year: 2024,
    rating: 78,
    genre: 'Romance',
    language: 'Malayalam',
    poster: 'https://www.themoviedb.org/t/p/w1280/uPpmBjY3znUqGY8kYwI5xvOrSc0.jpg',

    director: 'Girish A. D.',
    cast: ['Naslen', 'Mamitha Baiju', 'Shyam Mohan'],
    duration: '156 min',
    synopsis: 'A young man moves to Hyderabad, where an unexpected romance brings friendship, humour, and emotional complications.',
    reviewCount: 30000

  },
  {
    id: 6,
    title: 'Leo',
    year: 2023,
    rating: 75,
    genre: 'Action',
    language: 'Tamil',
    poster: 'https://www.themoviedb.org/t/p/w1280/2XUHC4lp3tDsgfFLFygNZ2x2Um9.jpg',

    director: 'Lokesh Kanagaraj',
    cast: ['Vijay', 'Trisha Krishnan', 'Sanjay Dutt', 'Arjun Sarja'],
    duration: '164 min',
    synopsis: 'A quiet café owner in Kashmir is drawn into a dangerous world when his violent past begins to catch up with him.',
    reviewCount: 50000

  },
  {
    id: 7,
    title: '3 Idiots',
    year: 2009,
    rating: 85,
    genre: 'Comedy',
    language: 'Hindi',
    poster: 'https://www.themoviedb.org/t/p/w1280/gmSRHU1Wtiatj8KoyVt8rT9ockx.jpg',

    director: 'Rajkumar Hirani',
    cast: ['Aamir Khan', 'R. Madhavan', 'Sharman Joshi', 'Kareena Kapoor'],
    duration: '170 min',
    synopsis: 'Three engineering students challenge the pressure of the education system while discovering friendship and their own paths in life.',
    reviewCount: 100000

  },
  {
    id: 8,
    title: 'The Avengers',
    year: 2012,
    rating: 80,
    genre: 'Action',
    language: 'English',
    poster: 'https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',

    director: 'Joss Whedon',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Scarlett Johansson'],
    duration: '143 min',
    synopsis: 'Earth’s mightiest heroes join forces to stop Loki and his alien army from conquering the planet.',
    reviewCount: 200000

  },

  {
    id: 9,
    title: 'Drishyam',
    year: 2013,
    rating: 85,
    genre: 'Thriller',
    language: 'Malayalam',
    poster: 'https://images.filmibeat.com/webp/ph-big/2013/12/meena-mohanlal-in-malayalam-movie-drishyam_138684678660.jpg',

    director: 'Jeethu Joseph',
    cast: ['Mohanlal', 'Meena', 'Ansiba Hassan', 'Esther Anil'],
    duration: '164 min',
    synopsis: 'A family man uses his intelligence and careful planning to protect his family after a disturbing incident.',
    reviewCount: 30000

  },
  {
    id: 10,
    title: 'Bangalore Days',
    year: 2014,
    rating: 83,
    genre: 'Drama',
    language: 'Malayalam',
    poster: 'https://www.themoviedb.org/t/p/w1280/iFMyZw1DTGvZ8hPa0eTseSFiRT1.jpg',

    director: 'Anjali Menon',
    cast: ['Dulquer Salmaan', 'Nivin Pauly', 'Fahadh Faasil', 'Nazriya Nazim', 'Parvathy Thiruvothu'],
    duration: '171 min',
    synopsis: 'Three cousins move to Bangalore and experience love, friendship, personal struggles, and new beginnings.',
    reviewCount: 20000

  },

];



app.get('/', (req, res) => {
  res.render('home', { movies: movies });
});

app.get('/top-rated', (req, res) => {
  const topRatedMovies = movies
    .filter(movie => movie.rating >= 80)
    .sort((a, b) => b.rating - a.rating);

  res.render('home', { movies: topRatedMovies });
});



app.get('/genre/:name', (req, res) => {
  const genreName = req.params.name.toLowerCase();

  const filteredMovies = movies.filter(movie =>
    movie.genre.toLowerCase() === genreName
  );

  res.render('home', {
    movies: filteredMovies,
    selectedGenre: req.params.name
  });
});


app.get('/language/:name', (req, res) => {
  const languageName = req.params.name.toLowerCase();

  const filteredMovies = movies.filter(movie =>
    movie.language.toLowerCase() === languageName
  );

  res.render('home', {
    movies: filteredMovies,
    selectedLanguage: req.params.name
  });
});





app.get('/search', (req, res) => {
  const query = req.query.q || '';

  const results = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  res.render('home', {
    movies: results,
    searchQuery: query
  });
});



app.get('/movies/:id', (req, res) => {
  const movieId = Number(req.params.id);

  const movie = movies.find(movie => movie.id === movieId);

  if (!movie) {
    return res.status(404).send('Movie not found');
  }

  res.render('details', { movie: movie });
});





app.listen(3000, () => {
  console.log('Server running on port 3000');
});