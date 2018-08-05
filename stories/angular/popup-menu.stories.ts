import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { PopupMenuModule } from '../../src/angular/popup-menu/popup-menu.module';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';


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
        const _relative = containsRelative ? boolean('Relative', true) : true;
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
            <div style="position: relative; width: 400px; height: 200px; background: blue;" 
                (click)="menu.position = {x:$event.offsetX, y:$event.offsetY}; _open=true;">
                <span class="message">Click in the box...<br/>
                    (popup menu is {{menuStatus === undefined ? 'never opened' : (menuStatus ? 'open at '+menuPos.x+' , '+menuPos.y : 'closed')}})<br/>
                    selected: <span #selectedItem id="selectedItem" [style.color]="selectedItemColor">{{selectedItemValue}}</span>
                </span>
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
                openManu: (menu) =>{
                    menu.position = {x:400, y:500};
                    menu.open = true;
                },
                showSelectedItem: action('select menu item'),
                _item1ClassName, _item1Type, _item2ClassName, _item2Type, _item3ClassName, _item3Type,
                _item4ClassName, _item4Type, _item5ClassName, _item5Type
            },
            template: `
            <div>
                <sdc-button text="open menu" (click)="openManu(menu); openMenuList = true"></sdc-button>
                <br><br>
                <popup-menu-list #menu>
                    <popup-menu-item 
                        [type]="_item1Type"
                        [className]="_item1ClassName"
                        (action)="showSelectedItem('First')">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 24 24">
                        <defs>
                            <path id="add-copy-a1" d="M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M15,10 L12,10 L12,7 C12,6.4 11.6,6 11,6 C10.4,6 10,6.4 10,7 L10,10 L7,10 C6.4,10 6,10.4 6,11 C6,11.6 6.4,12 7,12 L10,12 L10,15 C10,15.6 10.4,16 11,16 C11.6,16 12,15.6 12,15 L12,12 L15,12 C15.6,12 16,11.6 16,11 C16,10.4 15.6,10 15,10"/>
                        </defs>
                        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                            <use xlink:href="#add-copy-a1"/>
                        </g>
                        </svg>
                        First
                    </popup-menu-item>
                    <popup-menu-item 
                        [type]="_item2Type"
                        [className]="_item2ClassName"
                        (action)="showSelectedItem('Selected')">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 24 24">
                        <defs>
                            <path id="add-copy-a2" d="M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M15,10 L12,10 L12,7 C12,6.4 11.6,6 11,6 C10.4,6 10,6.4 10,7 L10,10 L7,10 C6.4,10 6,10.4 6,11 C6,11.6 6.4,12 7,12 L10,12 L10,15 C10,15.6 10.4,16 11,16 C11.6,16 12,15.6 12,15 L12,12 L15,12 C15.6,12 16,11.6 16,11 C16,10.4 15.6,10 15,10"/>
                        </defs>
                        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                            <use xlink:href="#add-copy-a2"/>
                        </g>
                        </svg>
                        Selected
                    </popup-menu-item>
                    <popup-menu-item 
                        [type]="_item3Type"
                        [className]="_item3ClassName">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 24 24">
                        <defs>
                            <path id="add-copy-a3" d="M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M15,10 L12,10 L12,7 C12,6.4 11.6,6 11,6 C10.4,6 10,6.4 10,7 L10,10 L7,10 C6.4,10 6,10.4 6,11 C6,11.6 6.4,12 7,12 L10,12 L10,15 C10,15.6 10.4,16 11,16 C11.6,16 12,15.6 12,15 L12,12 L15,12 C15.6,12 16,11.6 16,11 C16,10.4 15.6,10 15,10"/>
                        </defs>
                        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                            <use xlink:href="#add-copy-a3"/>
                        </g>
                        </svg>
                        Disabled
                    </popup-menu-item>
                    <popup-menu-item 
                        [type]="_item4Type"
                        [className]="_item4ClassName">
                    </popup-menu-item>
                    <popup-menu-item 
                        [type]="_item5Type"
                        [className]="_item5ClassName"
                        (action)="showSelectedItem('Second')">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 24 24">
                        <defs>
                            <path id="add-copy-a4" d="M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M15,10 L12,10 L12,7 C12,6.4 11.6,6 11,6 C10.4,6 10,6.4 10,7 L10,10 L7,10 C6.4,10 6,10.4 6,11 C6,11.6 6.4,12 7,12 L10,12 L10,15 C10,15.6 10.4,16 11,16 C11.6,16 12,15.6 12,15 L12,12 L15,12 C15.6,12 16,11.6 16,11 C16,10.4 15.6,10 15,10"/>
                        </defs>
                        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                            <use xlink:href="#add-copy-a4"/>
                        </g>
                        </svg>
                        Second
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
  
