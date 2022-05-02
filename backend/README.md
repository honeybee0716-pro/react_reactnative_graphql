Duplicate .env.example and rename it .env.local and pass change any api keys as needed.

To run the server, first run 'yarn' to install the dependencies and then run 'yarn run dev' to start the local server.

You should see the API running on port 3000

Make sure Postgres is running on port 5432 (or connect to a non-local env)

Procfile:
This contains the command that Heroku should use to start the app after a deployment (command begins after "web:". E.g. "web: node ./dist/index.js")

Prisma:
You can update the models/schema by changing the schema as you desire then running this command in the root directory but put your own name for it
npx prisma migrate dev --name "user model updated"

If you get the error:
The table (not available) does not exist in the current database #10771

you may need to run the command:
npx prisma db push
