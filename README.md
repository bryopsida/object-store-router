# object-store-router

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bryopsida_object-store-router&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bryopsida_object-store-router) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=bryopsida_object-store-router&metric=coverage)](https://sonarcloud.io/summary/new_code?id=bryopsida_object-store-router) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=bryopsida_object-store-router&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=bryopsida_object-store-router) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=bryopsida_object-store-router&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=bryopsida_object-store-router) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=bryopsida_object-store-router&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=bryopsida_object-store-router) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=bryopsida_object-store-router&metric=bugs)](https://sonarcloud.io/summary/new_code?id=bryopsida_object-store-router)

This service acts as a gateway to balance requests to place new objects across a set of [object-stores](https://github.com/bryopsida/object-store), as well as track which store has which object to successfully serve fetch requests.

For a more concrete example, I wish to deploy the object-store as a Daemonset using the node attached storage. object-store-router will be deployed as a deployment. Load balancing of new storage requests will be balanaced on storage space available.

## NPM Scripts

The following scripts are included in the NPM project configuration

- `lint`lints the source code using eslint
- `lint:fix` automatically fixes any lint errors that can be fixed automatically
- `test` uses jest to run test suites
- `build` compiles the typescript into js and places it in the `dist` folder
- `build:docs` generates the documentation pages from the code comments
- `build:image` build the container image from the Dockerfile
- `start` runs the compiled js in `dist`
- `start:dev` runs using nodemon and will automatically rebuild and launch whenever a change is made under the source folder
