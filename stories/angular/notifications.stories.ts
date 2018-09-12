import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { NotificationModule } from '../../src/angular/notifications/notification.module';
import { NotificationSettings } from '../../src/angular/notifications/utilities/notification.config';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';
import { NotificationsExample } from './helpers/notifications-example.component';

let stories = storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        NotificationsExample
      ],
      imports: [
        NotificationModule,
        ButtonsModule
         
      ]
    })
  )
  createStory(stories, "All options", true, true, "Notification", "Full example of simple tabs.");
  // createStory(stories, "Tabs with text", true, false, "Tabs with titles", "Simple tabs with text title.");
  // createStory(stories, "Tabs with icons", false, true, "Tabs with icons", "Simple tabs with icon title.");

  function createStory(stories, title, containsTitle, containsTitleIcon, notesTitle, notesText){
    stories.add(title, () => {
        const _type =  select('Type', ["info", "warning", "error", "success"], 'left', '');
        const _notifyText = text('Text','notif info message test');
        const _notifyTitle = text('Title', 'Notif Titile Info');
        const _sticky = boolean('Sticky', false);
        const _hasCustomContent = boolean('Has customer content', false);
        const _duration = number('Duration', 2000);
        let _notificationSetting = new NotificationSettings(_type, _notifyText, _notifyTitle, _duration, _sticky, _hasCustomContent)
        // const innerComponentType: Type<any>;
        // const innerComponentOptions: any;
        

        return {
            props: {
                selectTab: action('select tab changed'),
                _type, _notifyText, _notifyTitle, _sticky, _hasCustomContent, _duration
            },
            template: `
            <notifications-example></notifications-example>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }
