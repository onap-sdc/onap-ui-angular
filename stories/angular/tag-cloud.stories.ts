import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { TagCloudModule } from '../../src/angular/tag-cloud/tag-cloud.module';

let stories = storiesOf('Tag Cloud', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      ],
      imports: [
        TagCloudModule,
      ]
    })
  )
  let containsViewOnlyList = true;
  let containsViewOnly = true;
  let containsUniqueList = true;
  createStory(stories, "All options", !containsViewOnlyList, containsViewOnly, containsUniqueList, "Tag cloud", "Full example of simple tag cloud.");
  createStory(stories, "View only", !containsViewOnlyList, containsViewOnly, !containsUniqueList, "Tag cloud", "Full example of simple tag cloud with View only.");
  createStory(stories, "View only list", containsViewOnlyList, !containsViewOnly, !containsUniqueList,  "Tag cloud", "Full example of simple tag cloud with View only list.");
  createStory(stories, "Unique list", !containsViewOnlyList, !containsViewOnly, containsUniqueList, "Tag cloud", "Full example of simple tag cloud with View unique list.");

  function createStory(stories, title, containsViewOnlyList, containsViewOnly, containsUniqueList, notesTitle, notesText){
    stories.add(title, () => {
        let _label = text('label', 'Please Enter value');
        let _list = array('List', ['aaa', 'bbb', 'ccc'], ',');
        let _isViewOnly = containsViewOnly ? boolean('View only', false) : null;
        let _listViewOnly = containsViewOnlyList ? array('List of view only params', [0,3], ',') : null;
        let _isUniqueList = containsUniqueList ? boolean('Unique list', false) : null;
        let _uniqueErrorMessage = containsUniqueList ? text('Unique error message', 'Unique error') : null;
        let _placeholder =  text('place holder', 'Type a value and then click enter or');
        const _testId = text('testId', 'tag-cloud-test-id');
        let _listChanged = text('*(listChanged)', 'Event throws when tag cloud list changed, see in Action logger tab.');

        return {
            props: {
                listChanged: action('tag cloud list changed'),
                _label, _list, _isViewOnly, _listViewOnly, _isUniqueList, _uniqueErrorMessage, _placeholder,
                containsViewOnly, _testId
                
            },
            template: `
            <sdc-tag-cloud
            #tagCloud
                [label] = "_label"
                [(list)] = "_list"
                [isViewOnly] = "this.containsViewOnly ? _isViewOnly : _listViewOnly"
                [isUniqueList] = "_isUniqueList"
                [uniqueErrorMessage] = "_uniqueErrorMessage"
                [placeholder] = "_placeholder"
                [testId]="_testId"
                (listChanged)= "listChanged($event)"
            >
            </sdc-tag-cloud>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }
