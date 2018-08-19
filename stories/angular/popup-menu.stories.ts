import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { PopupMenuModule } from '../../src/angular/popup-menu/popup-menu.module';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';
import { Mode, Size, BackgroundShape, BackgroundColor } from "../../src/angular/common/enums";
import { SvgIconModule } from '../../src/angular/svg-icon/svg-icon.module';

let stories = storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
      ],
      imports: [
        PopupMenuModule,
        ButtonsModule,
        SvgIconModule
      ]
    })
  )
  let containsPosition = true;
  let containsRelative = true;
  let containsClassName = true;
  createMenuListStory(stories, "Menu list All options", containsPosition, containsRelative, containsClassName, "Menu list", "Full example of menu list.");
  createMenuListStory(stories, "Menu list with position", containsPosition, !containsRelative, !containsClassName, "Menu list", "Full example of menu list with position.");
  createMenuListStory(stories, "Menu list with relative", !containsPosition, containsRelative, !containsClassName, "Menu list", "Full example of menu list with relative.");
  createMenuListStory(stories, "Menu list with class", !containsPosition, !containsRelative, containsClassName, "Menu list", "Full example of menu list with class.");

  createMenuItemStory(stories, "Menu item All options", "Tabs", "Full example of simple tabs.");

  function createMenuListStory(stories, title, containsPosition, containsRelative, containsClassName, notesTitle, notesText){
    stories.add(title, () => {
        const _className = containsClassName ? text('Class name', ''): null;
        const _relative = containsRelative ? boolean('Relative', false) : false;
        const _positionLeft = containsPosition ? number('Position left', 0): 0;
        const _positionTop = containsPosition ? number('Position top', 0): 0;
        const _open = containsPosition ? boolean('Menu list open', undefined): false;
        const _openChange = text('*(openChange)', 'Event throws when menu is open or close, see in Action logger tab.');
        const _positionChange = text('*(positionChange)', 'Event throws when position changed, see in Action logger tab.');

        return {
            props: {
                selectedItemValue: '',
                selectedItemColor: '',
                openChanged: action('Menu open status is'),
                positionChanged: action('Menu position changed to'),
                showSelectedItem: (itemPlace, color, selectedItem)=> {
                    selectedItem.innerText = itemPlace;
                    selectedItem.style.color = color;
                },
                 _className, _relative, _positionLeft, _positionTop, _open
            },
            template: `
            <div style="position: relative; width: 400px; height: 200px; background: blue;">
                <span class="message" style="position: absolute; color: #ffffff;top: 0; left: 0;">Click in the box...<br/>
                    (popup menu is {{menuStatus === undefined ? 'never opened' : (menuStatus ? 'open at '+menuPos.x+' , '+menuPos.y : 'closed')}})<br/>
                    selected: <span #selectedItem id="selectedItem" [style.color]="selectedItemColor">{{selectedItemValue}}</span>
                </span>
                <div style="position: absolute;width: 100%;height: 100%;"
                (click)="menu.position = {x:$event.offsetX, y:$event.offsetY}; _open=true;">
                <popup-menu-list #menu
                    [(open)]="_open"
                    [position] = "{x:_positionLeft, y:_positionTop}"
                    [relative] = "_relative"
                    [className] = "_className"
                    (openChange)="menuStatus=$event; openChanged($event)"
                    (positionChange)="menuPos=$event; positionChanged($event)">
                    <popup-menu-item (action)="showSelectedItem('First', 'red', selectedItem)">First</popup-menu-item>
                    <popup-menu-item type="disabled">Disabled</popup-menu-item>
                    <popup-menu-item type="separator"></popup-menu-item>
                    <popup-menu-item (action)="showSelectedItem('Second', 'green', selectedItem)">Second</popup-menu-item>
                    <popup-menu-item>Third (none)</popup-menu-item>
                </popup-menu-list>
            </div>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }

  function createMenuItemStory (stories, title, notesTitle, notesText){
    stories.add(title, () => {
        const _item1ClassName = text('Item1 class name', '');
        const _item1Type = text('Item1 type', '');

        const _item2ClassName = text('Item2 class name', '');
        const _item2Type = text('Item2 type', 'selected');

        const _item3ClassName = text('Item3 class name', '');
        const _item3Type = text('Item3 type', 'disabled');

        const _item4ClassName = text('Item4 class name', '');
        const _item4Type = text('Item4 type', 'separator');

        const _item5ClassName = text('Item5 class name', '');
        const _item5Type = text('Item5 type', '');
        const _Action = text('*(action)', 'Event throws when select tab changed, see in Action logger tab.');

        return {
            props: {
                openMenu: (menu) =>{
                    menu.position = {x:400, y:500};
                    menu.open = true;
                },
                showSelectedItem: action('select menu item'),
                _item1ClassName, _item1Type, _item2ClassName, _item2Type, _item3ClassName, _item3Type,
                _item4ClassName, _item4Type, _item5ClassName, _item5Type
            },
            template: `
            <div>
                <sdc-button text="open menu" (click)="openMenu(menu); openMenuList = true"></sdc-button>
                <br><br>
                <popup-menu-list #menu>
                    <popup-menu-item
                        [type]="_item1Type"
                        [className]="_item1ClassName"
                        (action)="showSelectedItem('First')">
                        <svg-icon type="resources_24" name="notification" mode="primary" size="medium"></svg-icon>First
                    </popup-menu-item>
                    <popup-menu-item
                        [type]="_item2Type"
                        [className]="_item2ClassName"
                        (action)="showSelectedItem('Selected')">
                        <svg-icon type="resources_24" name="gateway" mode="primary" size="medium"></svg-icon>Selected
                    </popup-menu-item>
                    <popup-menu-item
                        [type]="_item3Type"
                        [className]="_item3ClassName">
                        <svg-icon type="resources_24" name="loadBalancer" mode="primary" size="medium"></svg-icon>Disabled
                    </popup-menu-item>
                    <popup-menu-item
                        [type]="_item4Type"
                        [className]="_item4ClassName">
                    </popup-menu-item>
                    <popup-menu-item
                        [type]="_item5Type"
                        [className]="_item5ClassName"
                        (action)="showSelectedItem('Second')">
                        <svg-icon type="resources_24" name="mobility" mode="primary" size="medium"></svg-icon>Second
                    </popup-menu-item>
                </popup-menu-list>
            </div>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }


// stories.add('Simple popup menu', () => {
//     const _checkedChange = text('*(checkedChange)', 'Event throws when checklist changed, see in Action logger tab.');

//     return {
//       props: {
//           checkedChange: action('Checklist changed ')
//       },
//       template: `
//       <sdc-button [text]="_text"
//           [testId]="_testId"
//           [type]="_type"
//           [show_spinner]="_show_spinner"
//           [spinner_position]="_spinner_position"
//           (click)="buttonClick(button)"
//           >
//         </sdc-button>
//       `
//     }
//   },
//   { notes: `<h2>Checklist</h2>
//           Full example of checklist.
//           Use the KNOBS tab to change values.`
//   }
// );
