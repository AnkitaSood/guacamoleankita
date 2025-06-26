import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'About Me - Ankita Sood',
};

@Component({
  selector: 'app-home',
  template: `
    <div class="about-container">
      <h1>Hey there!</h1>
      <h2>My name is Ankita Sood</h2>
      <p class="about-text">
        I'm a Google Developer Expert in Angular, currently based in Austin, Texas. 
        Depending on the weather, I can be found outdoors hiking, biking, paddle boarding, 
        trying to pet other peoples' dogs OR staying indoors reading a book. I have an avid 
        interest in all things Design and Angular. I have been a frontend engineer all my 
        adult working life, which is approximately either 10 years or 100 years, because I 
        have lost sense of time since the pandemic.
      </p>
    </div>
  `,
  styles: `
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 0;
    }

    h1 {
      font-size: 2.5rem;
      color: var(--avocado-medium);
      margin-bottom: 1rem;
      font-weight: 700;
    }

    h2 {
      font-size: 2rem;
      color: var(--pit-brown);
      margin-bottom: 2rem;
      font-weight: 600;
    }

    .about-text {
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--text-secondary);
      background: rgba(168, 208, 168, 0.1);
      padding: 2rem;
      border-radius: 16px;
      border-left: 4px solid var(--lime-accent);
      box-shadow: 0 4px 12px rgba(127, 176, 105, 0.1);
    }

    @container main-content (max-width: 768px) {
      .about-container {
        padding: 1rem 0;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      h2 {
        font-size: 1.5rem;
      }
      
      .about-text {
        font-size: 1.1rem;
        padding: 1.5rem;
      }
    }
  `
})
export default class HomeComponent {}
