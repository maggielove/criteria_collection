import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

// Load db data
// async function main() {
//   const newJob = await prisma.job.create({
//     data: {
//       company: 'AdaMarie',
//       title: 'Frontend Developer',
//       experienceLevel: 'Senior',
//     },
//   })
//   console.log('Created new job: ', newJob)
//
//   const allJobs = await prisma.job.findMany()
//   console.log('All jobs: ')
//   console.dir(allJobs, { depth: null })
// }
//
// main()
//   .catch((e) => console.error(e))
//   .finally(async () => await prisma.$disconnect())


const app = express()
app.use(express.json())
// const path = require("path");

// display the job board
// app.use(express.static("public"));
// app.use(express.static("dist"));

// const DIST_DIR = path.join(__dirname, "dist");
// may need to move html file, or add ../
// const HTML_FILE = path.join(DIST_DIR, "index.html");

// app.get("/", (req, res) => {
//    res.sendFile(HTML_FILE, function(err){
//       if(err){
//          res.status(500).send(err);
//       }
//    });
// });

// REST API routes
app.get('/jobs', async (req, res) => {
  const jobs = await prisma.job.findMany()
  res.json(jobs)
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
