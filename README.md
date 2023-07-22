# Pokedex

`Author` - [Luis Moyón](https://github.com/LuisMS7/)

## Requirements

-   [Node v18.17.0](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com)
-   [nvm](https://github.com/nvm-sh/nvm)
-   [React Native v0.71.8](https://reactnative.dev)
-   [Cocoapods v1.12.0](https://cocoapods.org/)
-   [Ruby v2.7.6](https://www.ruby-lang.org/en/)

## Installation

### For MacOS and Linux

```bash
# install node v18.17.0
$ nvm install

# switch to node v18.17.0
$ nvm use

# install dependencies
$ yarn install
```

#### For Windows

```bash
# install node v18.17.0
$ nvm install v18.17.0

# switch to node v18.17.0
$ nvm use v18.17.0

# install dependencies
$ yarn install
```

## Running the app

```bash
# run the app on android
$ yarn android

# run the app on ios
$ yarn ios
```

## Running the tests

```bash
$ yarn test
```

## Architecture

The architecture of this project follows the Feature Folder Structure for React/React Native.\
Each folder contains a subfolder `__tests__` where all the tests of the files corresponding to the folder are located.

### General folder structure

The folder structure of the project is as follows:

```
src/
├── assets/
├── components/
├── features/
├── hooks/
├── lib/
├── navigation/
├── providers/
├── store/
├── types/
└── utils/
App.tsx
```

### assets folder

Assets folder contains all the project static files like the images used on the project.

### components folder

Components folder contains all the components that can be reused in different features.

### features folder

Features folder encapsulate all the features of our business or app.

### hooks folder

Hooks folder contains all the custom hooks that are used on the project. This hooks contains logic that can be reused in different features.

### lib folder

Lib folder contains any application-specific files that are used globally throughout the app like axios instance and constants.

### navigation folder

Navigation folder contains all the navigation stacks and root stack configuration.

### provider folder

Providers folder contains context providers responsible for managing state and sharing data across components in the project.

### store folder

Store folder houses the state management files. It contains the Redux store configuration.

### types folder

Types folder contains types that describe business objects or general project types.

### utils folder

Utils folder contains functions or code that can perform quick tasks. Also, it contains test utils like mocks.

### App.tsx

Apps.tsx is the main component of the project. It connects all the components.
<br>
<br>

### Feature folder structure

The folder structure of a feature is as follows:

```
src/
├── ...
└── features/
    ├── feature/
    |   ├── assets/
    |   ├── components/
    |   ├── hooks/
    |   ├── screens/
    |   ├── store/
    |   ├── types/
    |   └── utils/
    └── ... (other features)
```

### assets folder

Assets folder contains all the feature-specific assets like images, icons, vectors and media.

### components folder

Components folder contains all the feature-specific components.

### hooks folder

Hooks folder contains all the custom feature-specific hooks.

### screens folder

Screens folder contains all the feature-specific screens. These screens are the ones that will be imported on navigation stacks.

### store folder

Store folder contains the feature-specific store slice for state management that includes reducer, actions and selectors.


### types folder

Types folder contains all the feature-specific types or models to use.

### utils folder

Utils folder contains all the feature-specific utils.

## Project Overview

https://github.com/LuisMS7/luisMoyon_pokedex/assets/31932535/f66db6cd-ee78-44d3-a9dc-f89cecf0a17c
