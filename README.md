
# Random Teams Generator
Random Teams Generator(RTG) is an appllication which generates teams randomly.

It can be used in multiple scenarios:
1. Games
2. Projects
3. Competitions

## Features

- Users can be added manualy
- Teams can be generated automatically
- Order can be specified
- User rating can be specified
- Score can be keeped
- Team can be notified
- History can be saved

## Backend
- [node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [nodemon](https://nodemon.io/)
- [express](https://expressjs.com/)
- [mongoose](http://mongoosejs.com/)
- [body-parser](https://github.com/expressjs/body-parser)
- [cors](https://github.com/expressjs/cors)
- [serve-favicon](https://github.com/expressjs/serve-favicon)

## Frontend

- [vue.js](https://vuejs.org/)
- [bulma](https://bulma.io/) - [element ui](http://element.eleme.io/#/en-US)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [sass](http://sass-lang.com/)
- [postCSS](https://github.com/postcss/postcss)
- [esllint](https://eslint.org/)
- [karma](https://karma-runner.github.io/2.0/index.html)
- [mocha](https://mochajs.org/)
- [nightwatch](http://nightwatchjs.org/)

## Database

- [mongodb](https://www.mongodb.com/)

## IDE

- [Visual Studio Code](https://code.visualstudio.com/)

> User settings:

```
{
  "editor.mouseWheelZoom": true,
  "editor.tabSize": 2,
  "editor.renderIndentGuides": true,
  "editor.rulers": [
    160
  ],
  "window.zoomLevel": 0,
  "editor.wordWrapColumn": 160,
  "editor.wordWrap": "wordWrapColumn",
  "editor.formatOnSave": true,
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
  ],
  "vetur.format.defaultFormatter.html": "prettier",
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "html.format.wrapLineLength": 160,
  "html.format.preserveNewLines": false,
  "workbench.iconTheme": "vscode-icons",
  "extensions.autoUpdate": true
}
```
 
> Extensions:

 ```
PeterJausovec.vscode-docker
dbaeumer.vscode-eslint
octref.vetur
robertohuertasm.vscode-icons
```

# API - routes

**USER** <br>
  `/api/user` : `[POST]` — Add user <br>
  `/api/users` : `[GET]` — Get all users <br>
  `/api/user/:id` : `[GET]` — Get user by id <br>
  `/api/user/:id` : `[PUT]` — Update user by id <br>
  `/api/user/:id` : `[DELETE]` — Delete user by id <br>
  
**MEMBER** <br>
  `/api/member` : `[POST]` — Add member <br>
  `/api/members` : `[GET]` — Get all members <br>
  `/api/member/:id` : `[GET]` — Get member by id <br>
  `/api/member/:id` : `[PUT]` — Update member by id <br>
  `/api/member/:id` : `[DELETE]` — Delete member by id <br>
  
  **TEAM** <br>
  `/api/team` : `[POST]` — Add team <br>
  `/api/teams` : `[GET]` — Get all teams <br>
  `/api/team/:id` : `[GET]` — Get team by id <br>
  `/api/team/:id` : `[PUT]` — Update team by id <br>
  `/api/team/:id` : `[DELETE]` — Delete team by id <br>
  `/api/team/:teamId/member/:memberId` : `[POST]` — Add member to the team <br>
  `/api/team/:teamId/member/:memberId` : `[DELETE]` — Delete member from the team <br>

# Usage

Make sure to have [node](https://nodejs.org/en/) installed.<br>
Open a console in project root folders and run:

```
$ npm install
```

### Start Server

To start serving server side files run the following command:

```
$ npm run server-dev
```

The application is available by default on port `8081`

### Start Client

To start the client side run the following command in `client` folder console:

```
$ npm run client-dev
```

The application is available by default on port `8080`

### Test Server

To launch the server unit test run the following command:

```
$ npm run server-unit-test
```

### Test Client

Client has two type of tests comming with vue cli generator; unit test and end to end test:

**Unit Test**

```
$ npm run client-unit-test
```

**E2E Test**

```
$ npm run client-e2e-test
```



