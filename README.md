# 🚀 Express / Create React App Starter

Starter project to easily bootstrap a React app served up with Express. Also uses [custom-react-scripts](https://github.com/kitze/custom-react-scripts) to add optional support for ES6 decorators, SASS/SCSS, LESS, Stylus, & CSS modules without needing to eject out of Create React App.

Demo: [https://express-cra-starter.herokuapp.com/](https://express-cra-starter.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. See Deployment for notes on how to deploy the project to Heroku.

## Installing

Clone down the repo and go to its directory.

```
git clone https://github.com/rosswaycaster/express-create-react-app-starter.git my-project && cd my-project
```

[Create an empty GitHub repo](https://github.com/new) to store your project & run this command to set the *origin* to ***your repo***. Be sure to edit the url with your username and repo slug.
```
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
git push origin master
```

Install all dependencies with one command.
```
npm run setup
```

## Running for development

This will start the client at http://localhost:3000 which will proxy the api server that is running at http://localhost:3001. The proxy will allow you to make ajax requests to a relative url (such as '/api/hello') from the client and it will route that request to the api server. This proxy only runs during development.
```
npm start
```

## Deploy to Heroku

Once you deploy to Heroku it will build and serve your React app without the need for a proxy.

Make sure you have the [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) and login.
```
heroku login
```

Create an application and commit files.
```
heroku create
git add .
git commit -m 'initial commit'
```

Deploy to Heroku. The first deploy could take a minute or two.
```
git push heroku master
```

## Deploy somewhere else

Follow the steps below to build and serve your React app without the need for a proxy. All commands should be executed in the root directory.

Build the React application.
```
npm run build
```
***Transfer the files to your server.***

Once on the server start node and optionally specify the port.
```
PORT=3000 node server
```



## Authors

* **Ross Waycaster** - *Initial work* - [rosswaycaster](https://github.com/rosswaycaster)

## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Acknowledgments

- [Express](http://expressjs.com/)
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [custom-react-scripts](https://github.com/kitze/custom-react-scripts)
- [Heroku](https://heroku.com)
- [Hack Reactor](https://hackreactor.com)
