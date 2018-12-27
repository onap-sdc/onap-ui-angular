export const template = `
<div class="sdc-button sdc-button__{{ type }} btn-{{ size }} {{ iconPositionClass }}"
     [attr.data-tests-id]="testId"
     >
    {{ text }}
    <onap-file-opener 
      [extensions]="extensions"
       [disabled]="disabled" 
       [testId]="testId" 
       (fileUpload)="fileUploaded($event)"> 
  </onap-file-opener>
</div>
`;
