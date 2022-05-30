To get husky working, you may need to run these commands:

---

yarn add -D husky

npm set-script prepare "husky install" && yarn prepare

npx husky add .husky/pre-commit "yarn lint-staged"

git commit -m "added husky and lint-stagged"
