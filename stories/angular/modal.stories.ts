import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { TabsModule } from '../../src/angular/tabs/tabs.module';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';
import { ModalConsumerComponent } from './helpers/modal-consumer.component';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';
import { ModalModule } from '../../src/angular/modals/modal.module';
import { ModalService } from '../../src/angular/modals/modal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalInnerContent } from './helpers/modal-inner-content-example.component';

const modalTypes = ['Info', 'Warning', 'Error', 'Success'];

let stories = storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        ModalConsumerComponent,
        ModalInnerContent
      ],
      imports: [
        ModalModule,
        FormElementsModule,
        ButtonsModule,
        BrowserAnimationsModule,
        
      ],
      providers:[
          ModalService
      ],
      entryComponents:[
        ModalInnerContent
      ]
    })
  )
  // modalTypes.forEach((modalType) => {
  //   stories.add(modalType, () => {
  //     return {
  //       props: {
  //         modalType
  //       },
  //       template: 
  //         `<b> ${modalType} Modal</b><br><br>
  //         <modal-consumer [action]="'open' + this.modalType +'Modal'"></modal-consumer>`
        
  //       } 
  //       },
  //       { notes: `<h2>` + modalType + ` modal</h2>
  //                 When click on view model ` + modalType + ` model will open`+
  //                 `<br>Source Code:` +
  //                 `<br><b>this.modalService.open`+ modalType + `Modal('`+ modalType + ` modal title', '`+ modalType + 
  //                 ` modal content', '`+ modalType + `ModalTestId');</b>`
  //       }
    
  //     )   
  // });

  stories.add('Info', () => {
    return {
      props: {
      },
      template: 
        `<b> Info Modal</b><br><br>
        <modal-consumer [action]="'openInfoModal'"></modal-consumer>`
      
      } 
      },
      { notes: `<h2>Info modal</h2>
                When click on view model Info model will open`+
                `<br>Source Code:` +
                `<br><b>this.modalService.openInfoModal('Info modal title', 'Info modal content', 'InfoModalTestId');</b>`
      }
  
  ) 
  stories.add('Warning modal', () => {
    return {
      props: {
      },
      template: 
        `<b> Warning Modal</b><br><br>
        <modal-consumer [action]="'openWarningModal'"></modal-consumer>`
      
      } 
      },
      { notes: `<h2>Warning modal</h2>
                When click on view model warning model will open`+
                `<br>Source Code:` +
                `<br><b>this.modalService.openWarningModal('Warning modal title', 'Warning modal content', 'warningModalTestId');</b>`
      }
  
  )
  
  stories.add('Error modal', () => {
    return {
      props: {
      },
      template: 
        `<b> Error Modal</b><br><br>
        <modal-consumer [action]="'openErrorModal'"></modal-consumer>`
      
      } 
      },
      { notes: `<h2>Error modal</h2>
                When click on view model error model will open`+
                `<br>Source Code:` +
                `<br><b>this.modalService.openErrorModal('Error modal title', 'Error modal content', 'errorModalTestId');</b>`
      }
  
  )  

  stories.add('Success modal', () => {
    return {
      props: {
      },
      template: 
        `<b>Success Modal</b><br><br>
        <modal-consumer [action]="'openSuccessModal'"></modal-consumer>`
      
      } 
      },
      { notes: `<h2>Info modal</h2>
                When click on view model success model will open`+
                `<br>Source Code:` +
                `<br><b>this.modalService.openSuccessModal('Success modal title', 'Success modal content', 'successModalTestId');</b>`
      }
  
  )  

  stories.add('Modal Info with custom buttons', () => {

      return {
        props: {
        },
        template: 
          `<b> Info Modal with custom buttons</b><br><br>
          <modal-consumer [action]="'openInfoModalWithCustomButtons'"></modal-consumer>`
        
        };
        
    },
    { notes: `<h2> Info modal with custom buttons</h2>
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
stories.add('Modal Warning with custom buttons', () => {

    return {
      props: {
      },
      template: 
        `<b> Warning Modal with custom buttons</b><br><br>
        <modal-consumer [action]="'openWarningModalWithCustomButtons'"></modal-consumer>`
      
      };
      
  },
  { notes: `<h2> Warning modal with custom buttons</h2>
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

stories.add('Custom modal', () => {

    return {
      props: {
      },
      template: 
        `<b> Custom modal</b><br><br>
        <modal-consumer [action]="'openCustomModal1'"></modal-consumer>`
      
      };
      
  },
  { notes: `<h2> Custom modal</h2>
            When click on view custom model will open`+
            `<br>Source Code:` +
            `<br>//create modal config object 
            let modalConfig:IModalConfig = {
            size: ModalSize.small,
            title: 'Title',
            type: ModalType.standard,
            buttons: [
                      {text:"Save", size:"'x-small'", callback:this.customModalOnSave, closeModal:false},
                      {text:"Cancel", size:"'x-small'", closeModal:true}]
              };
  
            //open modal with dynamically created 'modalInnerContent' example component. Send data object with input 'name'. 
            let myModal = this.modalService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
  
            private customModalOnSave = ():void => {
                  const saveButton: ModalButtonComponent = myModal.getButtonById("saveButton");
                  saveButton.show_spinner = true;
                  saveButton.spinner_position = Placement.right;
  
                  // Show spinner for 2 seconds
                  console.log('Saving example, please wait ...');
                  window.setTimeout((button: ModalButtonComponent) => {
                      button.show_spinner = false;
                      console.log('Finish saving');
                  }, 2000, saveButton);
            };</b>`
  }
); 
stories.add('Custom modal with custom buttons', () => {

    return {
      props: {
      },
      template: 
        `<b> Custom modal</b><br><br>
        <modal-consumer [action]="'openCustomModal2'"></modal-consumer>`
      
      };
      
  },
  { notes: `<h2> Custom modal</h2>
            When click on view custom model with custom buttons will open`+
            `<br>Source Code:` +
            `<br></b>`
  }
); 

stories.add('Multiple modals', () => {

    return {
      props: {
      },
      template: 
        `<b>Multiple modals</b><br><br>
        <modal-consumer [action]="'openCustomModal3'"></modal-consumer>`
      
      };
      
  },
  { notes: `<h2> Multiple modals</h2>
            When click on view custom model with Multiple modals will open`+
            `<br>Source Code:` +
            `<br></b>`
  }
);



