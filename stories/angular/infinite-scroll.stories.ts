import { storiesOf } from '@storybook/angular';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action, configureActions } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { InfiniteScrollDirective } from '../../src/angular/components';

const basicStyle = `
    .scroll-container {
        margin: 12px;
        border: none;
        padding: 5px;
        width: 200px;
        height: 100px;
        overflow: auto;
        font-size: 20px !important;
        box-shadow: #666 1px 1px 10px;
    }
    .example-source {
        background: #eeeeee;
        padding: 10px;
        border: 1px solid #999999;
    }
    .example-source pre {
        overflow: hidden;
        background: #dddddd;
        margin-top: 5px;
        padding: 5px;
        user-select: text;
    }
`;

const makeBasicStyleDistance = (distance: number) => `
    .scroll-container::after {
        display: block;
        content: '';
        height: ${distance}px;
        background: red;
    }
`;

storiesOf('Infinite-Scroll', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      declarations: [
        InfiniteScrollDirective
      ],
      imports: [
      ]
    })
  )
  .add('Simple', () => {
    const _infiniteScroll = text('infiniteScroll', 'Event throws when scroll reach down');

    return {
        props: {
            hitBottomCount: 0,
            onScrollHitBottom: () => {
                action('scroll hit bottom')();
                this.hitBottomCount++;
            },
            numLines: Array(20).fill(null)
        },
        styles: [basicStyle],
        template: `
        <div (infiniteScroll)="onScrollHitBottom()" class="scroll-container">
            <div *ngFor="let _i of numLines; let i=index">
                Line {{i + 1}}
            </div>
        </div>
        Hit bottom for <b>{{hitBottomCount}}</b> times!
        `
      }
    },
    { notes: `<h2>Infinite-Scroll</h2>
            Simple infinite scroll, throws event when reach bottom (see in action logger).
            Use the KNOBS tab to change values.`
    }
)
.add('With bottom distance', () => {
    const _infiniteScrollDistance = number('infiniteScrollDistance', 20);
    const _infiniteScroll = text('infiniteScroll', 'Event throws when scroll reach down');

    return {
        props: {
            hitBottomCount: 0,
            onScrollHitBottom: () => {
                action('scroll hit bottom')();
                this.hitBottomCount++;
            },
            numLines: Array(20).fill(null),
            _infiniteScrollDistance
        },
        styles: [basicStyle, makeBasicStyleDistance(50)],
        template: `
        <div (infiniteScroll)="onScrollHitBottom()" [infiniteScrollDistance]="_infiniteScrollDistance" class="scroll-container">
            <div *ngFor="let _i of numLines; let i=index">
                Line {{i + 1}}
            </div>
        </div>
        Hit bottom for <b>{{hitBottomCount}}</b> times!
        `
      }
    },
    { notes: `<h2>Infinite-Scroll</h2>
            Simple infinite scroll with distance at the bottom, throws event when reach bottom (see in action logger).
            Use the KNOBS tab to change values.`
    }
)
.add('Expanding content synchrony', () => {
    const _infiniteScrollDistance = number('infiniteScrollDistance', 20);
    const _infiniteScroll = text('infiniteScroll', 'Event throws when scroll reach down');

    return {
        props: {
            hitBottomCount: 0,
            onScrollHitBottom: () => {
                action('scroll hit bottom')();
                this.hitBottomCount++;
                this.insertPageImmediately(this.pageCount + 1);
                this.pageCount++;
            },
            numLines: Array(20).fill(null),
            _infiniteScrollDistance
        },
        styles: [basicStyle, makeBasicStyleDistance(50)],
        template: `
        <div (infiniteScroll)="onScrollHitBottom()" [infiniteScrollDistance]="_infiniteScrollDistance" class="scroll-container">
            <div *ngFor="let _i of numLines; let i=index">
                Line {{i + 1}}
            </div>
        </div>
        Hit bottom for <b>{{hitBottomCount}}</b> times!
        `
      }
    },
    { notes: `<h2>Infinite-Scroll</h2>
            Simple infinite scroll with distance at the bottom, throws event when reach bottom (see in action logger).
            Use the KNOBS tab to change values.`
    }
)
.add('Expanding content asynchrony', () => {
    const _infiniteScrollDistance = number('infiniteScrollDistance', 20);
    const _infiniteScroll = text('infiniteScroll', 'Event throws when scroll reach down');

    return {
        props: {
            hitBottomCount: 0,
            onScrollHitBottom: () => {
                action('scroll hit bottom')();
                this.hitBottomCount++;
                if (!this.isPageLoading) {
                    this.isPageLoading = true;
                    this.loadPageAsync(this.pageCount + 1, 5000).then(() => {
                        this.pageCount++;
                        this.isPageLoading = false;
                    });
                }
            },
            numLines: Array(20).fill(null),
            _infiniteScrollDistance
        },
        styles: [basicStyle, makeBasicStyleDistance(50)],
        template: `
        <div (infiniteScroll)="onScrollHitBottom()" [infiniteScrollDistance]="_infiniteScrollDistance" class="scroll-container">
            <div *ngFor="let _i of numLines; let i=index">
                Line {{i + 1}}
            </div>
        </div>
        Hit bottom for <b>{{hitBottomCount}}</b> times!<br/>
        Loaded {{pageCount}} pages! <span *ngIf="isPageLoading">LOADING page #{{this.pageCount + 1}} ...</span>
        `
      }
    },
    { notes: `<h2>Infinite-Scroll</h2>
            Simple infinite scroll with distance at the bottom, throws event when reach bottom (see in action logger).
            Use the KNOBS tab to change values.`
    }
)
