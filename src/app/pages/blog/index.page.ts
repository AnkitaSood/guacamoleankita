import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Hey there!</h1>
    <h2>My name is Ankita Sood</h2>
    <h3>I'm a Google Developer Expert in Angular, currently based in Austin, Texas . Depending on the weather, I can be found outdoors hiking, biking, paddle boarding,
      trying to pet other peoples' dogs OR staying indoors reading a book. I have an avid interest in all things Design
      and Angular. I have been a frontend engineer all my adult working life, which is approximately either 10 years or
      100 years, because I have lost sense of time since the pandemic. </h3>


    @for (post of posts; track post.attributes.slug) {
    <a [routerLink]="['/', post.attributes.slug]">
      <h2 class="post__title">{{ post.attributes.title }}</h2>
      <p class="post__desc">{{ post.attributes.description }}</p>
    </a>
    }
  `,
  styles: ``,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
