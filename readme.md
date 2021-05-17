Hello, world

# React training modules


The React training modules are intended to be a _reusable_ set of interactive activities, which can be
bundled into various different training modules.

In the `src` folder you should find the `components`, which include the reusable elements,
as well as individual folders for examples.

You should be able to develop on the training modules here, and include this project in other 
projects that will need them, as an `npm`, or `git` package

## installing:

```bash
npm i
```

### Developing

```bash
npm run dev
```

this should start a hot-reloadable server on `localhost:9002`

hot-reload is handled by webpack https://webpack.js.org/concepts/hot-module-replacement/


TODO
 - You can use the CLI to modify the webpack-dev-server configuration with the following command: webpack serve --hot-only.
