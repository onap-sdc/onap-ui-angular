export const template = `
<div *ngIf="errorMessage" class="error-modal-message-container">
    <div>The following error has occurred:</div>
    <div class="error-modal-message">{{errorMessage}}</div>
</div>
<sdc-accordion *ngIf="additionalDetails" [title]="isOpen? 'Hide Details' : 'Show Details'" (accordionChanged)="isOpen = !isOpen">
    <div class="error-modal-details">
        <div class="detail-row" *ngFor="let key of objectKeys(additionalDetails)">
            <div class="detail-key">{{key}}</div>
            <div class="detail-value">{{additionalDetails[key]}}</div>
        </div>
    </div>
</sdc-accordion>

`;