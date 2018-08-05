import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';
import { ModalModule } from '../../src/angular/modals/modal.module';
import { ModalConsumerComponent } from './helpers/modal-consumer.component';
import { ModalService } from '../../src/angular/services';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let stories = storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        ModalConsumerComponent
      ],
      imports: [
          ModalModule,
          FormElementsModule,
          ButtonsModule,
          BrowserAnimationsModule
      ],
      providers: [
          ModalService
        ]
    })
  )
  const modalTypes = ['Info', 'Warning', 'Error', 'Success'];
 
  modalTypes.forEach((buttonType) => {

    stories.add('Modal' + buttonType, () => {
  
        return {
          props: {
            openModal: action('Modal opened (see in action logger tab)'),
            buttonType
          },
          template: 
            `<b> ${buttonType} Modal</b><br><br>
            <modal-consumer [action]="'open' + this.buttonType +'Modal'"></modal-consumer>`
          
          };
          
      },
      { notes: `<h2>` + buttonType + ` modal</h2>
                When click on view model ` + buttonType + ` model will open`+
                `<br>Source Code:` +
                `<br><b>this.modalService.open`+ buttonType + `Modal('`+ buttonType + ` modal title', '`+ buttonType + 
                ` modal content', '`+ buttonType + `ModalTestId');</b>`+
                `<br>Use the KNOBS tab to change values.`
      }

    );     
  });
