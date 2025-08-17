# HPSC website

## Table of Contents

- [Technology](#technology)
- [Instructions](#instructions)
- [Structure](#structure)

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

## Instructions

### Commands

The following commands are available in this project
to set up the development environment
and build the production environment.

#### `npm install`

This installs the project and dependencies.

#### `npm run dev`

This runs the app in development mode.<br/>
The page loads at http://localhost:5173.<br/>
The page will reload if you make edits.

#### `npm run build`

This builds the app for production to the `dist` folder.<br/>
Your app is ready to be deployed!

#### `npm run preview`

This previews the app in the `dist` folder locally.<br/>
The page loads at http://localhost:4173/.
Use this to check if the production build looks OK in your local environment.

#### `npm run host`

This runs the app in development mode at http://hpsc.local:5173/, 
if you put hpsc.local in your `hosts` file.<br/>
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

The Google reCAPTCHA site key from Google Cloud Services must
 be set in the `RECAPTCHA_V2_SITE_KEY` environment variable,
otherwise, the CAPTCHA will break.

## Structure

### Naming conventions
#### Directories
The top-level directories are named using lower case.
The leaf directories are named using Pascal case.

#### Styles
All CSS classes are named using snake case.

#### Variables
  - Non-component:
    - All non-component variables are named using camel case.
  - Component:
    - All component variables are named using Pascal case. 

### Other conventions
#### Components
  - Each component is in a directory named after it.
  - The component has a name describing its function and use.
  - The directory has an `index.tsx` or `index.ts`
  including and exporting the component(s) in it.

#### Styles
  - The global stylesheet is called `style.scss`.
  - The `style.sccs` stylesheet includes all the partial global spreadsheets 

### Directory structure

```text
├───.github
│   └───workflows
├───builders
├───documentation
│   ├───demos
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
    │   ├───images
    │   │   ├───icons
    │   │   └───ids
    │   └───stylesheets
    │       └───images
    ├───components
    ├───config
    │   └───Routes
    ├───constants
    ├───content
    │   ├───pages
    │   └───posts
    │       ├───Xxx1
    │       │   └───stories
    │       └───Xxx2
    ├───enums
    ├───forms
    ├───helpers
    ├───layout
    │   ├───Body
    │   ├───Content
    │   ├───Footer
    │   └───Header
    ├───models
    ├───pages
    ├───services
    ├───templates
    ├───utils
    └───vendors
        └───xxxx
            └───stylesheets

```

### Code structure
- `github/`: GitHub-specific files. 
  - `workflows/`: GitHub workflow actions. 

- `builders/`: Scripts to build things, like the sitemap.

- `documentation/`: Files related to documentation. 
  - `demos/`:  Demo GIF images. 
  - `screenshots/`: Screenshot PNG/JPG images.
  - `templates/`: Markdown template files.

- `public/`: The source code files that need to be exposed in the `dist` directory 
   when the project is built.
  - `.htaccess`: The web sever configuration.
  - `favicon.*`: The icon of the website. 
  - `robots.txt`: The web crawler instructions.
  - `site.webmanifest`: The site web manifest.
  - `sitemap.xml`: The sitemap of the website.
  - `*.png`: The icon of the website in different device formats. 
  
  - `assets/`: The JavaScript, stylesheets and images to externalise.
    - `images/`: The images to be externalised. 
      - `club/`: Club-specific images.
      - `content/`: Images related to the website content.
      - `layout/`: Images related to the website layout.
      - `logos/`: Logo images.
  
- `src/`: The source code files that need to be compiled to the `dist` directory, 
  but not directly exposed there.
  
  - `assets/`: Product-specific JavaScript, stylesheets and images.
    - `images/`: The source code images. 
      - `icons/`: Icon images, e.g. the HPSC logo icon in different sizes.
      - `ids/`: ID images, e.g. the HPSC logo in colour and black & white.
    - `stylesheets/`: The source code stylesheets.
      - `style.scss`: The main stylesheet. 
      - `images/`: Images used by or related to the stylesheets.
  
  - `vendors/`:  Vendor-specific JavaScript, stylesheets and images.
    - `xxx/`:  Vendor-specific library name.
      - `stylesheets/`: Stylesheets that include the vendor-specific library and 
      possibly override values in it.

  - `config/`: Configuration components.
    - `Routes/`: Route components used for routing as well as generating the sitemap.
      - `BaseRoutes.ts`: Describe the different routes.
      - `RouteAliases.tsx`: Map each route to a component and sitemap setting.  
      - `AppRoutes.tsx`:  The React Router routes.

  - `layout/`: Layout components.
    - `Header/`: The header of the layout.
    - `Footer/`: The footer of the layout.
    - `Body/`: The body of the layout.
    - `Content/`: The content of the `Body` component.
  
  - `components/`: Website UI/UX components. Each component has its own directory under this.
  - `pages/`: Website pages. Each page has its own directory under this.
  - `forms/`: Website forms. Each form has its own directory under this.
  
  - `content/`: The static and/or dynamic content of the website.
    - `pages/`: The content of the static pages. Each relevant page has its own directory.
    - `posts/`: The content of the dynamic pages. Each relevant page has its own directory.
      - `Xxx1/`: A page with multiple posts.
        - `stories/`: The specific stories making up the page content. 
        Each one is a post on its own, and pages can have multiple stories.
        - `Xxx2/`: A page with a single post.
  - `templates/`: Templates to create output files, e.g. e-mail templates. 
  Forms will mostly use this.

  - `models/`: The model classes.
  - `enums/`:  The enum structures.
  - `constants/`: The global constants, used by multiple components.

  - `services/`: Services providing business logic functionality.
  - `utils/`: Utilities that don't have any dependencies into the project.
  - `helpers/`: Helpers aiding other classes.  

### Assets structure
- `public/`
  - `assets/`
    - `images/`
      - `logos/`: Logo images, colour and black & white.
      - `layout/`: Images used in the layout of the website.
      - `content/`: Images used in the content of the website.
      - `club/`: The HPSC related images.

- `src/`
  - `assets/`
    - `images/`
      - `icons/`: The HPSC icons in different sizes.
      - `ids/`: The HPSC corporate ID images in colour and black & white.
    
    - `stylesheets/`
      - `images/`
        - `_colors.png`: The HPSC colour palette as an image.
    
      - `_colors.scss`: The colour palette classes. 
      - `_fonts.scss`: The font classes.
      - `_icons.scss`: The icon classes.
      - `_forms.scss` The classes used in the forms.
      - `_variables.scss`: The project variables. 
      These variables all start with hpsc.
      - `_theme.scss`: The theme classes. 
      They are defined using the colour, fonts, icons and forms classes.
      They are also defined using the project variables.
      - `_standard.scss`: The built-in classes defined using the theme classes.
      - `style.scss`: The main stylesheet, including all the above stylesheets.

  - `vendors/`:
    - `stylesheets/` 
      - `_custom.scss`: Bootstrap variable overrides.
      - `style.scss`: The Bootstrap classes, with the style overridden in `_custom.scc`.
