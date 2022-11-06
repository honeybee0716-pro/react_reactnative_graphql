This is a Next.js app and a React Native app monorepo that shares one codebase.
It is built using https://solito.dev/
Please read more about Solito there to learn how this works.

---

The only thing you should need to do to get this repo to work is to open the root folder of the repo in a terminal, and run the command "yarn dev". It should spin up a number of services by itself. If it doesn't work, you may want to try again after running this command first:
yarn add global typescript

---

To get husky working, you may need to run these commands:

yarn add -D husky

npm set-script prepare "husky install" && yarn prepare

npx husky add .husky/pre-commit "yarn lint-staged"

git commit -m "added husky and lint-stagged"
