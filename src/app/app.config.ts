import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideFileRouter, requestContextInterceptor} from '@analogjs/router';
import {provideContent, withMarkdownRenderer} from '@analogjs/content';
import {withShikiHighlighter} from '@analogjs/content/shiki-highlighter';
import {withInMemoryScrolling, withViewTransitions} from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideFileRouter(
      withViewTransitions(),
      withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'}),
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([requestContextInterceptor])
    ),
    provideClientHydration(),
    provideContent(withMarkdownRenderer(), withShikiHighlighter()),
  ],
};
