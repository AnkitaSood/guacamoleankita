import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
    template: `
    <header class="header">
      <nav class="nav">
        <div class="nav-container">
          <div class="nav-brand">
            <a [routerLink]="'/'" class="brand-link">Ankita Sood</a>
          </div>
          <ul class="nav-menu">
            <li class="nav-item">
              <a [routerLink]="'/'" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">About Me</a>
            </li>
            <li class="nav-item">
              <a [routerLink]="'/talks'" class="nav-link" routerLinkActive="active">Talks</a>
            </li>
            <li class="nav-item">
              <a [routerLink]="'/blogs'" class="nav-link" routerLinkActive="active">Posts</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="main-content">
      <router-outlet />
    </main>
  `,
    styles: ``
})
export class AppComponent {}
