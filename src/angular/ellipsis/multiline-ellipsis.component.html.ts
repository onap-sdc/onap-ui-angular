export const template = `
<div class="multiline-ellipsis-container" [ngClass]="className" [ngStyle]="stylesContainer" #multilineEllipsisContainer
	[attr.data-tests-id]="testId">
	<div class="multiline-ellipsis-content" [ngStyle]="stylesContent" #multilineEllipsisContent>
		<ng-content></ng-content>
		<div class="multiline-ellipsis-dots" [ngStyle]="stylesDots"></div>
	</div>
</div>
`;
