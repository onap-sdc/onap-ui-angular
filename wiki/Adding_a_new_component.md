# Adding a new component
To add a new component to this project, and to its showcase powered by [storybook](https://github.com/storybooks/storybook), follow the following simple guidelines. Throughout this guide, we will pretend to be adding a new component called *myComponent*.

Note: the project is build of 3 different projects:
1. [onap-ui-common](https://github.com/onap-sdc/onap-ui-common) - contains HTML and SCSS files for all components
2. [onap-ui-angular](https://github.com/onap-sdc/onap-ui-angular) - contains Angular components according to the HTML defined in onap-ui-common
3. [onap-ui-react](https://github.com/onap-sdc/onap-ui-react) - contains React components according to the HTML defined in onap-ui-common

## 1. Create a new feature branch
In your forked repository, after making sure your `master` branch is synced with original repository's `master`, create a new branch named feature/myComponent.
Note: This should be done in all 3 projects: onap-ui-common, onap-ui-angular, onap-ui-react

## 2. Add .html and .scss files (onap-ui-common only)
* Under the components directory (onap-ui-common) at the root of the project, create a new directory with the name of your component.
* Create **one** .scss file, declaring the appropriate classes and rules for your component, following the css guidelines in terms of hierarchy and naming methodology. Make sure to name your file by the following convention: **_myComponent.scss**.
* Create **multiple** .html files, one for each of the possible styles of your component, using the classes you declared in the .scss file.

## 3. Import your .scss file (onap-ui-common only)
Add the appropriate import for your new .scss file in scss/_components.scss:
```scss
@import ../components/myComponent.scss;
```

## 4. Implement the React and Angular2 components (onap-ui-angular / onap-ui-react)
The next step is to use your html and scss structure and implement them in React and Angular.

### React 
See [onap-ui-react](https://github.com/onap-sdc/onap-ui-react) project for more details

### Angular
Create a new folder with component name under src/angular. Inside the folder create component module, ts file and HTML file.
Keep the names according to the rule: **MyComponent.component.ts**, and implement the component. Make sure to exporting your component.

Note: due to issues compiling the HTML files, all HTML files as extension of .ts

**Create component typescript file**
```js
// src/angular/MyComponent/my-component.component.ts

import { Component, Input } from "@angular/core";
import { template } from "./my-component.component.html";

@Component({
    selector: "my-component",
    template: template
})

export class MyComponent {
    @Input() public testId: string;
    @Input() public text: string;

    constructor() {}

    public onClick = (e): void => {
        // Do something
    }

}
```

**Create component HTML file**
```js
// src/angular/MyComponent/my-component.component.html.ts
export const template = `
<button class="my-button [attr.data-tests-id]="testId">{{ text }}</button>
`;
```

**Create component module file**
```js
// src/angular/MyComponent/my-component.module.ts
import { NgModule } from "@angular/core";
import { MyComponent } from "./my-component.component";

@NgModule({
    declarations: [MyComponent],
    imports: [],
    exports: [MyComponent],
})
export class MyComponentModule {}
```

**Export the component in src\angular\components.ts file**

```js
// src/angular/components.ts

export { MyComponent } from "./src/angular/my-component/my-component.component";
```

## 5. Add your component to storybook
See [Adding a component to storybook](https://github.com/onap-sdc/onap-ui-angular/wiki/Adding-a-new-component-to-storybook).

## 6. Push and create a new pull request
Push your branch to your fork's origin/feature/myComponent, and create a new pull request from your fork to the original repo.

## 7. Release if needed
If your changes require a new release to `npm`, please contact the administrators.

Hurray! your component is live at the [showcase](https://onap-sdc.github.io/onap-ui-angular/), and if it was released can be consumed from npm.
