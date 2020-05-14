<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
   <img src="https://image.flaticon.com/icons/svg/168/168881.svg" alt="Logo" width="100" height="100">

  <h3 align="center">Conan-TIGK10 Backend</h3>

  <p align="center" width="50%">
    An Express.js API written in Typescript and a MySQL database, both containerized and composed with Docker.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Built With](#built-with)
* [Documentation](#Documentation)

<!-- OVERVIEW -->
## Overview
 <img src="https://github.com/Conan-TIGK10/Conan-TIGK10/blob/master/ConanBackend.png" alt="Logo">

## Prerequisites
* [Docker](https://www.docker.com/) - Container Platform
<!-- THE TEAM -->
## Built With
* [Node](https://nodejs.org/en/) - A Javascript runtime.
* [Webpack](https://webpack.js.org/) - A Javascript module bundler.
* [Typescript](https://www.typescriptlang.org/) - A typed Javascript superset.
* [MySQL](https://www.mysql.com/) - A relational database management system.
* [React](https://reactjs.org/) - A Javascript library for building user interfaces
* [TypeScript](https://www.typescriptlang.org/) - Javascript that scales
## Documentation
### Presentation Layer
* [Position Routing](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/pl-express/loaders/express/routers/position.md)
* [Collision Routing](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/pl-express/loaders/express/routers/collision.md)
* [Session Routing](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/pl-express/loaders/express/routers/session.md)
### Business Logic Layer
* [Position Manager](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/managers/positionManager.md)
* [Collision Manager](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/managers/collisionManager.md)
* [Session Manager](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/managers/sessionManager.md)
* [BLLException](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/bl/BLLException.md)


### Data Access Layer
* [Position Repo](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/repos/positionRepo.md)
* [Collision Repo](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/repos/collisionRepo.md)
* [Session Repo](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/repos/sessionRepo.md)
* [DALException](https://github.com/Conan-TIGK10/Backend/blob/development/conan-backend/src/dal/DALException.md)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Conan-TIGK10/Backend.svg?style=flat-square
[contributors-url]: https://github.com/Conan-TIGK10/Backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Conan-TIGK10/Backend.svg?style=flat-square
[forks-url]: https://github.com/Conan-TIGK10/Backend/network/members
[stars-shield]: https://img.shields.io/github/stars/Conan-TIGK10/Backend.svg?style=flat-square
[stars-url]: https://github.com/Conan-TIGK10/Backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/Conan-TIGK10/Backend.svg?style=flat-square
[issues-url]: https://github.com/Conan-TIGK10/Backend/issues
