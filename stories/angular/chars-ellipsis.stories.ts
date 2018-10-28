import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { moduleMetadata } from '@storybook/angular';
import { CharsEllipsisComponent } from '../../src/angular/ellipsis/chars-ellipsis.component';

let stories = storiesOf('Chars ellipsis', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        CharsEllipsisComponent
      ],
      imports: [
      ]
    })
  )

  createStory(stories, "Chars ellipsis", "Chars ellipsis", "Example of Chars ellipsis.");

  function createStory(stories, title, notesTitle, notesText){
    stories.add(title, () => {
      const _shortText = text('Short text', 'Short text - No ellipsis!');
      const _longText = text('Long text','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et molestie erat, sit amet rutrum purus. Mauris tristique efficitur felis, rutrum scelerisque enim sodales eu. Cras tristique ipsum a elementum auctor. Donec et elit id sapien tempus posuere. Nulla condimentum semper nisi, ac convallis augue dignissim nec. Nunc vestibulum nisi metus, ac rutrum enim consectetur nec. Vivamus volutpat ac risus aliquet iaculis.\nVestibulum et ex egestas, scelerisque enim et, vehicula nisi. Aenean posuere ornare dolor, in laoreet turpis mattis in. Fusce sodales blandit ornare. Donec porta eros vel tellus consequat, a ultricies augue ullamcorper. Vestibulum dolor diam, auctor ac magna quis, aliquet tincidunt odio. Nulla eu cursus metus. Maecenas laoreet in risus vel suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis facilisis orci rhoncus pharetra pretium. Nam blandit arcu lobortis eros luctus lobortis. Integer gravida iaculis finibus.')
      const _maxChars = number('Max chars', 55);

        return {
            props: {
              _shortText, _longText, _maxChars
            },
            template: `
            <div style="font-size: 12px;">Text is shorter then maxChars:</div><br>
            <chars-ellipsis [text]="_shortText" [maxChars]="_maxChars"></chars-ellipsis><br><br>
            <div style="font-size: 12px;">Text is longer then maxChars (click on more link to see the all text):</div><br>
            <div style="width: 450px">
              <chars-ellipsis [text]="_longText" [maxChars]="_maxChars"></chars-ellipsis>
            <div>
            `
        }
        },
        { notes: `<h2>` + notesTitle + `</h2>` + notesText + `<br>Use the KNOBS tab to change values.`
        }
    )
  }
