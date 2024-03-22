import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

// Create db datasource
async function createFilm() {
  const filmAndCriteria = await prisma.film.create({
    data: {
      title: 'Dog Day Afternoon',
      genre: {
        create: { name: 'Drama' }
      },
      director: {
        create: { name: 'Sidney Lumet' }
      },
      // decade: {
      //   create: { name: '1970s' }
      // },
    }
  });

  const allFilms = await prisma.film.findMany()
  console.log('All films: ')
  console.dir(allFilms, { depth: null })
}



// async function main() {
  // const newFilm = await prisma.film.create({
    // data: {
    //   title: 'The Panic in Needle Park',
    //   genre: 'Drama',
    //   director: 'Jerry Schatzberg',
    //   decade: '1970s'
    // },
    // data: {
    //   title: 'Mississippi Masala',
    //   genre: 'Romance',
    //   director: 'Mira Nair',
    //   decade: '1990s'
    // },
    // data: {
    //   title: 'The Master',
    //   genre: 'Drama',
    //   director: 'Paul Thomas Anderson',
    //   decade: '2010s'
    // },
    // data: {
    //   title: 'Party Girl',
    //   genre: 'Comedy',
    //   director: 'Daisy Von Scherler Mayer',
    //   decade: '1990s'
    // },
    // data: {
    //   title: 'Tampopo',
    //   genre: 'Ramen Western',
    //   director: 'Juzo Itami',
    //   decade: '1980s'
    // },
    // data: {
    //   title: 'Two Lovers',
    //   genre: 'Drama',
    //   director: 'James Gray',
    //   decade: '2000s'
    // },
    // data: {
    //   title: 'Little Odessa',
    //   genre: 'Drama',
    //   director: 'James Gray',
    //   decade: '1990s'
    // },
  // })
  // console.log('Created new film: ', newFilm)
  //
  // const allFilms = await prisma.film.findMany()
  // console.log('All films: ')
  // console.dir(allFilms, { depth: null })
// }

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => await prisma.$disconnect())

createFilm()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

// const update


const app = express()
app.use(express.json())

// REST API routes
app.get('/films', async (req, res) => {
  const films = await prisma.film.findMany()
  res.json(films)
})

app.get('/genres', async(req, res) => {
  const genres = await prisma.genre.findMany()
  res.json(genres)
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
