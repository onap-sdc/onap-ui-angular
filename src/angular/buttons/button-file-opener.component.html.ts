export const template = `
<div (click)="fileOpener.click()" 
     class="sdc-button sdc-button__{{ type }} btn-{{ size }} {{ iconPositionClass }}"
     [attr.data-tests-id]="testId"
     >
    {{ text }}
    <input
        #fileOpener
        type="file"
        [accept]="allowedExtensions" 
        [disabled] = "disabled"
        (change)="onFileSelect($event)"
        base-sixty-four-input
    />
</div>
`;

// base-sixty-four-input
