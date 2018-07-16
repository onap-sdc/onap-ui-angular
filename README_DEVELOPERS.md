# Understanding project build 

Details about building the project for deploying as NPM module

Great document clarify build process: https://medium.com/@trekhleb/how-to-create-aot-jit-compatible-angular-4-library-with-external-scss-html-templates-9da6e68dac6e

## Two main builds:
1. Build onap-ui-angular project as NPM module (npm run build), so 3rd parties can use it.
2. Build onap-ui-angular for storybook (npm run storybook:build), to show the components in github pages.

## package.json scripts
build: main build of the project
build:ngc: run ngc and comoile the typescript files (using NGC)
build:umd: build 4 UMD bundled files using webpack
storybook: start the storybook server
storybook:prebuild: ?
storybook:build: build the storybook code for using in github pages


## Exclude Angular core from the bundle

It might be pretty obvious but we must keep in mind that we’re writing library for Angular project. Since project itself must have Angular core as a dependency the library should not include Angular sources in the bundles it produces. To do so we need to setup peer dependencies in our package.json file.
```json
{
  ...  
  "peerDependencies": {
    "@angular/common": "^6.0.3",
    "@angular/core": "^6.0.3"
  }
  ...
}
```

## Compile using NGC

Running node_modules/.bin/ngc -p tsconfig-aot.json

Some important notes regarding tsconfig-aot.json file:
```json
{
  "compilerOptions": {
    "target": "es5",          // Specifying ES standard
    "module": "es2015",
    "sourceMap": true,        // Ask tsc to generate *.map.js files
    "declaration": true,      // Ask tsc to generate *.d.ts files
    "outDir": "dist",         // Specify output folder for the files
    ...
  },
  "files": [                     // Specify input file for tsc/ngc
    "./src/angular/index.ts"
  ],
  "angularCompilerOptions": {    // Angular compiler specific config
    "genDir": "dist",
    "skipTemplateCodegen": true, // Don't produce *.ngfactory.ts
    ...
  }
}
```

## Bundle using WEBPACK

We use webpack to create UMD (Universal Module Definition) file. This format is for delivering library as a bundle since it ultimately implements both AMD and CommonJS formats. In a result our bundle may be consumed even on the back-end by Node.

Webpack will create 4 files:
1. index.umd.js - Main javascript file, unminified.
2. index.umd.min.js - For consumers convenience minified version of the bundle to decrease download time for the user.
3. index.umd.js.map - For debuging the bundle: JavaScript SourceMaps.
4. index.umd.min.js.map - Same map file minified.

## Build files summary

1. package.json - main build file, define the dependencies and node scripts, also data for deployment.
2. tsconfig-aot.json - used by NGC to compile .ts file to .js files.



