# ts-node-base

---

Base project to build nodeJS apps using a set of preconfigured tools like typescript, jest, eslint, prettier, and so on.

### `yarn start`

start the app using `ts-node` in the port defined by the environment variable PORT

### `yarn test`

execute the tests files withe extensions `.(spec|test).ts` then keep running the `jest` runner.

### `yarn test:watch`

execute the tests and keep the runner on watch mode.

### `yarn coverage`

run the tests and calculates the test coverage then exit.

### `yarn lint`

run the eslint rules configured and try to fix some styles errors using prettier. If it can't fix something this will be promt to the console.

### `yarn commit`

It will run the `commitizen` tool to force you to write a commit message and description following one of the specied formats. It will display a menu with multiple options and a set of questions to force you to think a more understandable description.

```sh
refactor(auth controller): decoupling the classes

use mixin classes to decoupling the class ineritance

close #123 relates to #54
```

### `yarn build`

compile the typescript code into the dist folder

### `yarn build:watch`

compile the typescript code and keep the compiler on watch mode.

### `yarn clean`

remove the dist folder

## Hooks

This project use husky hooks enhance the development experience

### `pre-commit`

Run `lint-staged` para corregir errores de formato antes de construir el commit.

### `commit-msg`

When a commit is created, execute the package `commitlint` to validate that the new commit apply [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

> The new commits wich their message start by **wip o WIP** will be exclude from this validation process
