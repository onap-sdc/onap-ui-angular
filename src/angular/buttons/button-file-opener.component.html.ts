export const template = `
<div class="sdc-button sdc-button__{{ type }} btn-{{ size }} {{ iconPositionClass }}"
     [attr.data-tests-id]="testId"
     >
    {{ text }}
    <file-opener 
      [extensions]="extensions"
       [disabled]="disabled" 
       [testId]="testId" 
       (fileUpload)="fileUploaded($event)"> 
  </file-opener>
</div>
`;
