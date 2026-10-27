const express = require('express')
const app = express()


app.set('view engine', 'ejs')

const movies = [
  {
    title: 'Inception',
    year: 2010,
    rating: 87,
    genre: 'Sci-Fi',
    language: 'English',
    poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg'
  },
  {
    title: 'Interstellar',
    year: 2014,
    rating: 85,
    genre: 'Sci-Fi',
    language: 'English',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    rating: 90,
    genre: 'Action',
    language: 'English',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },

  {
    id: 4,
    title: 'Manjummel Boys',
    year: 2024,
    rating: 85,
    genre: 'Drama',
    language: 'Malayalam',
    poster: 'https://www.themoviedb.org/t/p/w1280/bswrtewwthpsh6nABiqKevU4UBI.jpg'
  },
  {
    id: 5,
    title: 'Premalu',
    year: 2024,
    rating: 78,
    genre: 'Romance',
    language: 'Malayalam',
    poster: 'https://www.themoviedb.org/t/p/w1280/uPpmBjY3znUqGY8kYwI5xvOrSc0.jpg'
  },
  {
    id: 6,
    title: 'Leo',
    year: 2023,
    rating: 75,
    genre: 'Action',
    language: 'Tamil',
    poster: 'https://www.themoviedb.org/t/p/w1280/2XUHC4lp3tDsgfFLFygNZ2x2Um9.jpg'
  },
  {
    id: 7,
    title: '3 Idiots',
    year: 2009,
    rating: 85,
    genre: 'Comedy',
    language: 'Hindi',
    poster: 'https://www.themoviedb.org/t/p/w1280/gmSRHU1Wtiatj8KoyVt8rT9ockx.jpg'
  },
  {
    id: 8,
    title: 'The Avengers',
    year: 2012,
    rating: 80,
    genre: 'Action',
    language: 'English',
    poster: 'https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg'
  },

  {
    id: 9,
    title: 'Drishyam',
    year: 2013,
    rating: 85,
    genre: 'Thriller',
    language: 'Malayalam',
    poster: 'https://images.filmibeat.com/webp/ph-big/2013/12/meena-mohanlal-in-malayalam-movie-drishyam_138684678660.jpg'
  },
  {
    id: 10,
    title: 'Bangalore Days',
    year: 2014,
    rating: 83,
    genre: 'Drama',
    language: 'Malayalam',
    poster: 'https://www.themoviedb.org/t/p/w1280/iFMyZw1DTGvZ8hPa0eTseSFiRT1.jpg'
  },
  {
    id: 11,
    title: 'Premam',
    year: 2015,
    rating: 84,
    genre: 'Romance',
    language: 'Malayalam',
    poster: 'https://scontent.fcok2-1.fna.fbcdn.net/v/t51.75761-15/502733234_18510954814043059_7807871404160365886_n.webp?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s640x640&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JoMGTFGVmmQQ7kNvwGTGr9z&_nc_oc=AdpUSZbzmkRRYX1Lddit3ggkI7-O884yAu0uvgpIubH0EiuEGeD65IiuOPckBa4ttKo&_nc_zt=23&_nc_ht=scontent.fcok2-1.fna&_nc_gid=F84TaZlmHAhBZ_0g2t-WZg&_nc_ss=7a289&oh=00_AQOtUE1sr-z9a6UOx7jwHKAEO1dCqacnzOHxBLo31-P8xQ&oe=6AE629BB'
  },
  {
    id: 12,
    title: 'Vikram',
    year: 2022,
    rating: 82,
    genre: 'Action',
    language: 'Tamil',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDEyMWQ0ZDktNTY0MC00YWRkLWFlMjQtMDUxMjRlMDhmMmRlXkEyXkFqcGc@._V1_.jpg'
  },
  {
    id: 13,
    title: 'Jai Bhim',
    year: 2021,
    rating: 88,
    genre: 'Drama',
    language: 'Tamil',
    poster: 'https://www.themoviedb.org/t/p/w1280/ehybiOtBUtrMkmtB39zQEtq1Jie.jpg'
  },
  {
    id: 14,
    title: 'Dangal',
    year: 2016,
    rating: 84,
    genre: 'Drama',
    language: 'Hindi',
    poster: 'https://www.themoviedb.org/t/p/w1280/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg'
  },
  {
    id: 17,
    title: 'C.I.D. Moosa',
    year: 2003,
    rating: 80,
    genre: 'comedy',
    language: 'Malayalam',
    poster: 'https://images.openai.com/static-rsc-4/G3PIlMbQvfVyizpKXNnwHNyO2_5JW9a_3k3C2SKKUSoLyYSrF41evkl025MgZo5iAd3R3OcXAFzRxdDjFyIO2B_BBi5xd-btSfwXdwWc4F4vtshlhOCC89YcCrLrVNau2q6wcjBS_4-iPM6u_TLJhokwVguLpZvKqe7MqVOAZgRprCy1-d8HfC8GBMt7wtBT?purpose=fullsize'
  },
  {
    id: 16,
    title: 'Avatar',
    year: 2009,
    rating: 79,
    genre: 'Sci-Fi',
    language: 'English',
    poster: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_540/https://vijayatimes.com/wp-content/uploads/2022/05/avathar.webp'
  }


];



app.get('/', (req, res) => {
  res.render('home', { movies: movies });
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});