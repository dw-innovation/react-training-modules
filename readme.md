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


## Deployments

Deployments are handled automatically by Github actions, and deploy to an AWS server.  
see the file `.github/workflows/main.yml`

this repository uses the AWS IAM user `github-build-deploy`, who's access keys are in this repositories `secrets` (in settings), and is configured to be allowed to deploy to our s3 bucket.

Each branch name is deployed.  Master should be available here:
http://digger-training-modules-app.s3-website.eu-central-1.amazonaws.com/master

#### Pull requests:

Opening a pull request automatically makes a Deploy of the pull request.  for example, branch `feature/test-pull-request`, will make a deploy at:
http://digger-training-modules-app.s3-website.eu-central-1.amazonaws.com/feature/test-pull-request
