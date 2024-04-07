import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

// TODO add seeds so a user isn't forced to use prisma studio to populate db
// const films = [
//     {
//       title: 'The Panic in Needle Park',
//       genreId: 1,
//       director: {
//         create: { name: 'Jerry Schatzberg' }
//       },
//       decade: {
//         create: { name: '1970s' }
//       },
//     },
//     {
//       title: 'Mississippi Masala',
//       genre: {
//         create: { name: 'Romance' }
//       },
//       director: {
//         create: { name: 'Mira Nair' }
//       },
//       decade: {
//         create: { name: '1990s' }
//       },
//     },
//     {
//       title: 'The Master',
//       genreId: 1,
//       director: {
//         create: { name: 'Paul Thomas Anderson' }
//       },
//       decade: {
//         create: { name: '2010s' }
//       },
//     },
//     {
//       title: 'Party Girl',
//       genre: {
//         create: { name: 'Comedy' }
//       },
//       director: {
//         create: { name: 'Daisy Von Scherler Mayer' }
//       },
//       decadeId: 2,
//     },
//     {
//       title: 'Tampopo',
//       genre: {
//         create: { name: 'Ramen Western' }
//       },
//       director: {
//         create: { name: 'Juzo Itami' }
//       },
//       decade: {
//         create: { name: '1980s' }
//       },
//     },
//     {
//       title: 'Two Lovers',
//       genreId: 1,
//       director: {
//         create: { name: 'James Gray' }
//       },
//       decade: {
//         create: { name: '2000s' }
//       },
//     },
//     {
//       title: 'Boogie Nights',
//       genre: {
//         create: { name: 'Dramedy' }
//       },
//       directorId: 4,
//       decadeId: 2,
//     },
// ]

// Create db datasource
// async function addFilms() {
//   for (let filmToAdd of films) {
//     console.log(`film to add `, filmToAdd, `typeof: `, typeof filmToAdd);
//
//     await prisma.film.create({
//       data: filmToAdd,
//     })
//   }
// }

// addFilms()
//   .catch((e) => console.error(e))
//   .finally(async () => await prisma.$disconnect())

// async function createFilm() {
//   const filmAndCriteria = await prisma.film.create({
//     data: {
//       title: 'Dog Day Afternoon',
//       genre: {
//         create: { name: 'Drama' }
//       },
//       director: {
//         create: { name: 'Sidney Lumet' }
//       },
//       // decade: {
//       //   create: { name: '1970s' }
//       // },
//     }
//   });
//
//   const allFilms = await prisma.film.findMany()
//   console.log('All films: ')
//   console.dir(allFilms, { depth: null })
// }

  // createFilm()
  //   .catch((e) => console.error(e))
  //   .finally(async () => await prisma.$disconnect())


// TODO add update function ? Use prisma studio?

const app = express()
app.use(express.json())

// REST API routes
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
    let searchTerm = req.query['search'] ? req.query['search'] : null;

    if (searchTerm) {
      await prisma.film.findMany({
        where: {
          'title': {
            contains: searchTerm,
            mode: 'insensitive'
          }
        }
      })
    }

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

    res.json(filteredFilms);
  }
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000/api/'),
)
