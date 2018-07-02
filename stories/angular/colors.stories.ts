import { storiesOf } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button, object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { ColorsTable } from './helpers/colors-table.component';
import { KeysPipe } from './helpers/keys.pipe';

const colorMap = [
    {
        'darker-blue': '#323943',
        'dark-blue': '#0568ae',
        'blue': '#009fdb',
        'light-blue': '#1eb9f3',
        'disabled-blue': '#9dd9ef',
        'lighter-blue': '#e6f6fb',
    },
    {
        'green': '#4ca90c',
        'light-green': '#56972b',
        'disabled-green': '#a8e083',
    },
    {
        'red': '#cf2a2a',
        'light-red': '#ed4141',
        'disabled-red': '#f4adad',
    },
    {
        'yellow': '#ffb81c',
        'light-yellow': '#dbbe7e',
        'disabled-yellow': '#aa8432',
    },
    {
        'dark-purple': '#702f8a',
        'purple': '#9063cd',
        'light-purple': '#caa2dd',
    },
    {
        'dark-gray': '#5a5a5a',
        'gray': '#959595',
        'light-gray': '#d2d2d2',
    },
    {
        'silver': '#eaeaea',
        'light-silver': '#f2f2f2',
        'lighter-silver': '#f8f8f8',
    },
    {
        'black': '#000000',
        'text-black': '#191919',
        'white': '#ffffff',
    }
];

storiesOf('Typography|Colors', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
          ColorsTable,
          KeysPipe
      ],
      imports: [
      ]
    })
  )
  .add('Colors', () => {

    return {
        props: {
            colorMap
        },
        template: `
        <colors-table tableTitle="Supported colors" [tableMapColors]="colorMap"></colors-table>
        `
      }
    },
    { notes: `<h2>Colors</h2>
            List of supported colors.`
    }
)
