# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.



Proyecto ejemplo para deployar en GitHub Pages https://github.com/LayZeeDK/github-pages-docusaurus

Open api https://docusaurus-openapi.tryingpan.dev/petstore/get-order-by-id

Plugins https://github.com/webbertakken/awesome-docusaurus#readme


https://github.com/mvarlic/tbk-developers



Plugin de Open api
 https://docusaurus-openapi.tryingpan.dev/petstore/get-order-by-id
 https://docusaurus-openapi.tryingpan.dev

Generar documentacion desde yml
yarn docusaurus gen-api-docs all
Limpiar documentacion
yarn docusaurus clean-api-docs all





url GitGub Pages : https://github.com/continuum.github.io/tbk-developers-new-site


Alternativas traduccion 
https://docusaurus.io/docs/i18n/tutorial


transifex => 
npm install --save @transifex/native @transifex/react @transifex/cli
https://developers.transifex.com/docs/react-sdk


search
https://github.com/cmfcmf/docusaurus-search-local