PlayStation Store IGN ratings
========

Chrome Extension that shows in the PS Store the IGN rating of the games.

![PS store Ratings icon](chrome-extension/icons/icon128.png)

### Build
To install all the dependencies:

```bash
  $ yarn

  // or

  $ npm install
```

To re-build the solution:

```bash
  $ npm run build
```

### API key
A Mashape free API key is needed. For more info on how to get one https://market.mashape.com/.

Add your API key to `mashape_apikey.js`.

### Install
1. Open `chrome://extensions/`.
2. Drag and drop the folder `chrome-extension` in the browser window.
3. Enjoy :)

### Under the hood
- check the syntax of the JS, according to [StandardJS](http://standardjs.com/) (via [ESLint](http://eslint.org/))
- compile the JS files using [webpack 3.x](https://webpack.github.io/) and [Babel](https://babeljs.io/)
- dependencies management and npm scripting via [yarn](https://yarnpkg.com) (`npm` commands are still supported)

### Improvements
- add different sources (as [metacritic](http://www.metacritic.com/))
- add unit tests
- convert the extension in user script
