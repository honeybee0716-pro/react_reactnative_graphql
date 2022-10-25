This is a Next.js app and a React Native app monorepo that shares one codebase.
It is built using https://solito.dev/
Please read more about Solito there to learn how this works.

---

The only thing you should need to do to get this repo to work is to open the root folder of the repo in a terminal, and run the command "yarn dev". It should spin up a number of services by itself.

---

If you need that backend for anything, first you will need to spin up a PostgreSQL instance. We have made this easy by providing a docker-compose.yml file that does exactly that. You'll just need to make sure you have docker installed and running and open the docker folder and run docker-compose.yml - PostgreSQL should now be running thanks to Docker.

You can now try to run the backend which should in the terminal show a successful connection to PostgreSQL

---

To get husky working, you may need to run these commands:

yarn add -D husky

npm set-script prepare "husky install" && yarn prepare

npx husky add .husky/pre-commit "yarn lint-staged"

git commit -m "added husky and lint-stagged"

---
