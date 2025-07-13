## Technology

### Tech Stack

#### Languages:

- TypeScript 5

  [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

- HTML 5

  [![HTML Badge](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)](https://www.w3.org/)

- CSS 3

  [![CSS Badge](https://img.shields.io/badge/CSS-1572B6?logo=css)](https://www.w3.org/)

#### Build Tools:

- node 22

- [![node Badge](https://img.shields.io/badge/node-CB3837?logo=nodedotjs&logoColor=white)](https://www.nodejs.com/)

- npm 11

  [![npm Badge](https://img.shields.io/badge/npm-CB3837?logo=npm)](https://www.npmjs.com/)

#### Frameworks:

- Vite 6

  [![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

- React 19

  [![React Badge](https://img.shields.io/badge/React-CB3837?logo=react)](https://react.dev/)

#### Libraries:

- Bootstrap 5

  [![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
  
- React Bootstrap 2

  [![React Bootstrap Badge](https://img.shields.io/badge/React_Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://react-bootstrap.github.io/)

- React Router 7

  [![React Router Badge](https://img.shields.io/badge/React_Router-CB3837?logo=react&logoColor=white)](https://reactrouter.com/en/main)
## Structure

A high-level structure of the project.

### Directory structure

```text
├───.github
│   └───workflows
├───builders
├───documentation
│   ├───screenshots
│   └───templates
├───public
│   └───assets
│       └───images
│           ├───club
│           ├───content
│           ├───layout
│           └───logos
└───src
    ├───assets
    │   └───images
    ├───components
    ├───config
    ├───constants
    ├───content
    │   ├───pages
    │   └───posts
    ├───enums
    ├───forms
    ├───helpers
    ├───layout
    ├───model
    ├───pages
    ├───services
    ├───templates
    ├───utils
    └───vendors
        └───bootstrap
            └───stylesheets
```

### Code structure


### Commands  

The following commands are available in this project
to set up the development environment
and build the production environment.

#### `npm install`

This installs the project and dependencies.

#### `npm run dev`

This runs the app in development mode.<br/>
The page will reload if you make edits.

#### `npm run build`

This builds the app for production to the `dist` folder.<br/>
Your app is ready to be deployed!

#### `npm run preview`

This previews the app in the `dist` folder locally.<br/>
Use this to check if the production build looks OK in your local environment.

#### `npm run host`

This runs the app in development mode at [http://hpsc.local](http://hpsc.local).<br/>
The page will reload if you make edits.

#### `npm run sitemap`

This creates a sitemap of the web page.<br/>
It outputs the sitemap to the console, and then it can 
be copied to `public/sitemap.xml`.

### Environment Variables

The npm key to `@tahoni` on GitHub needs
to be set in the `GITHUB_TOKEN` environment variable,
to load the `tahoni-lib-react` npm package.

The Google Maps API key from Google Cloud Services needs
to be set in the `GOOGLE_MAPS_API_KEY` environment variable,
otherwise, the map will not be available.

The Google reCAPTCHA site key from Google Cloud Services needs
to be set in the `RECAPTCHA_V2_SITE_KEY` environment variable,
otherwise, the CAPTCHA will break.

