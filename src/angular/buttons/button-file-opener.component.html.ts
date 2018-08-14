export const template = `
<div class="sdc-button sdc-button__{{ type }} sdc-button__file-opener btn-{{ size }} {{ iconPositionClass }}"
     [attr.data-tests-id]="testId"
     >
    {{ text }}
    <input
        type="file"
        [attr.data-tests-id]="'file' + testId"
        [accept]="allowedExtensions"
        [disabled] = "disabled"
        (change)="onFileSelect($event)"
    />
</div>
`;

// base-sixty-four-input
