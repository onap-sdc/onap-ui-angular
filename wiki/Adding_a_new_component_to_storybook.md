# Adding a new component to storybook

To add your new component to storybook, follow the steps in this document. Make sure that you added your component to the library as described in [Adding a new component](https://github.com/onap-sdc/onap-ui-angular/wiki/Adding-a-new-component). We will continue from where we took off, pretending to add our new component, MyComponent, to storybook.

## 1. Create the story
under **stories/angular** directory at the root of the project, create a new file called `mycomponents.stories.ts`.

Example of component story file:
```js
import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { MyComponent } from '../../src/angular/components';

storiesOf('Category|MyComponent', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        MyComponent
      ],
      imports: []
    })
  )
  .add('Category name', () => {
      const _text = text('text', 'Simple component');
      const _checked = boolean('checked', false);
      const _disabled = boolean('disabled', false);
      const _testId = text('testId', 'smalpe-test-id');
      const _checkedChange = text('*(checkedChange)', 'Event throws when checked changed, see in Action logger tab.');

      return {
        props: {
            checkedChange: action('MyComponent value changed '),
            _text, _checked, _disabled, _testId
        },
        template: `
        <onap-component 
            [text]="_text"
            [checked]="_checked"
            [disabled]="_disabled"
            [testId]="_testId"
            (checkedChange)="checkedChange($event)"
            >
        </onap-component>
        `
      }
    },
    { notes: `<h2>My Component</h2>
            Full example of my component.
            Use the KNOBS tab to change values.`
    }
)
```

## 3. Run storybook
The final step is to run storybook and make sure everything is working. just run `npm run storybook` to get a local server running, and direct your browser to the outputted address.

If you want to deploy storybook to your fork's github pages, follow [Deploying storybook to a fork's github pages](https://github.com/onap-sdc/onap-ui-common/wiki/Deploying-storybook-to-a-fork's-github-pages).
