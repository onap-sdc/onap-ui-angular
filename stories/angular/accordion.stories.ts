import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { AccordionComponent } from '../../src/angular/components';
import { SvgIconModule } from '../../src/angular/svg-icon/svg-icon.module';

const positions = ['right', 'left'];

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [AccordionComponent],
      imports: [
        SvgIconModule
      ]
    })
  )
  .add('Simple accordion', () => {
      const _title = text('title', 'Accordion header');

      return {
        props: {
          _title
        },
        template: `
        <sdc-accordion [title]="_title">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
              Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
              Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
              Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
              Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
              Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
          </p>
        </sdc-accordion>
        `
      }})

  .add('Accordion arrow position', () => {
    const _title = text('title', 'Accordion header');
    const _arrow_direction = select('arrow-direction', positions, 'left', '');

    return {
      props: {
        _title, _arrow_direction
      },
      template: `
      <sdc-accordion 
        [title]="_title"
        [arrow-direction]="_arrow_direction"
        >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
            Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
            Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
            Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
            Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
            Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
        </p>
      </sdc-accordion>
      `
    }})

  .add('Accordion custom class', () => {
      const _title = text('title', 'Accordion header');
      const _arrow_direction = select('arrow-direction', positions, 'left', '');
      const _css_class = text('css_class', 'sdc-accordion-custom-class');
  
      return {
        props: {
          _title, _arrow_direction, _css_class
        },
        template: `
        <sdc-accordion 
          [title]="_title"
          [arrow-direction]="_arrow_direction"
          [css-class]="_css_class"
          >
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
              Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
              Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
              Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
              Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
              Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
          </p>
        </sdc-accordion>
        `
      }})

    .add('Accordion open', () => {
        const _title = text('title', 'Accordion header');
        const _arrow_direction = select('arrow-direction', positions, 'left', '');
        const _css_class = text('css_class', 'custom-class');
        const _open = boolean('open', true, '');

        return {
          props: {
            _title, _arrow_direction, _css_class, _open
          },
          template: `
          <sdc-accordion 
            [title]="_title"
            [arrow-direction]="_arrow_direction"
            [css-class]="_css_class"
            [open]="_open"
            >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
                Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
                Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
                Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
                Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
                Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
            </p>
          </sdc-accordion>
          `
        }})
        
  .add('Accordion full', () => {
      const _title = text('title', 'Accordion header');
      const _arrow_direction = select('arrow-direction', positions, 'left', '');
      const _css_class = text('css_class', 'custom-class');
      const _open = boolean('open', true, '');
      const _accordionChanged = text('(accordionChanged)', 'Accoridon changed event (see in action tab), ');

      return {
        props: {
          accordionChanged: action('Accordion changed event'),
          _title, _arrow_direction, _css_class, _open
        },
        template: `
        <sdc-accordion 
          [title]="_title"
          [arrow-direction]="_arrow_direction"
          [css-class]="_css_class"
          [open]="_open"
          (accordionChanged)="accordionChanged()"
          >
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
              Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
              Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
              Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
              Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
              Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
          </p>
        </sdc-accordion>
        `
      }});      
