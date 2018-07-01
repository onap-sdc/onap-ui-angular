import { storiesOf } from '@storybook/angular';
import { Welcome } from '@storybook/angular/demo';
import { linkTo } from '@storybook/addon-links';
import '!style-loader!css-loader!sass-loader!./styles.scss';

storiesOf('Welcome', module).add('to Storybook', () => ({
  template: `<storybook-welcome-component (showApp)="showApp()"></storybook-welcome-component>`,
  props: {
    showApp: linkTo('Button'),
  },
  moduleMetadata: {
    declarations: [Welcome],
  },
}));
