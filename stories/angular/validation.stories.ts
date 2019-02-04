import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ValidationModule } from '../../src/angular/form-elements/validation/validation.module';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';
import { RegexPatterns } from '../../src/angular/common/enums';
import { ButtonsModule } from '../../src/angular/buttons/buttons.module';

let stories = storiesOf('Validation', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        
      ],
      imports: [
        ValidationModule,
        FormElementsModule,
        ButtonsModule

      ]
    })
  ) 
  let containRequiredValid = true;
  let containRegexValid = true;
  let containCustomValid = true;
  let minLength = 2;
  let maxLength = 10;
  let containValidationDisabled = true;
  let containValidatorsDisabled = true;
  createStory(stories, "All options", containRequiredValid, containRegexValid, minLength, maxLength, containCustomValid, containValidationDisabled,
        containValidatorsDisabled, "Validations", "Full example of validation.");
  createStory(stories, "Required validator", containRequiredValid, !containRegexValid, false, false, !containCustomValid, !containValidationDisabled,
        !containValidatorsDisabled, "Validations", "Example of validation with required validator.");
  createStory(stories, "Regex validator", !containRequiredValid, containRegexValid, false, false, !containCustomValid, !containValidationDisabled,
        !containValidatorsDisabled, "Validations", "Example of validation with regex validator.");
  createStory(stories, "Length validator", !containRequiredValid, !containRegexValid, minLength, maxLength, !containCustomValid, !containValidationDisabled,
        !containValidatorsDisabled, "Validations", "Example of validation with length validator.");
  createStory(stories, "Custom validator", !containRequiredValid, !containRegexValid, false, false, containCustomValid, !containValidationDisabled,
        !containValidatorsDisabled, "Validations", "Example of validation with custom validator.");
  createStory(stories, "Validation disabled", !containRequiredValid, !containRegexValid, false, false, !containCustomValid, containValidationDisabled,
        !containValidatorsDisabled, "Validations", "Example of validation with validation disabled.");
  createStory(stories, "Validator disabled", !containRequiredValid, !containRegexValid, false, false, !containCustomValid, !containValidationDisabled,
        containValidatorsDisabled, "Validations", "Example of validation with validators disabled.");

  let containEnterValue = true
  createEmailStory(stories, "Email validation", !containEnterValue, "Validations", "Example of email validation.");
  createEmailStory(stories, "Value entered", containEnterValue, "Validations", "Example of validation with value already entered.");
  
  createDropDownStory(stories, "Validation in drop down");
  createValidationGroupStory(stories, "Validation group");
  function createStory(stories, title, containRequiredValid, containRegexValid, minLength, maxLength, containCustomValid, containValidationDisabled,
                  containValidatorsDisabled, notesTitle, notesText){
  stories.add(title, () => {
        const _validationDisabled = containValidationDisabled ? boolean('Validation disabled', false): false;
        const _requiredMessage = containRequiredValid ? text('Required Validator message', 'Field is required!'): 'Field is required!';
        const _regexMessage = containRegexValid ? text('Regex Validator message', 'This is not a number!'): 'This is not a number!';
        const _minLength = minLength ? text('Min Length', minLength): 2;
        const _minLengthMessage = minLength ? text('Min Length Validator message', 'Minimum length is ' + minLength): 'Value must be longer!';
        const _maxLength = maxLength ? text('Max Length', maxLength): 10;
        const _maxLengthMessage = maxLength ? text('Max Length Validator message', 'Maximum length is ' + maxLength): 'Value must be shorter!';
        const _customMessage = containCustomValid ? text('custom Validator message', 'The number should be 100'): 'The number should be 100';
        const _pattern = containRegexValid ? text('Regex Validator pattern', RegexPatterns.numbers): RegexPatterns.numbers;

        const requiredValidDisabled = containValidatorsDisabled ? boolean('Required Validator disabled', false): false;
        const regexValidDisabled = containValidatorsDisabled ? boolean('Regex Validator disabled', false): false;
        const lengthValidDisabled = containValidatorsDisabled ? boolean('Length Validator disabled', false): false;
        const customValidDisabled = containValidatorsDisabled ? boolean('Custom Validator disabled', false): false;
        const _testId = text('testId', 'validation-test-id');
        
        const _customCallback = containCustomValid ? text ('*(Callback)', 'User function that define a validation'): null;
        const _validityChanged = text('*(validityChanged)', 'Event throws when validation changed, see in Action logger tab.');

        return {
          props: {
              displayRequiredValid: containRequiredValid || containValidationDisabled || containValidatorsDisabled,
              displayRegexValid: containRegexValid || containValidatorsDisabled,
              displayMinLengthValid: minLength  || containValidationDisabled,
              displayMaxLengthValid: maxLength || containValidationDisabled,
              displayCustomValid: containCustomValid || containValidatorsDisabled,
              onChange: action('validation valids'),
              isValueHundred: (value: any) => {
                return (Number(value) === 100) ? true : false;
            },
              _validationDisabled, _requiredMessage, _regexMessage, _minLength, _minLengthMessage, _maxLength, _maxLengthMessage, _customMessage, _pattern,
              requiredValidDisabled, regexValidDisabled, lengthValidDisabled, customValidDisabled, _testId
          },
          template: `
          <sdc-input #numberValidator label="Please enter some number" required="true"></sdc-input>
          <sdc-validation [validateElement]="numberValidator" (validityChanged)="onChange($event)" [disabled]="_validationDisabled"
              [testId]="_testId">
              <sdc-required-validator  *ngIf="this.displayRequiredValid" [message]="_requiredMessage" [disabled]="requiredValidDisabled"></sdc-required-validator>
              <sdc-regex-validator *ngIf="this.displayRegexValid" [message]="_regexMessage" [pattern]="_pattern" [disabled]="regexValidDisabled"></sdc-regex-validator>
              <sdc-length-validator *ngIf="this.displayMinLengthValid" [minLength]="_minLength" [message]="_minLengthMessage" [disabled]="lengthValidDisabled"></sdc-length-validator>
              <sdc-length-validator *ngIf="this.displayMaxLengthValid" [maxLength]="_maxLength" [message]="_maxLengthMessage" [disabled]="lengthValidDisabled"></sdc-length-validator>
              <sdc-custom-validator *ngIf="this.displayCustomValid" [message]="_customMessage" [callback]="isValueHundred" [disabled]="customValidDisabled"></sdc-custom-validator>
          </sdc-validation>
          `
        }
    },
    { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
    }
    )
  }
  function createEmailStory(stories, title, conatainsEnterValue, notesTitle, notesText){
    stories.add(title, () => {
          const _message = text('Validation message','This is not a valid email!');
          const _pattern =  text('Regex validation pattern', RegexPatterns.email);
          const validityChanged = text('*(validityChanged)', 'Event throws when validation changed, see in Action logger tab.');

          return {
          props: {
              inputValue: conatainsEnterValue ? "firstName@" : "",
              onChange: action('Email validation valids'),
              _message, _pattern
          },
          template: `
          <sdc-input #email label="Please enter valid email address" [maxLength]="50" required="true" [value]="inputValue"></sdc-input>
          <sdc-validation [validateElement]="email" (validityChanged)="onChange($event)">
              <sdc-regex-validator [message]="_message" [pattern]="_pattern" ></sdc-regex-validator>
          </sdc-validation>
          `
          }
      },
      { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
      }
    )
  }
  function createDropDownStory(stories, title){
    stories.add(title, () => {
      const validityChanged = text('*(validityChanged)', 'Event throws when validation changed, see in Action logger tab.');
  
      return {
      props: {
        options:[
          {
            "label": "Please select an option",
            "value": ""
          },
            {
              "label": "First Option Label",
              "value": "firstOptionValue"
            },
            {
              "label": "Second Option Label",
              "value": "secondOptionValue"
            },
            {
              "label": "Third Option Label",
              "value": "thirdOptionValue",
              "type": "Simple"
            }
          ],
          onChange: action('Dropdown validation valids'),
          isThirdOption: (value: any) => {
            return value === 'thirdOptionValue';
          }
      },
      template: `
      <sdc-dropdown #mydropdown label="Hi I am a label" [options]="options" [selectedOption]="options[0]"></sdc-dropdown>
      <sdc-validation [validateElement]="mydropdown" (validityChanged)="onChange($event)">
          <sdc-required-validator message="Field is required!"></sdc-required-validator>
          <sdc-custom-validator message="Please select the third option" [callback]="isThirdOption"></sdc-custom-validator>
      </sdc-validation>
      `
      }
  },
  { notes: `<h2>Validation in dropdown</h2> example of validation in dropdown<br>Use the KNOBS tab to change values.`
  }
  )
  }
 
function createValidationGroupStory(stories, title){
  stories.add(title, () => {
    const validityChanged = text('*(validityChanged)', 'Event throws when validation changed, see in Action logger tab.');
  
    return {
    props: {
        emailPattern: RegexPatterns.email,
        numberPattern: RegexPatterns.numbers,
        checkValidateGroup: action('Group validation valids')
    },
    template: `
      <sdc-validation-group #validationGroup>
        <sdc-input #email label="Please enter valid email address" [maxLength]="50" required="true"></sdc-input>
        <sdc-validation [validateElement]="email">
            <sdc-required-validator message="Field is required!"></sdc-required-validator>
            <sdc-regex-validator message="This is not a valid email!" [pattern]="this.emailPattern"></sdc-regex-validator>
        </sdc-validation>
  
        <sdc-input #numberValidator label="Please enter some number" [maxLength]="10" required="true"></sdc-input>
        <sdc-validation [validateElement]="numberValidator">
            <sdc-required-validator message="Field is required!"></sdc-required-validator>    
            <sdc-regex-validator message="This is not a number!" [pattern]="this.numberPattern"></sdc-regex-validator>
        </sdc-validation>
      <sdc-button text="validate group" (click)="checkValidateGroup(validationGroup.validate())"></sdc-button>
    `
    }
  },
  { notes: `<h2>Validation in dropdown</h2> example of validation in dropdown<br>Use the KNOBS tab to change values.`
  }
  )
  
}

