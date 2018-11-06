export const template = `
    <span>{{dispalyText}}</span>
    <span *ngIf="longText()" class="ellipsis-directive-more-less" (click)="clickMoreLessLink()"
    >{{collapsed ? "More" : "Less"}}</span>
 `
