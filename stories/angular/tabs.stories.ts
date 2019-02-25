import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { TabsModule } from '../../src/angular/tabs/tabs.module';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';
import { Size, TabsStyle } from "../../src/angular/common";

const size = Object.keys(Size);

let stories = storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      ],
      imports: [
          TabsModule,
          FormElementsModule
      ]
    })
  )
  let containsTitle = true;
  let containsTitleIcon = true;
  let panelTab: TabsStyle = TabsStyle.panel;
  let tableTab: TabsStyle = TabsStyle.tables;
  createStory(stories, "All options", containsTitle, containsTitleIcon, panelTab, "Tabs", "Full example of simple tabs.");
  createStory(stories, "Table tab all options", containsTitle, containsTitleIcon, tableTab, "Tabs", "Full example of simple tabs.");
  createStory(stories, "Table tab with text", containsTitle, !containsTitleIcon, tableTab, "Tabs", "Full example of simple tabs.");
  createStory(stories, "Tabs with text", containsTitle, !containsTitleIcon, panelTab, "Tabs with titles", "Simple tabs with text title.");
  createStory(stories, "Tabs with icons", !containsTitle, containsTitleIcon, panelTab, "Tabs with icons", "Simple tabs with icon title.");

  function createStory(stories, title, containsTitle, containsTitleIcon, tapStyle, notesTitle, notesText){
    stories.add(title, () => {
        const _title1 = containsTitle ? text('Tab1 title', tableTab ? 'TAB 1': 'tab1') : null;
        const _title2 = containsTitle ? text('Tab2 title', tableTab ? 'TAB 2': 'tab2') : null;
        const _titleIcon1 = containsTitleIcon ? text('Tab1 titleIcon', 'inputs-o') : null;
        const _titleIcon2 = containsTitleIcon ? text('Tab2 titleIcon', 'edit-file-o') : null;
        const _active1 = boolean('Tab1 is active', true);
        const _active2 = boolean('Tab2 is active', false);
        const _tooltip2 = containsTitle ? text('Tab1 title', 'second tab') : null;
        const _size = select('iconsSize', size, 'medium', '');
        const _isVertical = boolean('Tabs are vertical', false);
        const _testId = text('testId', 'tabs-test-id');
        const _selectTab = text('*(selectTab)', 'Event throws when select tab changed, see in Action logger tab.');

        return {
            props: {
                selectTab: action('select tab changed'),
                _title1, _titleIcon1, _active1, _tooltip2,
                _title2, _titleIcon2, _active2, _size, _isVertical, _selectTab, _testId, tapStyle
            },
            template: `
            <sdc-tabs (selectedTab)="selectTab($event)" [testId]="_testId" [iconsSize]="_size" [isVertical]="_isVertical" [tabStyle]="tapStyle">
                <sdc-tab [title]="_title1" [titleIcon]="_titleIcon1" [active]="_active1" [testId]="'title1'">This is tab 1</sdc-tab>
                <sdc-tab [title]="_title2" [titleIcon]="_titleIcon2" [active]="_active2" [tooltipText]="_tooltip2" [testId]="'title2'">This is tab 2</sdc-tab>
            </sdc-tabs>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }
