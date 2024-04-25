![app screenshot](./images/criteria_collection_screenshot.png)

This is a web app based on the Criterion Channel. (It's not for profit. Its sole purpose is for me, a Criterion fan, to play with different tech and design.) It's built using Docker, Prisma, the Prisma Client, Express, Webpack, TypeScript, React, and SCSS.

# Features
- Working database and API
- Lets you see a listing of all films in the database. Cards are populated with film information pulled from the database.
- Lets you filter films by director, decade and genre.
(This is not an accurate reflection of all directors, decades or genres of film.)
- Lets you search
- Includes search result count
- Clear messaging for server errors, no results found
- Log in (test accounts: username - yungalpacino / password - attica; username - partygirl / password - parkerposey)
- Once logged in, you can add films to your Watch List

# To Run Locally
- npm install
- Make sure Docker is running. (Get Docker: https://docs.docker.com/get-docker/)
- Update your docker-compose.yml file and .env to set up your database and connect Prisma to your database. For more information on this and the steps below, see: https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql
- Run `docker-compose up -d`
- create your Prisma schema and database; run your first migration
- To modify the data, you can either edit src/app.ts, or you can use the Prisma Studio after running `npx prisma studio`
- To run the server: `npx tsx src/app.ts`
- You can now view all films at localhost:3000/api/films, genres at localhost:3000/api/genres, directors at localhost:3000/api/directors, and decades at localhost:3000/api/decades. Because we're using Webpack Dev Server proxy, you can also view these routes at localhost:8080/api/<route_name>
- To view the film listings, (in another terminal window) run `npm run serve`. This will open localhost:8080
- To stop the server, run `docker-compose stop`

# To Develop
- You can view changes instantly, thanks to hot reloading

# To Test
- Run `npm test`
