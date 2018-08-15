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
                ` modal content', '`+ buttonType + `ModalTestId');</b>`
      }

    );     
  });

  ['Info'].forEach(() => {
    stories.add('Modal Info with custom buttons', () => {

        return {
          props: {
          },
          template: 
            `<b> Info Modal</b><br><br>
            <modal-consumer [action]="'openInfoModalWithCustomButtons'"></modal-consumer>`
          
          };
          
      },
      { notes: `<h2> Info modal</h2>
                When click on view model Info with custom buttons model will open`+
                `<br>Source Code:` +
                `<br><b>const buttons = [
                      { text: 'CONFIRM', type: ButtonType.info, callback: this.onConfirmAction, closeModal: true },
                      { text: 'CANCEL', type: ButtonType.info, closeModal: true }
                    ] as ModalButtonComponent[];
                  this.modalService.openInfoModal('Info modal title', 'Info modal content', "infoModalTestId", buttons);
                  private onConfirmAction = ():void => {
                    alert("Action has been confirmed");
                  };</b>`
      }
    );     
});

['Warning'].forEach(() => {
  stories.add('Modal Warning with custom buttons', () => {

      return {
        props: {
        },
        template: 
          `<b> Warning Modal</b><br><br>
          <modal-consumer [action]="'openWarningModalWithCustomButtons'"></modal-consumer>`
        
        };
        
    },
    { notes: `<h2> Warning modal</h2>
              When click on view model Warning with custom buttons model will open`+
              `<br>Source Code:` +
              `<br><b>const buttons = [
                { text: 'SAVE', type: ButtonType.warning, callback: this.onSaveAction, closeModal: true },
                { text: 'APPLY', type: ButtonType.warning, callback: this.onApplyAction },
                { text: 'CANCEL', type: ButtonType.warning, closeModal: true }
              ] as ModalButtonComponent[];
              this.modalService.openWarningModal('Warning modal title', 'Warning modal content', "WarningModalTestId", buttons);
              private onSaveAction = (): void => {
                alert("Action has been saved, modal will be close");
              }
              private onApplyAction = (): void => {
                  alert("Action has been applied, modal will not be close");
              }</b>`
    }
  );     
});


