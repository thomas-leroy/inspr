![Inspr.](https://github.com/thomas-leroy/inspr/blob/master/assets/square.png?raw=true)(https://inspr.s6l.fr/)


## Dependencies

You will need to install Node.js (v8.10+) and Yarn, if you haven't already.

After you've set this stuff up please run

`$ npm install -g gulp`

This installs the Gulp command line tools.
Afterwards please run

`$ yarn install`

in the project's directory.
This will install all the things you need for running the gulp-tasks
automatically.

## Browser support

* Chrome 81
* Firefox 74+
* Edge 44+

## Launch project locally

Just run this command :
`$ gulp dev`

This should return you :

```bash
    [xx:xx:xx] Using gulpfile /[PATH TO YOUR FOLDER]/inspr/gulpfile.js
    [xx:xx:xx] Starting 'dev'...
    [xx:xx:xx] Starting 'dev-webserver'...
    [xx:xx:xx] Webserver started at https://localhost:1234
```

Dev webserver can be accessed through https://localhost:1234

Note : webserver is server over https which is not signed.

The project will be served on your localhost.

## Contribute

Please help making this project better and [contribute](CONTRIBUTING.md) with your knowledge.

## Building the project

Please use [Gulp.js](https://github.com/gulpjs/gulp) for building a
production-state of this project. The `Gulpfile.js` has tasks for concatenating
and minifying CSS and JS/JSON.

Simply run `$ gulp build` at the project root. A `dist` folder will be created with a ready to prod version.

This should return you :

```bash
    [xx:xx:xx] Using gulpfile /[PATH TO YOUR FOLDER]/inspr/gulpfile.js
    [xx:xx:xx] Starting 'clean'...
    [xx:xx:xx] Finished 'clean' after 49 ms
    [xx:xx:xx] Starting 'build'...
    [xx:xx:xx] Starting 'styles'...
    [xx:xx:xx] Finished 'build' after 11 ms
    [xx:xx:xx] Finished 'styles' after 84 ms
    [xx:xx:xx] Starting 'helpers/scripts'...
    [xx:xx:xx] Finished 'helpers/scripts' after 283 ms
    [xx:xx:xx] Starting 'scripts'...
    [xx:xx:xx] Finished 'scripts' after 1.5 s
    [xx:xx:xx] Starting 'copy'...
    [xx:xx:xx] Finished 'copy' after 3.84 ms
    [xx:xx:xx] Starting 'pages'...
    [xx:xx:xx] Finished 'pages' after 48 ms
    [xx:xx:xx] Starting 'prod-check-webserver'...
    [xx:xx:xx] Webserver started at https://localhost:4567
    [xx:xx:xx] Finished 'prod-check-webserver' after 18 ms
```

To control build, webserver can be accessed through https://localhost:4567

## Credits

This project is created by [Thomas LEROY](https://github.com/thomas-leroy).

## License

Please be aware of the licenses of each component we use in this project.
Everything else that has been developed by the contributions to this project is under [MIT License](LICENSE.md).
