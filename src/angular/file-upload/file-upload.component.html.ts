export const fileUploadTemplate = `
  <div class="file-upload">
        <sdc-input class="file-upload-input"
          [label]="label"
          [size]="'large'"
          [isViewMode]="!disabled"
          [placeHolder]="placeHolder || 'Uploade File'"
          [required]="required"
          [(value)]="value"
          [testId]="testId"
          [disabled]="disabled"
          [righIconName]="value && 'close'"
          (onRighIconClicked)="value ? onClear() : undefined"
          [isIconClickable] ="!disabled && value? true: false">
        </sdc-input>
        <sdc-required-validator message="File is required"></sdc-required-validator>
      
      <span class="file-upload-button">
          <svg-icon class="file-upload-svg-icon" 
           [name]="'browse'"
           [size]="'large'" 
           [disabled]="disabled"
           [clickable]="true" 
           [backgroundColor]="'silver'"
           [mode]="'primary2'"
           [backgroundShape]="'rectangle'">
          </svg-icon>
          <onap-file-opener (fileUpload)="fileUploaded($event)" [extensions]="extensions" [convertToBase64]="convertToBase64" [disabled] = "disabled"></onap-file-opener>
      </span>
   </div>
`;
