import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { LoaderComponent, ButtonComponent, InputComponent, SvgIconComponent } from '../../src/angular/components';
import { FormElementsModule } from '../../src/angular/form-elements/form-elements.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../src/angular/loader/loader.service';
import { LoaderSize } from '../../src/angular/loader/loader.component';

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        LoaderComponent,
        ButtonComponent,
        InputComponent,
        SvgIconComponent
      ],
      imports: [
          CommonModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
          LoaderService
      ]
    })
  )
  .add('Relative loader', () => {
    const _size = select('size', Object.values(LoaderSize), LoaderSize.large);
    const _name = text('name', 'RelativeLoader');
    const _active = boolean('active', false);

      return {
        props: {
            activateLogger: (loader) => {
                loader.activate();
                action('Loader activated')();
            },
            deactivateLogger: (loader) => {
                loader.deactivate();
                action('Loader deactivated')();
            },
            _size, _name, _active
        },
        template: `
        <h2>Loader visible: {{_active}}</h2>
        <sdc-loader #loader1 [size]="_size" [name]="_name" [(active)]="_active">
            <div style="border:1px solid black; padding:20px 100px;">
                <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
            </div>
        </sdc-loader >
        <div style="margin:10px 0px;">
            <sdc-button text="Show loader" (click)="activateLogger(loader1)"></sdc-button>
            <sdc-button text="Hide loader" (click)="deactivateLogger(loader1)"></sdc-button>
        </div>
        `
      }
    },
    { notes: `<h2>Relative loader</h2>
            Relative loader that wraps dom elements.
            Use the KNOBS tab to change values.`
    }
)
.add('Relative loader with service', () => {
    const _size = select('size', Object.values(LoaderSize), LoaderSize.large);
    const _name = text('name', 'RelativeLoader');
    const _active = boolean('active', false);

      return {
        props: {
            activateLogger: (loader) => {
                loader.activate();
                action('Loader activated')();
            },
            deactivateLogger: (loader) => {
                loader.deactivate();
                action('Loader deactivated')();
            },
            _size, _name, _active
        },
        template: `
        <h2>Loader visible: {{_active}}</h2>
        <sdc-loader #loader1 [size]="_size" [name]="_name" [(active)]="_active">
            <div style="border:1px solid black; padding:20px 100px;">
                <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
                <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
            </div>
        </sdc-loader >
        <div style="margin:10px 0px;">
            <sdc-button text="Show loader" (click)="activateLogger(loader1)"></sdc-button>
            <sdc-button text="Hide loader" (click)="deactivateLogger(loader1)"></sdc-button>
        </div>
        `
      }
    },
    { notes: `<h2>Relative loader</h2>
            Relative loader that wraps dom elements.
            Use the KNOBS tab to change values.`
    }
)








.add('General loader', () => {
    const _size = select('size', Object.values(LoaderSize), LoaderSize.large);
    const _name = text('name', 'global');
    const _global = boolean('global', true);

      return {
        props: {
            activateLogger: (loader) => {
                loader.loaderService.activate(loader.name);
                setTimeout(() => {
                    loader.loaderService.deactivate(loader.name);
                }, 2000);
                action('Global loader activated')();
            },
            _size, _name, _global
        },
        template: `
        <sdc-loader [global]="_global" [name]="_name" [size]="_size" #globalLoader></sdc-loader>
        <sdc-button text="Show global loader" (click)="activateLogger(globalLoader)"></sdc-button>
        `
      }
    },
    { notes: `<h2>General loader</h2>
            General loader to hide full screen.
            For this sample added setTimeout() function so the loader will deactivated after 2 seconds.
            Use the KNOBS tab to change values.`
    }
)
