import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!./styles.scss';

storiesOf('Welcome', module).add('to Storybook', () => ({
  template: `
    <div class="storybook-welcome">
      <h1>ONAP-UI-ANGULAR Style-Guide and Components</h1>
      <p>
        This project aims to create a unified UI styled components for multiple development teams who work on the same web-based applications. 
        This repository contains the definition of all the basic widgets and reusable controllers. 
      </p>
      Note: the project is build of 3 different projects:
      <ul>
        <li><a href="https://github.com/onap-sdc/onap-ui-common">onap-ui-common</a> contains HTML and SCSS files for all components.</li>
        <li><a href="https://github.com/onap-sdc/onap-ui-angular">onap-ui-angular</a> contains Angular components according to the HTML defined in onap-ui-common.</li>
        <li><a href="https://github.com/onap-sdc/onap-ui-react">onap-ui-react</a> contains React components according to the HTML defined in onap-ui-common.</li>
      </ul>

      <h2>Usage</h2>
      <h3>Link the library's CSS file</h3>
      <p>
        There are several options to link to onap-ui-angular CSS file:
      </p>

      <h4>SCSS</h4>
      <code>
        @import "path_to_node_modules/onap-ui/css/style.css";
      </code>
      <br><br>

      <h4>HTML</h4>
      <code>
        <![CDATA[
          <link rel="stylesheet" href="path_to_node_modules/onap-ui/css/style.css">
        ]]>
      </code>
      <br><br>

      <h4>As Module (Using loading tool, i.e. <a href="https://webpack.github.io/">Webpack</a>)</h4>
      <code>import "onap-ui/css/style.css";</code>
      <br><br>

      <h4>Angular CLI projects</h4>
      <p>You can add this line to style.css file:</p>
      <code>@import "../node_modules/onap-ui/css/style.css";</code>
      <br><br>

      <h3>Using the library in latest Angular (6)</h3>
      <h4>Add the library to your module</h4>
      <code>
        <![CDATA[
          import { SdcUiComponentsModule, SdcUiComponents } from 'onap-ui-angular';
          @NgModule({
          declarations: [
            AppComponent
          ],
          imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            SdcUiComponentsModule
          ],
          providers: [
            SdcUiComponents.ModalService
          ],
          bootstrap: [AppComponent]
          })
          export class AppModule { }
        ]]>
      </code>
      <br><br>

      <h2>Running storybook</h2>
      The components in this library are displayed via <a href="https://github.com/storybooks/storybook">storybook</a>. 
      Head to <a href="http://onap-sdc.github.io/onap-ui-angular">http://onap-sdc.github.io/onap-ui-angular</a> to see the components that are in <b>master</b>.
      While developing, just run <b>npm run storybook</b> in your terminal to launch a local storybook server where you can see your changes. For deploying storybook to your own fork repository, refer to the guides section below.

      <h3>Useful guides</h3>
      <ul>
        <li><a href="https://github.com/onap-sdc/onap-ui-angular/wiki/Adding-a-new-component">Adding a new component</a></li>
        <li><a href="https://github.com/onap-sdc/onap-ui-angular/wiki/Deploying-storybook-to-a-fork's-github-pages">Deploying storybook to a fork's github pages</a></li>
        <li><a href="https://github.com/onap-sdc/onap-ui-angular/wiki/Understanding-project-build">Understanding project build</a></li>
      </ul>
      
      <h3>Having some trouble? Have an issue?</h3>
      For bugs and issues, please use the <a href="https://github.com/onap-sdc/onap-ui-angular/issues">issues</a> page

      <h3>How to Contribute</h3>
      <ul>
        <li>
          Contribution can be made only by following these guide lines
        </li>
        <li>
          This project combines both <b>React</b> & <b>Angular</b> framework libraries. 
          Hence, every change in the basic HTML files structure, must be followed by changes on react and angular 
          projects (<a href="https://github.com/onap-sdc/onap-ui-angular">onap-ui-angular</a>, <a href="https://github.com/onap-sdc/onap-ui-react">onap-ui-react</a>).
        </li>
        <li>
          There will be no any 3rd party UI framework imported (i.e. <b>Bootstrap</b>, <b>Material</b>, <b>Foundation</b>... etc.).
        </li>
        <li>
          Contribution are done only by the <a href="https://github.com/onap-sdc/onap-ui-angular/wiki/Contribution-guide">contribution guide</a>. 
          Contributions submitted not in this format and guidelines will not be considered.
        </li>
      </ul>
    </div>
  `,
  props: {
  },
  moduleMetadata: {
  },
}));
