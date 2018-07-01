import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

setOptions({
  hierarchyRootSeparator: /\|/,
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require('../stories/angular');

  // automatically import all story ts files that end with *.stories.ts
  const req = require.context('../stories/angular', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
