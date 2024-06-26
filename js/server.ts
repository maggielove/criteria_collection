import { PrismaClient } from '@prisma/client'
import express from 'express'
import path from 'path'

const prisma = new PrismaClient()

const app = express();
// app.use('../assets', express.static(path.join(__dirname, '../assets')));
app.use(express.json());

// REST API routes
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  let user = await prisma.user.findUnique({
    where: {
      username: username,
      password: password
    },
    include: {
      myList: {
        include: {
          director: true,
          decade: true
        }
      }
    }
  });

  if (user) {
    //send user id instead
    res.json({ user: { id: user.id, username: user.username, myList: user.myList } });
  } else {
    res.status(404).send({error: { message: 'User not found'}})
  }

});

app.post(`/user`, async (req, res) => {
  const { userId, filmId } = req.body;

  // TODO add logic to search myList for filmId, send back message if ID is
  // already in the list

  // update film list to add filmId to list of user with matching Id
  let updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      myList: {
        connect: { id: filmId }
      }
    },
    include: {
      myList: {
        include: {
          director: true,
          decade: true
        }
      }
    }
  })

  res.json({ myList: updatedUser.myList });
});

app.get('/api/films', async (req, res) => {
  const films = await prisma.film.findMany({
    include: { // includes nested values (name) in response
      genre: true,
      director: true,
      decade: true,
    },
  })

  res.json(films)
})

app.get('/api/genres', async(req, res) => {
  const genres = await prisma.genre.findMany()
  res.json(genres)
})

app.get('/api/directors', async(req, res) => {
  const genres = await prisma.director.findMany()
  res.json(genres)
})

app.get('/api/decades', async(req, res) => {
  const genres = await prisma.decade.findMany()
  res.json(genres)
})

//queries
app.get(`/api/`, async (req, res) => {
  let filteredFilms;

  if (req.query) {
    const queryObj = req.query;

    // convert strings to integers
    let genreIdInt = req.query['genreId'] ? Number(req.query['genreId']) : undefined;
    let decadeIdInt = req.query['decadeId'] ? Number(req.query['decadeId']) : undefined;
    let directorIdInt = req.query['directorId'] ? Number(req.query['directorId']) : undefined;

    if (req.query.search) {
      let searchTerm: string = req.query.search.toString();
      filteredFilms = await prisma.film.findMany({
        where: {
          title: {
            contains: searchTerm,
            mode: 'insensitive'
          }
        },
        include: { // includes nested values (name) in response
          genre: true,
          director: true,
          decade: true,
        },
      })
    } else {
      filteredFilms = await prisma.film.findMany({
        where: {
          AND: [{
            'genreId': genreIdInt
          },
          {
            'decadeId': decadeIdInt
          },
          {
            'directorId': directorIdInt
          }
          ]
        },
        include: { // includes nested values (name) in response
          genre: true,
          director: true,
          decade: true,
        },
      });
    }

    res.json(filteredFilms);
  }
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
