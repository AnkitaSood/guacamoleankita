import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';

@Component({
  selector: 'app-content-page',
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (content$ | async; as content) {
      <article>
        <analog-markdown [content]="content.content" />
      </article>
    }
  `,
  styles: `
    article {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
  `
})
export default class ContentPageComponent {
  readonly content$ = injectContent<{ title: string; slug: string; description: string }>('slug');
} 