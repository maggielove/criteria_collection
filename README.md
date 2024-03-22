This app is built using Docker, Prisma, the Prisma Client, Express, Webpack, React, and SCSS.

# To Run Locally
- Get Docker up and running with this command: `docker-compose up -d` (https://docs.docker.com/get-docker/)
- npm install
- To run the server: `npx ts-node src/app.ts`
- You can view all jobs at localhost:3000/jobs
- To view the job board, (in another terminal window) run `npm run serve`. This will open localhost:8080
- To stop the server, run `docker-compose stop`

# To Develop
- You can view changes instantly, thanks to hot reloading
