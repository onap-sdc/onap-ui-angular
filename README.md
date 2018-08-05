# ONAP-UI-ANGULAR Style-Guide and Components

This project aims to create a unified UI styled components for multiple development teams who work on the same web-based applications. 
This repository contains the definition of all the basic widgets and reusable controllers. 

Note: the project is build of 3 different projects:
1. [onap-ui-common](https://github.com/onap-sdc/onap-ui-common) - contains HTML and SCSS files for all components
2. [onap-ui-angular](https://github.com/onap-sdc/onap-ui-angular) - contains Angular components according to the HTML defined in onap-ui-common
3. [onap-ui-react](https://github.com/onap-sdc/onap-ui-react) - contains React components according to the HTML defined in onap-ui-common


### Usage

To start using this library you need to install 2 libraris:
1. onap-ui-angular or onap-ui-react.
2. onap-ui-common

```js
npm install --save-dev onap-ui-angular
npm install --save-dev onap-ui-common
```

#### Link the library's CSS file
The main CSS file is defined in onap-ui-common library.
There are several options to link it to your project:

###### Angular CLI projects
You can add this line to src/style.css file:
```js
@import "node_modules/onap-ui-common/lib/style.css";
```

Angular CLI project has angular.json file, that defines location of styles files.
By default angular.json contains the following definition:
```js
	"styles": [
	  "src/styles.css"
	],
```
So you can add to src/styles.css import of onap-ui-common styles.

###### HTML
```html
<link rel="stylesheet" href="node_modules/onap-ui-common/lib/style.css">
```

###### As Module (Using loading tool, i.e. [Webpack](https://webpack.github.io/))
```js
import 'onap-ui-common/lib/style.css';
```

###### Importing SCSS typography files
onap-ui-common also contains to SCSS files:
variables.scss
mixins.scss

You can import these files to your project and get the same color scheme and variables line onap-ui-common.


#### Using the library in latest Angular (6)
###### Add the library to your module
```js
  import { SdcUiComponentsModule, SdcUiComponents } from 'onap-ui-angular';

  @NgModule({
	declarations: [
	  AppComponent
	],
	imports: [
	  BrowserModule,
	  FormsModule,
	  HttpModule,
	  SdcUiComponentsModule
	],
	providers: [
		SdcUiComponents.ModalService
	],
	bootstrap: [AppComponent]
  })
  export class AppModule { }
```	


### Running storybook
The components in this library are displayed via [storybook](https://github.com/storybooks/storybook). Head to [http://onap-sdc.github.io/onap-ui-angular](http://onap-sdc.github.io/onap-ui-angular) to see the components that are in `master`.

While developing, just run `npm run storybook` in your terminal to launch a local storybook server where you can see your changes. For deploying storybook to your own fork repository, refer to the guides section below.


### Useful guides
[Adding a new component](https://github.com/onap-sdc/onap-ui-angular/wiki/Adding-a-new-component)

[Deploying storybook to a fork's github pages](https://github.com/onap-sdc/onap-ui-angular/wiki/Deploying-storybook-to-a-fork's-github-pages)

[Understanding project build](https://github.com/onap-sdc/onap-ui-angular/wiki/Understanding-project-build)

### Having some trouble? Have an issue?
For bugs and issues, please use the [issues](https://github.com/onap-sdc/onap-ui-angular/issues) page

### How to Contribute
**Contribution can be made only by following these guide lines**
* This project combines both `React` & `Angular` framework libraries. Hence, every change in the basic HTML files structure, must be followed by changes on react and angular projects ([onap-ui-angular](https://github.com/onap-sdc/onap-ui-angular), [onap-ui-react](https://github.com/onap-sdc/onap-ui-react)).
* There will be no any 3rd party UI framework imported (i.e. `Bootstrap`, `Material`, `Foundation`... etc.).
* Contribution are done only by the [contribution guide](https://github.com/onap-sdc/onap-ui-angular/wiki/Contribution-guide). Contributions submitted not in this format and guidelines will not be considered.
